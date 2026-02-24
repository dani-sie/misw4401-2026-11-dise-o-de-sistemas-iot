# Entrega Semana 5 - Capa de Datos (PostgreSQL vs Timescale)

## 1) Repositorio y cambios de codigo
Repositorio de trabajo (rama `postgres` y `timescale`):
- Ruta local: `/home/debian/misw4401-2026-11-diseño-de-sistemas-iot-5`

Cambios realizados para la nueva consulta (mismo proposito en ambas ramas):
- Se agrego el endpoint `GET /api/top-stations/` que devuelve el top de estaciones con mayor promedio para una metrica en las ultimas N horas.
- Parametros: `metric`, `hours`, `limit`.

Archivos modificados:
- `realtimeMonitoring/realtimeGraph/views.py`
- `realtimeMonitoring/realtimeGraph/urls.py`

Fragmentos de codigo (PostgreSQL):

```python
# realtimeMonitoring/realtimeGraph/views.py (rama postgres)

def top_stations(request):
    metric = request.GET.get("metric", "Temperatura")
    hours = int(request.GET.get("hours", 24))
    limit = int(request.GET.get("limit", 5))

    start = timezone.now() - dateutil.relativedelta.relativedelta(hours=hours)

    qs = (
        Data.objects.filter(measurement__name=metric, time__gte=start)
        .values(
            "station_id",
            "station__user__login",
            "station__location__city__name",
            "station__location__state__name",
            "station__location__country__name",
        )
        .annotate(avg=Avg("value"), samples=Count("time"))
        .order_by("-avg")[:limit]
    )

    results = [
        {
            "station_id": r["station_id"],
            "user": r["station__user__login"],
            "city": r["station__location__city__name"],
            "state": r["station__location__state__name"],
            "country": r["station__location__country__name"],
            "avg": round(r["avg"], 4) if r["avg"] is not None else None,
            "samples": r["samples"],
        }
        for r in qs
    ]

    return JsonResponse({
        "metric": metric,
        "hours": hours,
        "limit": limit,
        "results": results,
    })
```

```python
# realtimeMonitoring/realtimeGraph/urls.py
path("api/top-stations/", top_stations, name="top-stations")
```

Fragmentos de codigo (Timescale):

```python
# realtimeMonitoring/realtimeGraph/views.py (rama timescale)

def top_stations(request):
    metric = request.GET.get("metric", "Temperatura")
    hours = int(request.GET.get("hours", 24))
    limit = int(request.GET.get("limit", 5))

    start = timezone.now() - dateutil.relativedelta.relativedelta(hours=hours)

    qs = (
        Data.objects.filter(measurement__name=metric, base_time__gte=start)
        .values(
            "station_id",
            "station__user__login",
            "station__location__city__name",
            "station__location__state__name",
            "station__location__country__name",
        )
        .annotate(avg=Avg("avg_value"), samples=Sum("length"))
        .order_by("-avg")[:limit]
    )

    results = [
        {
            "station_id": r["station_id"],
            "user": r["station__user__login"],
            "city": r["station__location__city__name"],
            "state": r["station__location__state__name"],
            "country": r["station__location__country__name"],
            "avg": round(r["avg"], 4) if r["avg"] is not None else None,
            "samples": r["samples"],
        }
        for r in qs
    ]

    return JsonResponse({
        "metric": metric,
        "hours": hours,
        "limit": limit,
        "results": results,
    })
```

## 2) Comparacion de resultados (JMeter)

Script usado:
- `/home/debian/misw4401-2026-11-diseño-de-sistemas-iot-5/jmeter/top-stations.jmx`

Parametros de prueba:
- `threads=50`, `ramp=10s`, `duration=60s`.
- Endpoint: `GET /api/top-stations/?metric=Temperatura&hours=100000&limit=5`

Reportes generados:
- PostgreSQL: `/home/debian/misw4401-2026-11-diseño-de-sistemas-iot/entregas/semana05/jmeter/reporte_pg`
- Timescale: `/home/debian/misw4401-2026-11-diseño-de-sistemas-iot/entregas/semana05/jmeter/reporte_ts`

Resultados (extraidos de `statistics.json`):

| Escenario | Throughput (req/s) | Avg (ms) | p95 (ms) | Error % |
|---|---:|---:|---:|---:|
| PostgreSQL | 92.06 | 497.73 | 812.0 | 0.0 |
| Timescale | 83.65 | 547.64 | 884.0 | 0.0 |

Adjuntar capturas de los dashboards HTML de JMeter:
- `reporte_pg/index.html`
- `reporte_ts/index.html`

## 3) Reflexion (capa de datos en IoT)

Para esta consulta, PostgreSQL tuvo mayor throughput y menor latencia promedio que Timescale. Aunque Timescale esta optimizado para series de tiempo, el modelo usado en la app (agregaciones sobre `avg_value` y `length`, con filtros por `base_time`) puede introducir mas costo en el agregado en comparacion con el modelo simple de PostgreSQL (`value` y `time`).

Adicionalmente, el rendimiento depende del volumen de datos y del patron de acceso: en esta prueba se consulto un rango amplio (`hours=100000`), lo que puede reducir el beneficio de las optimizaciones de chunking de Timescale si el dataset es pequeno o si las estadisticas aun no estan ajustadas. En un escenario real con mayor volumen y consultas por ventanas de tiempo mas especificas, Timescale suele escalar mejor por su particionamiento por tiempo y funciones de agregacion especializadas.

En conclusion, para cargas moderadas y consultas simples de agregacion, PostgreSQL puede ser suficiente y hasta mas eficiente. Para escenarios IoT con grandes volumenes y consultas sobre ventanas de tiempo, Timescale ofrece una arquitectura mas adecuada y con potencial de mejor escalabilidad.
