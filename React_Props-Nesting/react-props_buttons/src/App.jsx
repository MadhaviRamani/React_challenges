export default function App() {
   function handleClick() {
    console.log("you clicked me");
  }
  return (
    <main>
      <Button onClick={handleClick}>Color</Button>
      <Button onClick={handleClick}>Disabled</Button>
      <Button onClick={handleClick}>Text</Button>
    </main>
  );
}
function Button({ children, onClick }) {
 

  return (
    <div>
      <button
        onClick={onClick}
        style={{
          height: "100px",
          width: "200px",
          margin: "10px",
          backgroundColor: "lightblue",
        }}
      >
        {children}
      </button>
    </div>
  );
}
