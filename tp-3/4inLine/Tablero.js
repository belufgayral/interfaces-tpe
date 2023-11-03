import Hoyo from "./Hoyo.js";

class Tablero {
    constructor(x, y, hoyoTamanio, rows, cols) {
        this.x = x;
        this.y = y;
        this.hoyoTamanio = hoyoTamanio;
        this.rows = rows;
        this.cols = cols;
        this.tiles = [];
        this.initBoard();
    }

    initBoard() {
        /* console.log(this) */
        for (let i = 0; i < this.rows; i++) {
            this[i] = [];
            for (let j = 0; j < this.cols; j++) { //si es 6x7 iterara 42 veces, es decir, como tantas hoyos haya
                this[i][j] = new Hoyo(this.x + j * this.hoyoTamanio, this.y + i * this.hoyoTamanio, this.hoyoTamanio, null); //x, y, size, img
            }
        }
    }

    draw(ctx, w, h) {
        const backgroundImage = new Image();
        backgroundImage.src = './4inLine/imgs/strategy-samurai-senso.svg';

        function myDrawImageMethod(img) {
            ctx.drawImage(img, 0, 0, w, h) //uso el ancho y alto pasado por params para setear el tamanio del bg image y que se ajuste al canvas
        }

        backgroundImage.onload = async function () {
            myDrawImageMethod(this);
        }

        setTimeout(() => { //le pongo un timeOut para que se dibuje encima de la imagen de fondo que cargamos
            //dibujo la matriz 
            for (let i = 0; i < this.rows; i++) { //si es 5x6 this.rows = 5
                for (let j = 0; j < this.cols; j++) { //si es 5x6 this.cols = 6
                    /* console.log('this i j: ',this[i][j]) */ //ejem: x: 85, y: 30 --> x: 175, y: 30 --> x: 85, y: 120 --> ...
                    /* console.log(this) */ //por consola podremos ver la matriz dibujada en un arreglo de n posiciones (para las filas) y dentro de cada 
                    //posicion otro arreglo de n posiciones (para las columnas), y cada elem de estos arreglos anidados tendra una instancia de Hoyo
                    this[i][j].draw(ctx); //cada this[fila][columna] es una instancia diferente de Hoyo, y aqui llamamos al metodo .draw() de la clase Hoyo
                }
            }
        }, 190)
    }
}

export default Tablero;