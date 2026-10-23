import "./styles.css";
import { initialCharacters } from "./data/characters";
import Home from "./pages/Home";
import CharacterList from "./pages/CharacterList";
import { Route, Routes } from "react-router";

export default function App() {
  return (
    <main>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/characters" element={<CharacterList characters={initialCharacters}/>}/>
    </Routes>
    </main>

  );
}
