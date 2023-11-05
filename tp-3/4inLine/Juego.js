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
            player1: new Jugador(1, config.players[0].name, config.players[0].color, config.players[0].character, config.players[0].img, config.totalDisks, new Disco(0, 0, config.boardSize / 3, config.players[0].color)),
            player2: new Jugador(2, config.players[1].name, config.players[1].color, config.players[1].character, config.players[1].img, config.totalDisks, new Disco(0, 0, config.boardSize / 3, config.players[1].color))
        };

        this.board = null;
        this.currentPlayer = this.players.player1;
        this.winNumber = config.winNumber;
        this.speed = config.speed;
        this.pile1 = null;
        this.pile2 = null;

        
    }

    initGame() {
        //instancio Tablero y le paso los parametros necesarios para que sepa dibujarse, y seteo mi atributo board en esta clase
        //al instanciar Tablero se llamara al metodo initBoard() de esta clase en el constructor

        this.board = new Tablero(this.config.width / 2 - this.config.cols / 2 * this.config.boardSize, //X
            this.config.height / 2 - this.config.rows / 2 * this.config.boardSize, //Y
            this.config.boardSize, //tamanio del tablero ingresado en el input range
            this.config.rows, //filas del input radio ckeckeado
        this.config.cols); //columnas del input radio checkeado

        this.initScreen();
        this.initSecondaryCanvas(); //inicia el canvas secundario para los eventos de drag y drop de los discos

        this.players.player1.getSubCtxCanvas().addEventListener('mousedown', async (e) => {
            if (this.currentPlayer !== this.players.player1) return; //chequea por si no es el turno del jugador
            this.playTurn();
        });

        this.players.player2.getSubCtxCanvas().addEventListener('mousedown', (e) => {
            if (this.currentPlayer !== this.players.player2) return;
            this.playTurn();
        });
    }

    initScreen() {
        //Limpio el tablero preexistente en caso de haber uno
        console.log('ctx: ', this.ctx)
        this.ctx.clearRect(0, 0, this.config.width, this.config.height);
        this.ctx.canvas.parentElement.querySelector('.player-info.p1')?.remove();
        this.ctx.canvas.parentElement.querySelector('.player-info.p2')?.remove();
        this.ctx.canvas.parentElement.querySelector('.winner')?.remove();
        //Draws new board
        this.board.draw(this.ctx, this.config.width, this.config.height); //llamo al metodo de la clase Tablero y le paso el ctx del Canvas por param, asi como el ancho y alto configurado

        this.players.player1.fillDisks(this.config.totalDisks); //setea el n de discos para el jugador 1
        this.players.player1.displayPlayerInfo(this.ctx, 1); //muestra la info del jugador 1
        this.players.player2.fillDisks(this.config.totalDisks);
        this.players.player2.displayPlayerInfo(this.ctx, 2);
    }

    initSecondaryCanvas() {
        //canvas temporal creado para mover el disco
        this.tempCanvas = document.createElement('canvas');
        this.tempCanvas.width = this.config.width;
        this.tempCanvas.height = this.config.height;
        this.tempCanvas.classList.add('temporal-canvas');
        this.tempCtx = this.tempCanvas.getContext('2d');

        const moveDisk = (e) => this.moveDisk(e);

        this.tempCanvas.addEventListener('mousemove', moveDisk); //se activa cuando muevo el disco de la pila a lo largo del canvas
        this.tempCanvas.addEventListener('mouseup', async (e) => { //se activa cuando suelto el disco en la columna elegida
            console.log('mouseup')
            await this.dropDisk(e, moveDisk) });
        this.tempCanvas.addEventListener('mouseleave', () => { //se activa si me salgo de los limites del canvas y cancela la accion
            console.log('mouseleave')
            this.cancelMove() });
    }

    playTurn() {
        this.currentPlayer.consumeDisk(); //reduce el numero de discos de la pila en 1 --> totalDisks = totalDisks - 1
        this.currentPlayer.updateDiskPile(); //actualiza el renderizado de los discos
        this.currentPlayer.getDisk().move(0, 0); //resetea la posicion del Objeto Disco que posee el Objeto Jugador como atributo
        //From now on the temporary canvas takes over the mouse events until it closes
        this.ctx.canvas.parentElement.appendChild(this.tempCanvas);
    }

    moveDisk(e) {
        console.log('mousemove')
        let x = e.clientX - this.ctx.canvas.getBoundingClientRect().left;
        let y = e.clientY - this.ctx.canvas.getBoundingClientRect().top;
        let disk = this.currentPlayer.getDisk();
        if (disk.getPosition().x !== x || disk.getPosition().y !== y) {
            this.tempCtx.clearRect(0, 0, this.config.width, this.config.height);
            disk.move(x, y);
            disk.draw(this.tempCtx);
        }
    }

    async dropDisk(e, moveDiskFunction) {
        this.tempCtx.clearRect(0, 0, this.config.width, this.config.height);
        this.tempCanvas.removeEventListener('mousemove', moveDiskFunction);
        this.tempCanvas.classList.add('dying');

        let col = this.getColumn();

        let [success, row, column] = await this.board.putDisk(this.ctx, this.currentPlayer.disk.makeCopy(), this.config.tileSize / this.config.speed, col);

        if (success) {
            this.checkWin(row, column);
            this.switchTurns();
        }
        else {
            this.currentPlayer.restoreDisk();
            this.currentPlayer.updateDiskPile();
        }

        this.ctx.canvas.parentElement.removeChild(this.tempCanvas);
        this.tempCanvas.addEventListener('mousemove', moveDiskFunction);
        this.tempCanvas.classList.remove('dying');
    }

    cancelMove() {
        this.tempCtx.clearRect(0, 0, this.config.width, this.config.height);
        this.currentPlayer.restoreDisk();
        this.currentPlayer.updateDiskPile();
        this.ctx.canvas.parentElement.removeChild(this.tempCanvas);
    }

    getColumn() {
        let x = this.currentPlayer.getDisk().getPosition().x;
        let col = Math.floor((x - this.board.x) / this.config.tileSize);
        if (col >= 0 && col < this.config.cols) {
            return col;
        }
        return null;
    }

    switchTurns() {
        this.currentPlayer = this.currentPlayer === this.players.player1 ? this.players.player2 : this.players.player1;
    }
}

export default Juego