// URL de l'API locale
const API_URL = "http://localhost:3001/cards";

// Sélections des éléments HTML
const availableCardsContainer = document.querySelector("#available-cards");
const playerDeckContainer = document.querySelector("#player-deck");
const deckCountSpan = document.querySelector("#deck-count");
const validateDeckButton = document.querySelector("#validate-deck");
const validationMessage = document.querySelector("#validation-message");

// Variables globales
let availableCards = [];
let playerDeck = [];

// Fonction pour récupérer les cartes depuis l'API
async function fetchCards() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Erreur lors de la récupération des cartes");
        availableCards = await response.json();
        displayAvailableCards();
    } catch (error) {
        console.error(error);
        availableCardsContainer.innerHTML = "<p>Erreur lors du chargement des cartes.</p>";
    }
}

// Fonction pour afficher les cartes disponibles
function displayAvailableCards() {
    availableCardsContainer.innerHTML = "";
    availableCards.forEach(card => {
        const cardElement = createCardElement(card, "add");
        availableCardsContainer.appendChild(cardElement);
    });
}

// Fonction pour créer un élément de carte avec nom, attaque et défense
function createCardElement(card, action) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.dataset.cardId = card.id;

    // Image du champion via Riot API
    const img = document.createElement("img");
    img.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${card.key}_0.jpg`;
    img.alt = card.name;

    // Nom du champion
    const name = document.createElement("h4");
    name.textContent = card.name;

    // Stats d'attaque et défense
    const attack = document.createElement("p");
    attack.textContent = `🗡️ Attaque: ${card.info["attack"]}`;

    const defense = document.createElement("p");
    defense.textContent = `🛡️ Défense: ${card.info["defense"]}`;

    // Ajout des événements de clic
    cardDiv.appendChild(img);
    cardDiv.appendChild(name);
    cardDiv.appendChild(attack);
    cardDiv.appendChild(defense);
    
    if (action === "add") {
        cardDiv.addEventListener("click", () => addToDeck(card));
    } else if (action === "remove") {
        cardDiv.addEventListener("click", () => removeFromDeck(card));
    }

    return cardDiv;
}

// Fonction pour ajouter une carte au deck
function addToDeck(card) {
    if (playerDeck.length >= 20) {
        alert("Votre deck est plein !");
        return;
    }

    // Ajouter la carte au deck
    playerDeck.push(card);
    updateDeckDisplay();

    // Retirer la carte de la liste des disponibles
    availableCards = availableCards.filter(c => c.id !== card.id);
    displayAvailableCards();
}

// Fonction pour retirer une carte du deck
function removeFromDeck(card) {
    playerDeck = playerDeck.filter(c => c.id !== card.id);
    updateDeckDisplay();

    // Remettre la carte dans la liste des disponibles
    availableCards.push(card);
    displayAvailableCards();
}

// Fonction pour mettre à jour l'affichage du deck
function updateDeckDisplay() {
    playerDeckContainer.innerHTML = "";
    deckCountSpan.textContent = playerDeck.length;

    playerDeck.forEach(card => {
        const cardElement = createCardElement(card, "remove");
        playerDeckContainer.appendChild(cardElement);
    });

    // Activer le bouton de validation si 20 cartes sont sélectionnées
    validateDeckButton.disabled = (playerDeck.length !== 20);
}

// Fonction pour valider le deck
validateDeckButton.addEventListener("click", () => {
    if (playerDeck.length === 20) {
        validationMessage.textContent = "Le deck a été validé avec succès !";
        document.querySelector(".col-md-6.new").innerHTML = '';
        document.querySelector("#validate-deck").style.visibility = 'hidden'
        document.querySelector('.col-md-6.new').style.backgroundColor = 'black';
    }
});

// Charger les cartes au démarrage
fetchCards();