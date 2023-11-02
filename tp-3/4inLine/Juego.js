import Tablero from "./Tablero.js";

class Juego {
    constructor(ctx, config) {
        this.ctx = ctx
        this.auxCanvas = null;
        this.auxCtx = null;
        this.config = config;

        this.board = null;
        this.winNumber = config.winNumber;
        this.speed = config.speed;
        this.pile1 = null;
        this.pile2 = null;

        
    }

   

    initGame() {
        this.board = new Tablero(this.config.width / 2 - this.config.cols / 2 * this.config.tileSize,
            this.config.height / 2 - this.config.rows / 2 * this.config.tileSize,
            this.config.tileSize,
            this.config.rows,
        this.config.cols);

        this.initScreen();
        console.log('init game')
    }

    initScreen() {
        //Clears previous board if it exists
        console.log(this.ctx)
        this.ctx.clearRect(0, 0, this.config.width, this.config.height);
        this.ctx.canvas.parentElement.querySelector('.player-info.p1')?.remove();
        this.ctx.canvas.parentElement.querySelector('.player-info.p2')?.remove();
        this.ctx.canvas.parentElement.querySelector('.winner')?.remove();
        //Draws new board

        this.board.draw(this.ctx);
    }
}

export default Juego