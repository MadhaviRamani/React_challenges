import { NavLink, Link } from "react-router";
export default function NaveBar() {
  return (
    <nav>
        {/* Diffrence between Link  = with Link Home shows without Underline 
                        & 
                        NavLink = with NavBar Characters shows with Underline 
        (Underline shows, which page r we looking right now)*/}
      <Link to="/home">Home</Link>
       <NavLink to="/characters">Characters</NavLink>
    </nav>
  );
}
