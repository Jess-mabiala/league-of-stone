/*import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        //sessionStorage .setItem("authToken", action.payload.token);
        //sessionStorage .setItem("username", action.payload.name);
        console.log("données stockées");
        setMessage("Connexion réussie !");
        router.push("/WelcomePage"); // Rediriger vers la page du deck après connexion
      } else {
        setMessage("Identifiants incorrects !");
      }
    } catch (error) {
      console.error("Erreur :", error);
      setMessage("Impossible de contacter le serveur.");
    }
  };

  return (
    <div className="container">
      <h2>Se connecter</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Mot de passe:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Connexion</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}*/
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux"; // Importer useDispatch
import { login } from "../authSlice"; // Importer l'action login

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const dispatch = useDispatch(); // Initialiser dispatch

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const data = await response.json(); // Récupérer les données (token, username)

        // Dispatcher l'action login avec le token et le nom d'utilisateur
        dispatch(login({ token: data.token, name: data.username }));

        setMessage("Connexion réussie !");
        router.push("/WelcomePage"); // Rediriger après connexion
      } else {
        setMessage("Identifiants incorrects !");
      }
    } catch (error) {
      console.error("Erreur :", error);
      setMessage("Impossible de contacter le serveur.");
    }
  };

  return (
    <div className="container">
      <h2>Se connecter</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Mot de passe:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Connexion</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
