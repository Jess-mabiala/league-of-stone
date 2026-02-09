import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from 'react-redux';

const Lobby = () => {
  const router = useRouter();
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const username = sessionStorage .getItem('username');
    const token = sessionStorage .getItem('authToken');
    const fetchMatches = async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_GLOBAL_PORT + "matchmaking/getAll",
        {
          method: "GET",
          headers: {
            "WWW-Authenticate": token,
            //"Authorization": `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("joueurs voulant jouer: " + data)
        setMatches(data);
      } else {
        console.error("Failed to fetch matches");
      }
    };
    fetchMatches();
    

    const intervalId = setInterval(fetchMatches, 2000);

    return () => clearInterval(intervalId);
  }, []);
  
  
  return (
    <section className="container-fluid p-5" style={{ height: "80vh" }}>

      <h1 style={{ textAlign: 'center' }}>Liste des joueurs en ligne</h1>
      <div
        className="container text-center position-relative"
        style={{ height: "100%" }}
      >
        <div>
          <div className="row">
            {matches.map((match, index) => (
              <div
                className="col d-flex justify-content-center align-items-center"
                key={index}
              >
                <div
                  className="p-4 bg-dark rounded-4 bg-opacity-75 text-white"
                  style={{ width: "300px" }}
                >
                  <p>
                    Joueur :{" "}
                    <span
                      className="badge text-bg-transparent text-wrap"
                      style={{ width: "6rem" }}
                    >
                      {match.name}
                    </span>
                  </p>
                  <div className="d-flex flex-column align-items-center gap-2">
                    <button
                      className="btn btn-danger"
                      style={{ width: "6rem" }}
                      onClick={async () => {
                        const response = await fetch(
                          `${process.env.NEXT_PUBLIC_GLOBAL_PORT}matchmaking/request?matchmakingId=${match.matchmakingId}`,
                          {
                            method: "GET",
                            headers: {
                              "WWW-Authenticate": sessionStorage .getItem('authToken'),
                              //"Authorization": `Bearer ${token}`,
                            },
                          }
                        );

                        if (response.ok) {
                          const data = await response.json();
                          console.log(data);
                        } else {
                          console.error("Failed to send match request");
                        }
                      }}
                    >
                      Match !!
                    </button>
                    <button
                      className="btn btn-danger"
                      style={{ width: "6rem" }}
                      onClick={async () => {
                        const response = await fetch(
                          `${process.env.NEXT_PUBLIC_GLOBAL_PORT}matchmaking/acceptRequest?matchmakingId=${match.matchmakingId}`,
                          {
                            method: "GET",
                            headers: {
                              "WWW-Authenticate": sessionStorage .getItem('authToken'),
                              //"Authorization": `Bearer ${token}`,
                            },
                          }
                        );

                        if (response.ok) {
                          const data = await response.json();
                          console.log(data);
                          router.push("/Game")
                      } else {
                        console.error("Failed to accept match request");
                      }
                    }}
                    >
                      Accept Match
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="btn btn-danger position-absolute bottom-0 left-50 translate-middle-x"
          style={{ width: "fit-content", padding: "10px" }}
          onClick={async () => {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_GLOBAL_PORT}matchmaking/unparticipate`,
              {
                method: "GET",
                headers: {
                  "WWW-Authenticate": sessionStorage .getItem('authToken'),
                },
              }
            );

            router.push("/WelcomePage");
            if (response.ok) {
              const data = await response.json();
              console.log(data);
            } else {
              console.error("Failed to unparticipate from matchmaking");
            }
          }}
        >
          Unparticipate
        </button>
      </div>
    </section>
  );
};

export default Lobby;
