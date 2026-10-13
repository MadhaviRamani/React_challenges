import "./styles.css";

export default function App() {
  return <AppAttributes />;
}
function AppAttributes() {
  return (
    <article className="article">
      <h2 className="article__title">React Attributes</h2>
      <label htmlFor="text">Attributes</label>
      <input id="text" placeholder="search" />
      <a className="article__link" href="https://www.w3schools.com/">
        w3school
      </a>
    </article>
  );
}
