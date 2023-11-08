class Timer {
    constructor(tiempoLimite) {
        this.tiempoLimite = tiempoLimite;
    }

    renderTimer(width, height) {
        let timerDiv = document.querySelector("#timer");
        timerDiv.width = width;
        timerDiv.height = height;
        let contador = this.tiempoLimite;
        console.log("Contador original: " + contador);

        // function reducirContador() {
        //     if (contador > 0) {
        //         contador--;
        //         timerDiv.innerHTML = "<h1>" + contador + "</h1>";
        //         console.log("Contador dentro del if: " + contador);
        //         setTimeout(reducirContador(), 1000);
        //       }
        // }

        // reducirContador();

        const timer = setInterval(() => {
            contador = contador - 1;
            console.log("Contador dentro del if: " + contador);
            timerDiv.innerHTML = "<h1>" + contador + "</h1>";
            if (contador < 1) {
                clearInterval(timer);
            }
        },1000)
    }

    // bajarSegundo(tiempoLimite) {

    // }

    // aumentarPorcentaje(timerDiv) {
    //     let valor = 0;

    //     while (valor < this.tiempoLimite) {
    //       valor++;
    //       timerDiv.innerHTML = "<h1>" + valor + "%</h1>";
    //       setTimeout(this.aumentarPorcentaje(), 1000);
    //     }
    //   }

}

export default Timer