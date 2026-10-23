import "./styles.css";
import { initialCharacters } from "./data/characters";
import Home from "./pages/Home";
import CharacterList from "./pages/CharacterList";
import { Route, Routes } from "react-router";
import NaveBar from "./components/NavBar";

export default function App() {
  return (
    <main>
      <NaveBar/>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/characters" element={<CharacterList characters={initialCharacters}/>}/>
      <Route path="*" element={<h1>Page not Found</h1>}/>
    </Routes>
    </main>

  );
}
