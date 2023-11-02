import Pila from "./Pila.js";

class Tablero {
    constructor(x, y, pilaSize, rows, cols) {
        this.x = x;
        this.y = y;
        this.pilaSize = pilaSize;
        this.rows = rows;
        this.cols = cols;
        this.tiles = [];
        this.initBoard();
    }

    initBoard() {
        for (let i = 0; i < this.rows; i++) {
            this[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this[i][j] = new Pila(this.x + j * this.pilaSize, this.y + i * this.pilaSize, this.pilaSize, null);
            }
        }
    }

    draw(ctx) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this[i][j].draw(ctx);
            }
        }
    }
}

export default Tablero;