import { useParams, Link } from "react-router";

export default function CharacterDetails({ characters }) {
  const { id } = useParams();
  const character = characters.find((c) => c.id === Number(id));
  if (!character) {
    return (
      <>
        <h1>Character not found</h1>
        <Link to="/characters"> Back to Characters </Link>
      </>
    );
  }
  return (
    <>
      <h2>{character.name}</h2>
      <img alt={character.name} src={character.image} />
      <p> Species: {character.species}</p>
      <p> Status: {character.status}</p>
      <Link to="/characters"> Back to Characters </Link>
    </>
  );
}
