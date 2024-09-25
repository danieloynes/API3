// API URL
const apiUrl = "https://hp-api.onrender.com/api/characters";

// DOM-elementer
const searchBox = document.getElementById('searchBox');
const characterList = document.getElementById('characterList');

// Standardbilde å bruke når karakterens bilde mangler
const defaultImage = 'https://via.placeholder.com/150?text=No+Image'; 

// Begrens antall viste karakterer
const characterLimit = 50; // Viser maksimalt 50 karakterer

// Hent karakterer fra API-et
async function fetchCharacters() {
    try {
        const response = await fetch(apiUrl);
        const characters = await response.json();
        displayCharacters(characters.slice(0, characterLimit)); // Begrens antall viste karakterer
    } catch (error) {
        console.error("Klarte ikke å hente karakterer:", error);
    }
}

// Vis karakterene
function displayCharacters(characters) {
    characterList.innerHTML = ''; // Tøm tidligere innhold

    characters.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('character-card');

        // Karakterbilde med fallback til standardbilde
        const img = document.createElement('img');
        img.src = character.image ? character.image : defaultImage; // Bruk karakterens bilde hvis tilgjengelig
        img.onerror = function() {
            this.src = defaultImage; // Fallback til standardbilde hvis bildet ikke kan lastes
        };
        card.appendChild(img);

        // Karakterdetaljer
        const info = document.createElement('div');
        info.classList.add('character-info');
        info.innerHTML = `
            <h3>${character.name}</h3>
            <p><strong>Hus:</strong> ${character.house || 'Ukjent'}</p>
            <p><strong>Blodstatus:</strong> ${character.ancestry || 'Ukjent'}</p>
            <p><strong>Patronus:</strong> ${character.patronus || 'Ukjent'}</p>
            <p><strong>Fødselsår:</strong> ${character.yearOfBirth || 'Ukjent'}</p>
            <p><strong>Skuespiller:</strong> ${character.actor || 'Ukjent'}</p>
        `;
        card.appendChild(info);

        characterList.appendChild(card);
    });
}

// Søkemotor
searchBox.addEventListener('input', function() {
    const query = searchBox.value.toLowerCase();
    const characterCards = document.querySelectorAll('.character-card');
    characterCards.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = name.includes(query) ? 'block' : 'none';
    });
});

// Hent karakterer når siden lastes inn
fetchCharacters();
