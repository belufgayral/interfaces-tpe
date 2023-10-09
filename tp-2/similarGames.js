const gamesCardData = [
    {
        id: 1,
        title: 'Metal Gear Solid V',
        titleForImg: 'metalgearsolid5',
        forYou: false,
        genre: 'Aventura',
        paid: false,
        price: 'free',
        img: '',
    },
    {
        id: 2,
        title: 'Silent Hill 2',
        titleForImg: 'silenthill2',
        forYou: false,
        genre: 'Terror',
        paid: true,
        price: '50',
        img: '',
    },
    {
        id: 3,
        title: 'Death Stranding',
        titleForImg: 'deathstranding',
        forYou: false,
        genre: 'Aventura',
        paid: true,
        price: '869',
        img: '',
    },
    {
        id: 4,
        title: 'Rise of Tomb Raider',
        titleForImg: 'riseofthetombraider',
        forYou: false,
        genre: 'Aventura',
        paid: false,
        price: 'free',
        img: '',
    },
]

function renderGameCards() {
    const container = document.getElementById('similar-games');
    if (!container) {
        console.error(`Container con id="similar-games" no ha sido hallado.`);
        return;
    }

    // limpiamos el container
    container.innerHTML = '';

    // iteramos los juegos filtrados por genero para generar el layout de la card y su contenido de manera dinamica
    gamesCardData.forEach(game => {
        const card = document.createElement('div');
        card.classList.add('cardGame'); // definimos "cardGame" como clase para nuestro css
        const cardTitle = document.createElement('div');
        cardTitle.classList.add('cardGameTitle');
        const cardFavIcon = document.createElement('div');
        cardFavIcon.classList.add('cardFavIcon');
        const cardToPayIcon = document.createElement('div');
        cardToPayIcon.classList.add('toPayIcon');

        // creamos contenido y precio, esto va a ser contenido para la card
        const title = document.createElement('h3');
        title.classList.add('cardTitle')
        title.textContent = game.title;

        const price = document.createElement('p');
        price.textContent = `Price: $${game.price}`;

        const carritoDiv = document.createElement('div');
        const carritoButton = document.createElement('button');
        carritoDiv.classList.add('carrito-div')
        carritoButton.classList.add('carrito')
        carritoButton.classList.add('secondary')
        carritoButton.textContent = 'Agregar al carrito'

        // creamos el img elem
        const img = document.createElement('img');
        img.classList.add('cardBgImg')
        img.src = `../tp-2/css/images/cards/${game.titleForImg}.png`;
        img.alt = game.title;

        //aca creamos el icon fav y otros iconos que necesitemos
        const favIcon = document.createElement('img')
        favIcon.src = '../tp-2/css/images/icons/fav.svg'
        favIcon.alt = 'fav-icon-heart'

        const toPayIcon = document.createElement('img')
        toPayIcon.src = '../tp-2/css/images/icons/toPay.svg'
        toPayIcon.alt = 'to-pay-icon'

        const playIcon = document.createElement('img')
        playIcon.src = '../tp-2/css/images/icons/play.svg'
        playIcon.alt = 'play-icon'
        playIcon.classList.add('toPlayIconImg')

        // hacemos el append al contenido de la card
        //card.appendChild(price);
        card.appendChild(img);
        card.appendChild(cardTitle);
        //card.appendChild(carritoDiv)
        game.paid && carritoDiv.appendChild(carritoButton)
        card.appendChild(cardFavIcon)
        //game.paid && card.appendChild(cardToPayIcon) //solo si el juego es pago (booleano)
        //appends mas especificos
        cardTitle.appendChild(title);
        cardFavIcon.appendChild(favIcon)
        //game.paid && cardToPayIcon.appendChild(toPayIcon)

        // para el hover (mouseenter)
        card.addEventListener('mouseenter', () => {
            card.appendChild(playIcon);
        });

        // para cuando dejamos el hover (mouseleave)
        card.addEventListener('mouseleave', () => {
            if (card.contains(playIcon)) { // comprobamos que el play icon este appendado antes de quitarlo
                card.removeChild(playIcon);
            }
        });

        // el append al container
        container.appendChild(card);
    });

}

renderGameCards();