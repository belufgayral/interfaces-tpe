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
        backgroundImage.src = './4inLine/imgs/bg-board.jpg';

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

    async putDisk(ctx, disk, speed, col) { //esto retorna {success, fila, columna}
        if(col == null) return {
            exito: false,
            fila: null,
            colum: null
        }; //si la columna no existe, no retornamos nada
        let tiles = this.getEmptyTiles(col);
        if (tiles == null) return {
            exito: false,
            fila: null,
            colum: null
        } //si la columna no tiene ninguna fila vacia no retornamos nada
        for (let i = 0; i < tiles.length - 1; i++) { //si tiles tiene hoyos vacios...
            console.log('board put disk for')
            await tiles[i].animateFall(ctx, disk, speed, true); //animamos la caida del disco en cada hoyo vacio
        }
        await tiles[tiles.length - 1].putDisk(ctx, disk, speed, false);
        return {
            exito: true,
            fila: tiles.length - 1,
            colum: col
        }
    }

    getEmptyTiles(col) {
        let tiles = [];
        for (let i = 0; i < this.rows; i++) { //recorremos filas
            //recordemos que this[i][col] es una instancia de Hoyo
            if (this[i][col].getDisk() == null) { //si en el hoyo (de la fila) que estamos de la columna en la que soltamos el disco no tiene disco
                tiles.push(this[i][col]); //mandamos el Objeto Hoyo de esta fila al arreglo tiles
            }
        }
        return tiles.length != 0 ? tiles : null; //si tiles tiene al menos un espacio vacio devolvemos el arreglo
    }
}

export default Tablero;