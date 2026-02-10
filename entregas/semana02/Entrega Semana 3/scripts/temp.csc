set ite 0
battery set 100

for k 1 1000
    wait 10
    battery use 0.10

    battery bat
    print bat          # <- te deja evidencia numérica cada iteración (o cada 50)

    if (bat < 5)
        cprint "CRITICO"
        set k 1000
    end

    inc ite
end

wait 10
stop

