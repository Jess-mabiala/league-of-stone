import { useState, useEffect } from 'react';
import styles from './Game.module.css'; // Importation du module CSS
import { useRouter } from 'next/router';

const API_URL = "http://localhost:3001/cards"; // URL de l'API locale

const Game = () => {
  const [availableCards, setAvailableCards] = useState([]);
  const [playerDeck, setPlayerDeck] = useState([]);
  const [validationMessage, setValidationMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Erreur lors de la récupération des cartes");
        const data = await response.json();
        setAvailableCards(data);
      } catch (error) {
        console.error(error);
        setAvailableCards([]);
      }
    };

    fetchCards();
  }, []);

  const addToDeck = (card) => {
    if (playerDeck.length >= 20) {
      alert("Votre deck est plein !");
      return;
    }
    setPlayerDeck([...playerDeck, card]);
    setAvailableCards(availableCards.filter((c) => c.id !== card.id));
  };

  const removeFromDeck = (card) => {
    setPlayerDeck(playerDeck.filter((c) => c.id !== card.id));
    setAvailableCards([...availableCards, card]);
  };

  const validateDeck = () => {
    if (playerDeck.length === 20) {
      setValidationMessage("Le deck a été validé avec succès !");
      
      // Envoi du deck à la page suivante via l'URL
      const deckData = encodeURIComponent(JSON.stringify(playerDeck)); // Sérialiser le deck
      router.push(`/Match?deck=${deckData}`); // Redirection avec le deck dans les paramètres
    }
  };

  const createCardElement = (card, action) => {
    return (
      <div key={card.id} className={styles.card} data-card-id={card.id} onClick={() => (action === 'add' ? addToDeck(card) : removeFromDeck(card))}>
        <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${card.key}_0.jpg`} alt={card.name} />
        <h4>{card.name}</h4>
        <p>🗡️ Attaque: {card.info.attack}</p>
        <p>🛡️ Défense: {card.info.defense}</p>
      </div>
    );
  };

  const displayAvailableCards = () => {
    return availableCards.map((card) => createCardElement(card, "add"));
  };

  const updateDeckDisplay = () => {
    return playerDeck.map((card) => createCardElement(card, "remove"));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>League Of Stones</h1>
      <div className="row">
        <div className="col-md-6">
          <h2 className={styles.heading2}>Cartes disponibles</h2>
          <div className={styles.cardContainer}>{displayAvailableCards()}</div>
        </div>

        <div className="col-md-6">
          <h2 className={styles.heading2}>Votre Deck (<span>{playerDeck.length}</span>/20)</h2>
          <div className={styles.deckContainer}>{updateDeckDisplay()}</div>
          <button
            className={`${styles.button} btn btn-success w-100 mt-3`}
            disabled={playerDeck.length !== 20}
            onClick={validateDeck}
          >
            Valider le deck
          </button>
          <p className="text-success text-center mt-3">{validationMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default Game;
