import Link from "next/link";

console.log("okkkkkkkkk");
export default function Home() {
  return (
    <div className="container">
      <h1>Bienvenue sur League Of Stones</h1>
      <nav>
        <ul>
          <li><Link href="/login">Se connecter</Link></li>
          <li><Link href="/signup">Créer un compte</Link></li>
        </ul>
      </nav>
    </div>
  );
}
