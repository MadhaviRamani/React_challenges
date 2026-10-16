import "./styles.css";

import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";
import Header from "./Header.jsx";
import Navigation from "./Navigation.jsx";
import Link from "./link.js";
export default function App() {
  return (
    <>
      <Header>
        <a href="#">
          <img className="round-image" src={logo} alt="logo" />
        </a>

        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <img className="round-image" src={avatar} alt="avatar" />
        </button>

        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
      </Header>
      <main>content goes here…</main>
    </>
  );
}
