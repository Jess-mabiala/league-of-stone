import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Link from "next/link";
import { useRouter } from 'next/router';



//import attack from "../sounds/attack.wav";
//import defense from "../sounds/defense.mp3";
//import backgroundSound from "../sounds/background.mp3";

const WelcomePage = () => {
  const [username, setUsername] = useState(null);
  const[token, setToken] = useState(null);
  const router = useRouter();
  //const username = sessionStorage .getItem('username');
  //const token = sessionStorage .getItem('authToken');

  useEffect(() => {
    setUsername(sessionStorage .getItem("username"))
    console.log("Username:", username);
    setToken(sessionStorage .getItem("authToken"))
    console.log("Token:", token);
  });
  
  console.log("Base URL:", process.env.NEXT_PUBLIC_GLOBAL_PORT);

  const handleClick = async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_GLOBAL_PORT + "matchmaking/participate",
      {
        method: "GET",
        headers: {
          "WWW-Authenticate": token,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      if (data.match) {
        console.log("Match found");
        router.push("/Game");
      } else {
        router.push("/Lobby");
        console.log("push to lobby")
      }
    } else {
      //window.location.reload();
      console.log("reload")
      console.error("Failed to participate in matchmaking");
    }
  };

  return (
    <section
      className="d-flex justify-content-center align-items-center container-fluid flex-column bg-dark bg-opacity-75"
      /*style={{ height: "90vh" }}*/
    >
      {/* {playSound1()} */}
      <div
        className="p-4 rounded-2 bg-opacity-75 text-white"
        style={{
          width: "35%",
          backgroundColor: "black",
          opacity: "0.9",
          boxShadow: "0 0 1rem 0 #82589F",
        }}
      >
        <div className="d-flex flex-column gap-4 justify-content-center align-items-center pb-5 ">
          <div
            className="d-flex justify-content-center"
            style={{ fontFamily: "'Slabo 27px', sans-serif" }}
          >
            Bienvenue, <span style={{ color: "#EAB543" }}>{username} </span>!
          </div>
          <button
            onClick={() => {
              handleClick();
              //playSound();
            }}
            style={{
              width: "30%",
              backgroundColor: "black",
              borderColor: "#63cdda",
              color: "#fff",
              boxShadow: "inset 0 0 2rem 0 #63cdda, 0 0 1rem 0 #63cdda",
              textShadow: "0 0 1rem #fff",
              fontFamily: "'Russo One', serif",
              fontWeight: "400",
              fontOpticalSizing: "auto",
              fontStyle: "normal",
            }}
          >
            Matchmaking
          </button>
        </div>
      </div>
    </section>
  );
};

export default WelcomePage;
