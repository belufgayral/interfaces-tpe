import Tablero from "./Tablero.js";
import Jugador from "./Jugador.js";
import Disco from "./Disco.js";

class Juego {
    constructor(ctx, config) {
        this.ctx = ctx
        this.auxCanvas = null;
        this.auxCtx = null;
        this.config = config;

        this.players = {
            player1: new Jugador(1, config.players[0].name, config.players[0].color, config.players[0].character, config.players[0].img, config.totalDisks, new Disco(0, 0, config.tileSize / 3, config.players[0].color)),
            player2: new Jugador(2, config.players[1].name, config.players[1].color, config.players[1].character, config.players[1].img, config.totalDisks, new Disco(0, 0, config.tileSize / 3, config.players[1].color))
        };

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
        this.players.player1.fillDisks(this.config.totalDisks);
        this.players.player1.displayPlayerInfo(this.ctx, 1);
        this.players.player2.fillDisks(this.config.totalDisks);
        this.players.player2.displayPlayerInfo(this.ctx, 2);
    }
}

export default Juego