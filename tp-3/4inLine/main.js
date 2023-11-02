import Juego from '../4inLine/Juego.js'

const canvas = document.querySelector('canvas');
/**@type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');

let config;
let game;

const slider = document.querySelector('input[type=range]');


let canvasWidth = canvas.width
let canvasHeight = canvas.height

const setConfig = (e) => {
    let radio = document.querySelector('input[type=radio]:checked');
    config = {
        width: parseInt(canvasWidth),
        height: parseInt(canvasHeight),
        tileSize: parseInt(slider.value),
        rows: parseInt(radio.value.slice(0, 1)),
        cols: parseInt(radio.value.slice(-1)),
        players: [
            {
                name: 'Hideyoshi',
                color: '#FFAA12',
                character: "H",
                img: "./4inLine/imgs/Hideyoshi.jpg"	
            },
            {
                name: 'Ghost',
                color: '#CF6A55',
                character: "T",
                img: "./4inLine/imgs/ghostOfTsushima.jpg"
            }
        ],
        totalDisks: 4,
        winNumber: 4,
        speed: 10
    };
};

const start = () => {
    setConfig();
    game = new Juego(ctx, config);
    // Create an Image object and set its source to the background image URL
    /* const backgroundImage = new Image();
    backgroundImage.src = './4inLine/imgs/strategy-samurai-senso.svg';

    function myDrawImageMethod(img) {
        ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight)
    }

    backgroundImage.onload = async function() {
        await myDrawImageMethod(this);
        console.log('bg img onload')
        game.initGame(); 
    }  */ 
    game.initGame(); 
}

start();



