import Tablero from "./Tablero.js";
import Jugador from "./Jugador.js";
import Disco from "./Disco.js";

class Juego {
    constructor(ctx, config) {
        this.ctx = ctx
        /* this.auxiliarCanvas = null;
        this.auxiliarContext = null; */
        this.configuracion = config;

        this.players = {
            player1: new Jugador(1, config.players[0].name, config.players[0].color, config.players[0].character, config.players[0].img, config.totalDisks, new Disco(0, 0, config.boardSize / 3, config.players[0].color)),
            player2: new Jugador(2, config.players[1].name, config.players[1].color, config.players[1].character, config.players[1].img, config.totalDisks, new Disco(0, 0, config.boardSize / 3, config.players[1].color))
        };

        this.tableroJuego = null;
        this.jugadorEnTurno = this.players.player1;
        this.condVictoria = config.winNumber;
        this.velocidad = config.speed;
        this.pilaUno = null;
        this.pilaDos = null;
    }

    comenzarPartida() {
        //instancio Tablero y le paso los parametros necesarios para que sepa dibujarse, y seteo mi atributo board en esta clase
        //al instanciar Tablero se llamara al metodo initBoard() de esta clase en el constructor

        this.tableroJuego = new Tablero(this.configuracion.width / 2 - this.configuracion.cols / 2 * this.configuracion.boardSize, //X
            this.configuracion.height / 2 - this.configuracion.rows / 2 * this.configuracion.boardSize, //Y
            this.configuracion.boardSize, //tamanio del tablero ingresado en el input range
            this.configuracion.rows, //filas del input radio ckeckeado
            this.configuracion.cols); //columnas del input radio checkeado

        this.initScreen();
        this.initSecondaryCanvas(); //inicia el canvas secundario para los eventos de drag y drop de los discos



        for (const player in this.players) {
            this.players[player].getSubCtxCanvas().addEventListener('mousedown', (e) => {
                if (this.jugadorEnTurno !== this.players[player]) return;
                this.playTurn();
            });
        }

    }

    initScreen() {
        //Limpio el tablero preexistente en caso de haber uno
        console.log('ctx: ', this.ctx)
        this.ctx.clearRect(0, 0, this.configuracion.width, this.configuracion.height);
        this.ctx.canvas.parentElement.querySelector('.player-info.p1')?.remove();
        this.ctx.canvas.parentElement.querySelector('.player-info.p2')?.remove();
        this.ctx.canvas.parentElement.querySelector('.winner')?.remove();
        //Draws new board
        this.tableroJuego.draw(this.ctx, this.configuracion.width, this.configuracion.height); //llamo al metodo de la clase Tablero y le paso el ctx del Canvas por param, asi como el ancho y alto configurado

        this.players.player1.fillDisks(this.configuracion.totalDisks); //setea el n de discos para el jugador 1
        this.players.player1.displayPlayerInfo(this.ctx, 1); //muestra la info del jugador 1
        this.players.player2.fillDisks(this.configuracion.totalDisks);
        this.players.player2.displayPlayerInfo(this.ctx, 2);
    }

    initSecondaryCanvas() {
        //canvas temporal creado para mover el disco
        this.tempCanvas = document.createElement('canvas');
        this.tempCanvas.width = this.configuracion.width;
        this.tempCanvas.height = this.configuracion.height;
        this.tempCanvas.classList.add('temporal-canvas');
        this.tempCtx = this.tempCanvas.getContext('2d');

        const moveDisk = (e) => this.moveDisk(e);

        this.tempCanvas.addEventListener('mousemove', moveDisk); //se activa cuando muevo el disco de la pila a lo largo del canvas
        this.tempCanvas.addEventListener('mouseup', async (e) => { //se activa cuando suelto el disco en la columna elegida
            console.log('mouseup')
            await this.dropDisk(e, moveDisk)
        });
        this.tempCanvas.addEventListener('mouseleave', () => { //se activa si me salgo de los limites del canvas y cancela la accion
            console.log('mouseleave')
            this.cancelMove()
        });
    }

    playTurn() {
        this.jugadorEnTurno.consumeDisk(); //reduce el numero de discos de la pila en 1 --> totalDisks = totalDisks - 1
        this.jugadorEnTurno.updateDiskPile(); //actualiza el renderizado de los discos
        this.jugadorEnTurno.getDisk().move(0, 0); //resetea la posicion del Objeto Disco que posee el Objeto Jugador como atributo
        //From now on the temporary canvas takes over the mouse events until it closes
        this.ctx.canvas.parentElement.appendChild(this.tempCanvas);
    }

    moveDisk(e) {
        console.log('mousemove')
        let x = e.clientX - this.ctx.canvas.getBoundingClientRect().left; //obtiene la posicion en x empezando desde la izq
        let y = e.clientY - this.ctx.canvas.getBoundingClientRect().top; //obtiene la posicion en y empezando desde arriba
        let disk = this.jugadorEnTurno.getDisk();

        //if (disk.getPosition().x !== x || disk.getPosition().y !== y) { //esto en teoria es para que no trabaje demas, porque si el disco no cambia de posicion no deberia entrar al if
        this.tempCtx.clearRect(0, 0, this.configuracion.width, this.configuracion.height); //esto se hace porque de lo contrario queda como un "gusano" de discos, como si estuvieras pintando
        disk.move(x, y); //vamos pasando la posicion de nuestro cursor en el canvas como nuevas posiciones al disco para arrastrarlo con el mousemove
        disk.draw(this.tempCtx); //debemos volver a dibujarlo
        //}
    }

    async dropDisk(e, moveDiskFunction) { //se activa cuando soltamos el boton primario del click
        this.tempCtx.clearRect(0, 0, this.configuracion.width, this.configuracion.height);
        this.tempCanvas.removeEventListener('mousemove', moveDiskFunction);
        this.tempCanvas.classList.add('dying');

        let col = this.getColumn();
        console.log('drop disk')
        let [success, row, column] = await this.tableroJuego.putDisk(this.ctx, this.jugadorEnTurno.disk.makeCopy(),
            this.configuracion.boardSize / this.configuracion.speed, col);

        if (success) {
            this.checkWin(row, column);
            this.switchTurns();
        }
        else {
            this.jugadorEnTurno.restoreDisk();
            this.jugadorEnTurno.updateDiskPile();
        }

        this.ctx.canvas.parentElement.removeChild(this.tempCanvas);
        this.tempCanvas.addEventListener('mousemove', moveDiskFunction);
        this.tempCanvas.classList.remove('dying');
    }

    cancelMove() {
        this.tempCtx.clearRect(0, 0, this.configuracion.width, this.configuracion.height);
        this.jugadorEnTurno.restoreDisk();
        this.jugadorEnTurno.updateDiskPile();
        this.ctx.canvas.parentElement.removeChild(this.tempCanvas);
    }

    getColumn() { //esto supongo que devuelve de alguna forma la col en la que estamos parados teniendo en cuenta la posicion en x del disco
        let x = this.jugadorEnTurno.getDisk().getPosition().x;
        let col = Math.floor((x - this.tableroJuego.x) / this.configuracion.boardSize);
        if (col >= 0 && col < this.configuracion.cols) {
            return col;
        }
        return null;
    }

    switchTurns() {
        this.jugadorEnTurno = this.jugadorEnTurno === this.players.player1 ? this.players.player2 : this.players.player1;
    }

    //chequeos de condiciones de resultados posibles

    checkWin(row, col) {
        let disk = this.tableroJuego[row][col].getDisk();
        if (this.checkHorizontal(row, col, disk) || this.checkVertical(row, col, disk) || this.checkDiagonal(row, col, disk)) {
            this.jugadorEnTurno.incrementScore();
            this.showWinnerScreen();
        }
    }

    showWinnerScreen() {
        let winner = document.createElement('div');
        winner.classList.add('winner');
        winner.innerHTML = `
            <div>
                <h1>${this.jugadorEnTurno.getName()} wins!</h1>
                <button class="primary-btn">Play again</button>
            </div>
        `;
        winner.height = this.configuracion.height;
        winner.width = this.configuracion.width;
        winner.querySelector('button').addEventListener('click', () => {
            this.comenzarPartida();
            this.jugadorEnTurno = this.players.player1;
        });
        this.ctx.canvas.parentElement.appendChild(winner);
    }

    checkHorizontal(row, col, disk) {
        let count = 1;
        let i = col - 1;
        while (i >= 0 && this.tableroJuego[row][i].getDisk()?.getColor() === disk.getColor()) {
            count++;
            i--;
            if (count >= this.condVictoria) return true;
        }
        i = col + 1;
        while (i < this.configuracion.cols && this.tableroJuego[row][i].getDisk()?.getColor() === disk.getColor()) {
            count++;
            i++;
            if (count >= this.condVictoria) return true;
        }
    }

    checkVertical(row, col, disk) {
        let count = 1;
        let i = row - 1;
        while (i >= 0 && this.tableroJuego[i][col].getDisk()?.getColor() === disk.getColor()) {
            count++;
            i--;
            if (count >= this.condVictoria) return true;
        }
        i = row + 1;
        while (i < this.configuracion.rows && this.tableroJuego[i][col].getDisk()?.getColor() === disk.getColor()) {
            count++;
            i++;
            if (count >= this.condVictoria) return true;
        }
    }

    checkDiagonal(row, col, disk) {
        let count = 1;
        let i = row - 1;
        let j = col - 1;
        while (i >= 0 && j >= 0 && this.tableroJuego[i][j].getDisk()?.getColor() === disk.getColor()) {
            count++;
            i--;
            j--;
            if (count >= this.condVictoria) return true;
        }
        i = row + 1;
        j = col + 1;
        while (i < this.configuracion.rows && j < this.configuracion.cols && this.tableroJuego[i][j].getDisk()?.getColor() === disk.getColor()) {
            count++;
            i++;
            j++;
            if (count >= this.condVictoria) return true;
        }
        count = 1;
        i = row - 1;
        j = col + 1;
        while (i >= 0 && j < this.configuracion.cols && this.tableroJuego[i][j].getDisk()?.getColor() === disk.getColor()) {
            count++;
            i--;
            j++;
            if (count >= this.condVictoria) return true;
        }
        i = row + 1;
        j = col - 1;
        while (i < this.configuracion.rows && j >= 0 && this.tableroJuego[i][j].getDisk()?.getColor() === disk.getColor()) {
            count++;
            i++;
            j--;
            if (count >= this.condVictoria) return true;
        }
    }
}

export default Juego