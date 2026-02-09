import { useState } from "react";
import { useRouter } from 'next/router';

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setMessage("Tous les champs sont obligatoires !");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Les mots de passe ne correspondent pas !");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/user", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.status === 200) {
        setMessage("Compte créé avec succès !");
        router.push("/login")

      } else if (response.status === 409) {
        setMessage("Cet email est déjà utilisé !");
      } else {
        setMessage("Une erreur est survenue.");
      }
    } catch (error) {
      console.error("Erreur :", error);
      setMessage("Impossible de contacter le serveur.");
    }
  };

  return (
    <div className="container">
      <h2>Créer un compte</h2>
      <form onSubmit={handleSubmit}>
        <label>Pseudo:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Mot de passe:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <label>Confirmer le mot de passe:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

        <button type="submit">S&apos;inscrire</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}