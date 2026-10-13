import "./styles.css";

export default function App() {
  return <AppAttributes />;
}
function AppAttributes() {
  return (
    <article className="article">
      <h2 className="article__title">Movie Name:</h2>
      <label htmlFor="text">name:</label>
      <input id="text" placeholder="Movie name" />
      <a className="article__link" href="#">
        submit
      </a>
    </article>
  );
}
