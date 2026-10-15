export default function App() {
  return <Smiley isHappy={false} />;
}

function Smiley({ isHappy }) {
 
  return <span>{isHappy ? "😊" : "😢"}</span>
}
