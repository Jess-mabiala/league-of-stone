// Dans Match.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './match.module.css';

//affiche la barre de vie
function HealthBar({ hp, maxHp }) {
  const hpPercentage = (hp / maxHp) * 100;

  return (
    <div
      style={{
        width: "30px",
        height: "150px",
        borderRadius: "10px",
        background: "rgba(0, 0, 0, 0.3)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: hpPercentage + "%",
          background: "red",
        }}
      />
    </div>
  );
}

const Match = () => {
  const router = useRouter();
  const [playerDeck, setPlayerDeck] = useState([]);
  const [match, setMatch] = useState([]);
  const [isAccepted, setIsAccepted] = useState(false);
  const [pickedEnemyCard, setPickedEnemyCard] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const player =
  match && match.player1 && match.player1.name === sessionStorage.getItem("username")
    ? match.player1
    : match.player2;
  const opponent =
  match && match.player1 && match.player1.name === sessionStorage.getItem("username")
    ? match.player2
    : match.player1;

  
    const attack = async (enemyCardKey) => {
      if (player.turn && selectedCard && !selectedCard.attack) {
        let response;
        if (opponent.board.length === 0) {
          // Attack the opponent  ly if their board is empty
          response = await fetch(
            process.env.NEXT_PUBLIC_GLOBAL_PORT +
              `match/attackPlayer?card=${encodeURIComponent(selectedCard.key)}`,
            {
              method: "GET",
              headers: {
                "WWW-Authenticate": token,
              },
            }
          );
        } else {
          // Otherwise, attack a card on the opponent's board
          response = await fetch(
            process.env.NEXT_PUBLIC_GLOBAL_PORT +
              `match/attack?card=${encodeURIComponent(
                selectedCard.key
              )}&ennemyCard=${encodeURIComponent(enemyCardKey)}`,
            {
              method: "GET",
              headers: {
                "WWW-Authenticate": token,
              },
            }
          );
        }

        if (response.ok) {
          const { hand, board } = await response.json();
          console.log("Updated hand: ", hand);
          console.log("Updated board: ", board);
          // You can do something with the updated hand and board here, like updating the player's state
        } else {
          console.error("Failed to attack");
        }
      }
    };

    const fetchMatches = async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_GLOBAL_PORT + "match/getMatch",
        {
          method: "GET",
          headers: {
            "WWW-Authenticate": sessionStorage.getItem("authToken"),
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("on a les infos du match!!!!")
        setMatch(data);
      } else {
        console.error("Failed to fetch matches");
        console.log("on a pas les infos du match!!!!")
      }
    };

    

  useEffect(() => {
    if (router.query.deck) {
      // Si des données sont passées dans l'URL
      const deckData = JSON.parse(router.query.deck);
      setPlayerDeck(deckData); // Mettre à jour l'état du deck
    }
  }, [router.query]);

  return (
    <div className={styles.container}>
  <h1 className={styles.heading1}>League Of Stones</h1>
  <div className="row">
    <div className="col-md-6">
      {/* Autre contenu pour la deuxième partie */}
    </div>
    <div className="col-md-6">
      {playerDeck.length > 0 ? (
        <div className="row">
          {playerDeck.map((card) => (
            <div key={card.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className={styles.card}>
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${card.key}_0.jpg`}
                  alt={card.name}
                  className="img-fluid" // Pour rendre l'image responsive
                />
                <h4>{card.name}</h4>
                <p>🗡️ Attaque: {card.info.attack}</p>
                <p>🛡️ Défense: {card.info.defense}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Aucune carte dans le deck.</p>
      )}
    </div>
  </div>
</div>
  );
};

export default Match;
