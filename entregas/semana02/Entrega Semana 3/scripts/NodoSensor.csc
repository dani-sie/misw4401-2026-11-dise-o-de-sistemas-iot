set ite 0
battery set 100

for k 1 1000

    wait 1               # casi sin pausa

    battery use 5.0      # consumo BRUTAL

    battery bat
    print "Bateria:" bat

    if (bat <= 5)
        cprint "⚠️ CRITICO - BATERIA AGOTADA"
        stop
    end

    inc ite
    print "Iteracion:" ite

end

stop
