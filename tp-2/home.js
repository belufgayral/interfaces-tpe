/* import { gamesCardData } from './mockedData' */

const gamesCardData = [
    {
        id: 1,
        title: 'Metal Gear Solid V',
        genre: 'Aventura',
        price: '300',
        img: '',
    },
    {
        id: 2,
        title: 'Silent Hill 2',
        genre: 'Terror',
        price: '50',
        img: '',
    },
    {
        id: 3,
        title: 'Death Stranding',
        genre: 'Aventura',
        price: '869',
        img: '',
    },
    {
        id: 4,
        title: 'Rise of Tomb Raider',
        genre: 'Aventura',
        price: '320',
        img: '',
    },
    {
        id: 5,
        title: 'Age of Empires II',
        genre: 'Estrategia',
        price: '79',
        img: '',
    },
    {
        id: 6,
        title: 'Bioshock',
        genre: 'Accion',
        price: '119',
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

        // Create and populate the card content
        const title = document.createElement('h3');
        title.textContent = game.title;

        const price = document.createElement('p');
        price.textContent = `Price: $${game.price}`;

        // Create the image element
        const img = document.createElement('img');
        img.src = '../tp-2/css/images/cards/cat.png'; // Update the path to your image
        img.alt = game.title;

        // Append content to the card
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(img);

        // Append the card to the container
        container.appendChild(card);
    });

}

// Call the function to render the adventure genre
renderGameCards('Aventura');