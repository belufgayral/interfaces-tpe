/* import { gamesCardData } from './mockedData' */

const gamesCardData = [
    {
        id: 1,
        title: 'Metal Gear Solid V',
        titleForImg: 'metalgearsolid5',
        genre: 'Aventura',
        paid: false,
        price: 'free',
        img: '',
    },
    {
        id: 2,
        title: 'Silent Hill 2',
        titleForImg: 'silenthill2',
        genre: 'Terror',
        paid: true,
        price: '50',
        img: '',
    },
    {
        id: 3,
        title: 'Death Stranding',
        titleForImg: 'deathstranding',
        genre: 'Aventura',
        paid: true,
        price: '869',
        img: '',
    },
    {
        id: 4,
        title: 'Rise of Tomb Raider',
        titleForImg: 'riseofthetombraider',
        genre: 'Aventura',
        paid: false,
        price: 'free',
        img: '',
    },
    {
        id: 5,
        title: 'Age of Empires II',
        titleForImg: 'ageofempires2',
        genre: 'Estrategia',
        paid: true,
        price: '79',
        img: '',
    },
    {
        id: 6,
        title: 'Bioshock',
        titleForImg: 'bioshock',
        genre: 'Accion',
        paid: false,
        price: 'free',
        img: '',
    },
]


function renderGameCards(genre) {
    const container = document.getElementById(genre.toLowerCase()); // Assuming genre names are in lowercase
    if (!container) {
        console.error(`Container with id="${genre.toLowerCase()}" not found.`);
        return;
    }

    // Filter the games by genre
    const genreGames = gamesCardData.filter(game => game.genre === genre);

    if (genreGames.length === 0) {
        console.warn(`No games found for the genre "${genre}".`);
        return;
    }

    // Clear the container
    container.innerHTML = '';

    // Loop through the filtered games and create card elements
    genreGames.forEach(game => {
        const card = document.createElement('div');
        card.classList.add('cardGame'); // You can define a "cardGame" class in your CSS for styling
        const cardTitle = document.createElement('div');
        cardTitle.classList.add('cardGameTitle');
        const cardFavIcon = document.createElement('div');
        cardFavIcon.classList.add('cardFavIcon');
        const cardToPayIcon = document.createElement('div');
        cardToPayIcon.classList.add('toPayIcon');

        // Create and populate the card content
        const title = document.createElement('h3');
        title.textContent = game.title;

        const price = document.createElement('p');
        price.textContent = `Price: $${game.price}`;

        // Create the image element
        const img = document.createElement('img');
        img.src = `../tp-2/css/images/cards/${game.titleForImg}.png`; // Update the path to your image
        img.alt = game.title;

        //here we create the fav icon and other icons
        const favIcon = document.createElement('img')
        favIcon.src = '../tp-2/css/images/icons/fav.svg'
        favIcon.alt = 'fav-icon-heart'

        const toPayIcon = document.createElement('img')
        toPayIcon.src = '../tp-2/css/images/icons/toPay.svg'
        toPayIcon.alt = 'to-pay-icon'

        // Append content to the card
        //card.appendChild(price);
        card.appendChild(img);
        card.appendChild(cardTitle);
        card.appendChild(cardFavIcon)
        game.paid && card.appendChild(cardToPayIcon)

        cardTitle.appendChild(title);
        cardFavIcon.appendChild(favIcon)
        game.paid && cardToPayIcon.appendChild(toPayIcon)

        // Append the card to the container
        container.appendChild(card);
    });

}

// Call the function to render the adventure genre
renderGameCards('Aventura');
renderGameCards('Accion');
renderGameCards('Terror');
renderGameCards('Estrategia');