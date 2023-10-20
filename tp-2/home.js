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
        inCart: false
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
        inCart: false
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
        inCart: false
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
        inCart: false
    },
    {
        id: 5,
        title: 'Age of Empires II',
        titleForImg: 'ageofempires2',
        forYou: false,
        genre: 'Estrategia',
        paid: true,
        price: '79',
        img: '',
        inCart: false
    },
    {
        id: 6,
        title: 'Samurai Senso',
        titleForImg: 'samuraisenso',
        forYou: true,
        genre: 'Estrategia',
        paid: false,
        price: 'free',
        img: '',
        inCart: false
    },
    {
        id: 7,
        title: 'Persona 5',
        titleForImg: 'persona5',
        forYou: true,
        genre: 'Aventura',
        paid: true,
        price: '440',
        img: '',
        inCart: false
    },
    {
        id: 8,
        title: 'Bioshock',
        titleForImg: 'bioshock',
        forYou: false,
        genre: 'Accion',
        paid: false,
        price: 'free',
        img: '',
        inCart: false
    },
    {
        id: 9,
        title: 'Genshin Impact',
        titleForImg: 'genshinimpact',
        forYou: true,
        genre: 'Estrategia',
        paid: true,
        price: '129',
        img: '',
        inCart: false
    },
    {
        id: 10,
        title: 'God of War',
        titleForImg: 'godofwar',
        forYou: false,
        genre: 'Aventura',
        paid: true,
        price: '699',
        img: '',
        inCart: false
    },
    {
        id: 11,
        title: 'It takes two',
        titleForImg: 'ittakestwo',
        forYou: false,
        genre: 'Aventura',
        paid: true,
        price: '99',
        img: '',
        inCart: false
    },
    {
        id: 12,
        title: 'The Evil Within',
        titleForImg: 'theevilwithin',
        forYou: true,
        genre: 'Aventura',
        paid: true,
        price: '529',
        img: '',
        inCart: false
    },
    {
        id: 13,
        title: `No Man's Sky`,
        titleForImg: 'nomansky',
        forYou: false,
        genre: 'Aventura',
        paid: false,
        price: 'free',
        img: '',
        inCart: false
    },
    {
        id: 14,
        title: 'Tunic',
        titleForImg: 'tunic',
        forYou: false,
        genre: 'Aventura',
        paid: false,
        price: 'free',
        img: '',
        inCart: false
    },
    {
        id: 15,
        title: 'Grand Theft Auto 5',
        titleForImg: 'gta5',
        forYou: false,
        genre: 'Accion',
        paid: true,
        price: '1200',
        img: '',
        inCart: false
    },
    {
        id: 16,
        title: 'Cyberpunk 2077',
        titleForImg: 'cyberpunk2077',
        forYou: false,
        genre: 'Accion',
        paid: true,
        price: '999',
        img: '',
        inCart: false
    },
    {
        id: 17,
        title: 'Dead Space',
        titleForImg: 'deadspace',
        forYou: false,
        genre: 'Terror',
        paid: false,
        price: 'free',
        img: '',
        inCart: false
    },
    {
        id: 18,
        title: 'Devil May Cry 5',
        titleForImg: 'dmc5',
        forYou: false,
        genre: 'Accion',
        paid: false,
        price: 'free',
        img: '',
        inCart: false
    },
    {
        id: 19,
        title: 'Alan Wake',
        titleForImg: 'alanwake',
        forYou: false,
        genre: 'Terror',
        paid: false,
        price: 'free',
        img: '',
        inCart: false
    },
    {
        id: 20,
        title: 'Dead by Daylight',
        titleForImg: 'dbd',
        forYou: true,
        genre: 'Terror',
        paid: false,
        price: 'free',
        img: '',
        inCart: false
    },
    {
        id: 21,
        title: 'Kuon',
        titleForImg: 'kuon',
        forYou: false,
        genre: 'Terror',
        paid: false,
        price: 'free',
        img: '',
        inCart: false
    },
    {
        id: 22,
        title: 'Rule of Rose',
        titleForImg: 'ruleofrose',
        forYou: false,
        genre: 'Terror',
        paid: false,
        price: 'free',
        img: '',
        inCart: false
    },
    {
        id: 23,
        title: 'SOMA',
        titleForImg: 'soma',
        forYou: true,
        genre: 'Terror',
        paid: false,
        price: 'free',
        img: '',
        inCart: false
    },
    {
        id: 24,
        title: 'Civilization 6',
        titleForImg: 'civilization6',
        forYou: false,
        genre: 'Estrategia',
        paid: false,
        price: 'free',
        img: '',
        inCart: false
    },
    {
        id: 25,
        title: 'Warcraft 3',
        titleForImg: 'warcraft3',
        forYou: false,
        genre: 'Estrategia',
        paid: false,
        price: 'free',
        img: '',
        inCart: false
    },
    {
        id: 26,
        title: 'The Last Guardian',
        titleForImg: 'tlg',
        forYou: true,
        genre: 'Aventura',
        paid: true,
        price: '459',
        img: '',
        inCart: false
    },
    {
        id: 27,
        title: 'Assassins Creed 2',
        titleForImg: 'ac2',
        forYou: false,
        genre: 'Accion',
        paid: true,
        price: '79',
        img: '',
        inCart: false
    },
    {
        id: 28,
        title: 'The Last of Us',
        titleForImg: 'tlou',
        forYou: true,
        genre: 'Accion',
        paid: true,
        price: '389',
        img: '',
        inCart: false
    },
]


function renderGameCards(genre) {
    const container = document.getElementById(genre.toLowerCase());
    if (!container) {
        console.error(`Container con id="${genre.toLowerCase()}" no ha sido hallado.`);
        return;
    }

    // filtramos los juegos de manera condicional por genero o por forYou
    let genreGames;
    if (genre !== 'parati') {
        genreGames = gamesCardData.filter(game => game.genre === genre);
    } else {
        genreGames = gamesCardData.filter(game => game.forYou)
    }


    if (genreGames.length === 0) {
        console.warn(`No se hallaron juegos para el siguiente genero: "${genre}".`);
        return;
    }

    // limpiamos el container
    container.innerHTML = '';

    function changeCart(event, game) {
        if (event.target.classList.contains("carrito")) {
            if (!(game.inCart)) {
                event.target.textContent = '¡Agregado al carrito!';
            } else {
                event.target.textContent = 'Agregar al carrito';
            }
            game.inCart = !(game.inCart)
            event.target.classList.add("shake-animation");

            setTimeout(() => {
                event.target.classList.remove("shake-animation");
            }, 350);
        }

    }

    // iteramos los juegos filtrados por genero para generar el layout de la card y su contenido de manera dinamica
    genreGames.forEach(game => {
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
        title.textContent = game.title.length > 15 && game.paid ? game.title.slice(0, 15) + '...' : (game.title.length > 19 ? game.title.slice(0, 19) + '...' : game.title)

        const price = document.createElement('p');
        price.classList.add('priceText')
        price.textContent = `$${game.price}`;

        const carritoDiv = document.createElement('div');
        const carritoButton = document.createElement('button');
        carritoDiv.classList.add('carrito-div')
        carritoButton.classList.add('carrito')
        carritoButton.classList.add('secondary')
        carritoButton.textContent = 'Agregar al carrito'

        // creamos el img elem
        const img = document.createElement('img');
        genre !== 'parati' ? img.classList.add('cardBgImg') : img.classList.add('cardForYouBgImg')
        img.src = `../tp-2/css/images/cards/${game.titleForImg}.png`;
        img.alt = game.title;

        //aca creamos el icon fav y otros iconos que necesitemos
        const favIcon = document.createElement('img')
        favIcon.id = 'heart'
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
        card.appendChild(img);
        card.appendChild(cardTitle);
        card.appendChild(carritoDiv)
        game.paid && carritoDiv.appendChild(carritoButton)
        card.appendChild(cardFavIcon)
        game.paid && card.appendChild(cardToPayIcon) //solo si el juego es pago (booleano)
        //appends mas especificos
        cardTitle.appendChild(title);
        cardFavIcon.appendChild(favIcon)
        game.paid && cardToPayIcon.appendChild(toPayIcon)

        // para el hover (mouseenter)
        card.addEventListener('mouseenter', () => {
            !(game.paid) && card.appendChild(playIcon);
            playIcon.addEventListener('click', () => {
                if (game.title === 'Samurai Senso') {
                    window.location.href = 'game.html'; // Replace with your actual URL
                }
            })
        });

        carritoButton.addEventListener('click', () => {
            changeCart(event, game)
        })

        card.addEventListener('mouseenter', () => {
            if (game.price !== 'free') {
                card.appendChild(price);
            }
        })

        // para cuando dejamos el hover (mouseleave)
        card.addEventListener('mouseleave', () => {
            if (card.contains(playIcon)) { // comprobamos que el play icon este appendado antes de quitarlo
                card.removeChild(playIcon);
            }
        });

        card.addEventListener('mouseleave', () => {
            if (card.contains(price)) {
                card.removeChild(price);
            }
        })

        // el append al container
        container.appendChild(card);
    });

}

let currentIndex = 0;

function navigateCarousel(direction) {
    const prevBtn = document.getElementById('button-left');
    const nextBtn = document.getElementById('button-right');
    const container = document.getElementById('aventura');
    const images = container.querySelectorAll('.cardGame');
    const slideWidth = images[0].clientWidth;

    switch (direction) {
        case 'prev':
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            break;
        case 'next':
            currentIndex = (currentIndex + 1) % images.length;
            break;
        default:
            break;
    }

    const offset = -currentIndex * slideWidth;
    console.log('offset: ', offset)

    // Apply a CSS transition for smooth animation
    container.style.transition = 'transform 0.5s ease-in-out';
    container.style.transform = `translateX(${offset}px)`;

    if (offset === (slideWidth * (images.length - 1)) * (-1)) { //cuando nos desplazamos hasta la ultima card
        nextBtn.disabled = true
    } else if (offset === 0) { //cuando estamos en la primera card
        prevBtn.disabled = true
    } else {
        if (direction === 'prev') nextBtn.disabled = false
        if (direction === 'next') prevBtn.disabled = false
    }

    // Remove the transition after the animation completes
    setTimeout(() => {
        container.style.transition = 'none';
    }, 500); // 500ms matches the transition duration
}

const prevButton = document.getElementById('button-left');
prevButton.addEventListener('click', () => {
    navigateCarousel('prev');
});

const nextButton = document.getElementById('button-right');
nextButton.addEventListener('click', () => {
    navigateCarousel('next');
});



export { renderGameCards };