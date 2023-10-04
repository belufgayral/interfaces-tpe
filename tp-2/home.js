import gamesCardData from './mockedData'

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
        card.classList.add('card'); // You can define a "card" class in your CSS for styling

        // Create and populate the card content
        const title = document.createElement('h3');
        title.textContent = game.title;

        const price = document.createElement('p');
        price.textContent = `Price: $${game.price}`;

        // You can also add an image here if you have an image URL in your JSON data
        // const img = document.createElement('img');
        // img.src = game.img;
        // img.alt = game.title;

        // Append content to the card
        card.appendChild(title);
        card.appendChild(price);
        // card.appendChild(img);

        // Append the card to the container
        container.appendChild(card);
    });
}

// Call the function to render the adventure genre
renderGameCards('Aventura');