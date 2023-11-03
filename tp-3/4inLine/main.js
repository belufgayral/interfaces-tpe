import Juego from '../4inLine/Juego.js'

const canvas = document.querySelector('canvas');
/**@type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');

let config;
let game;

const slider = document.querySelector('input[type=range]'); //guarda el board size
const p1Name = document.querySelector('#player1-name');
const p2Name = document.querySelector('#player2-name');
const p1Color = document.querySelector('#player1-color');
const p2Color = document.querySelector('#player2-color');

let canvasWidth = canvas.width
let canvasHeight = canvas.height

const setConfig = (e) => {
    let radio = document.querySelector('input[type=radio]:checked');
    config = {
        width: parseInt(canvasWidth),
        height: parseInt(canvasHeight),
        boardSize: parseInt(slider.value), //recibe el valor ingresado en el input de board size
        rows: parseInt(radio.value.slice(0, 1)), //guarda las fila haciendo un slice del primer valor del 5x6 p ejem
        cols: parseInt(radio.value.slice(-1)), //lo mismo que arriba pero con las columnas
        players: [
            {
                name: p1Name.value,
                color: p1Color.value,
                character: "H",
                img: "./4inLine/imgs/Hideyoshi.jpg"	
            },
            {
                name: p2Name.value,
                color: p2Color.value,
                character: "T",
                img: "./4inLine/imgs/ghostOfTsushima.jpg"
            }
        ],
        totalDisks: 4, //seteo los discos que tendra cada uno en su pila
        winNumber: 4, //condicion de victoria
        speed: 10
    };
};

const start = () => {
    setConfig();
    game = new Juego(ctx, config);
    
    game.initGame(); 
}

document.querySelector('#start').addEventListener('click', start);



