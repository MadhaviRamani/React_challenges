import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
    <Button>Submit</Button>
     <Button>Submit Name: </Button>
      <Button>Submit SurName:</Button>
      <Button>Submit Profile:</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
