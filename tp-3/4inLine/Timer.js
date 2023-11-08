class Timer {
    constructor(tiempoLimite, game) {
        this.tiempoLimite = tiempoLimite;
        this.timerDiv = document.querySelector("#timer");
        this.timer = null;
        this.game = game;
    }

    renderTimer(width, height) {
        this.timerDiv.width = width;
        this.timerDiv.height = height;
        let contador = this.tiempoLimite + 1;
        console.log("Contador original: " + contador);

        this.timer = setInterval(() => {
            contador = contador - 1;
            //console.log("Contador dentro del if: " + contador);
            this.timerDiv.innerHTML = "<h1>" + contador + "</h1>";
            if (contador < 1) {
                this.stopGame();
                clearInterval(this.timer);
            }
        },1000)
    }

    clearTimer() {
        clearInterval(this.timer);
    }

    stopGame() {
        this.game.stopGame();
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