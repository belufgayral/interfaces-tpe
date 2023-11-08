import Juego from '../4inLine/Juego.js'

const canvas = document.querySelector('canvas');
/**@type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');
const configWindow = document.querySelector('#config-window');

let config;
let game;

const p1Name = document.querySelector('#player1-name');
const p2Name = document.querySelector('#player2-name');
const p1Color = document.querySelector('#player1-color');
const p2Color = document.querySelector('#player2-color');

let canvasWidth = canvas.width
let canvasHeight = canvas.height

const maxGamePlayers = 2;
const initialSpeed = 4;

const setConfig = (e) => {
    let alert = document.querySelector('#alert-msg');
    let select = document.querySelector('#board-size');
    if (p1Color.value === p2Color.value) {
        alert.innerHTML = 'Players must pick different teams!'
        return
    }
    alert.innerHTML = ''
    config = {
        width: parseInt(canvasWidth),
        height: parseInt(canvasHeight),
        boardSize: parseInt(select.value.slice(0, 1)) === 4 ? 50 : (parseInt(select.value.slice(0, 1)) === 5 ? 55 : 65), //recibe el valor ingresado en el input de board size
        rows: parseInt(select.value.slice(0, 1)), //guarda las fila haciendo un slice del primer valor del 5x6 p ejem
        cols: parseInt(select.value.slice(-1)), //lo mismo que arriba pero con las columnas
        players: [
            {
                name: p1Name.value,
                color: "#f2f1f8",
                faction: p1Color.value,
                character: "H",
                img: "./4inLine/imgs/Hideyoshi.jpg"	
            },
            {
                name: p2Name.value,
                color: "#18171b",
                faction: p2Color.value,
                character: "T",
                img: "./4inLine/imgs/ghostOfTsushima.jpg"
            }
        ],
        totalDisks:  parseInt(select.value.slice(0, 1)) === 4 ? 10 : (parseInt(select.value.slice(0, 1)) === 5 ? 15 : 21), //seteo los discos que tendra cada uno en su pila
        winNumber: parseInt(select.value.slice(0, 1)) === 4 ? 4 : (parseInt(select.value.slice(0, 1)) === 5 ? 5 : 6), //condicion de victoria
        speed: initialSpeed,
        maxJugadores: maxGamePlayers,
    };
};

const start = () => {
    setConfig();
    game = new Juego(ctx, config);
    
    configWindow.classList.add("display-none");
    game.comenzarPartida(); 
}

document.querySelector('#start').addEventListener('click', start);




