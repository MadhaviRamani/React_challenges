import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🥭 Mango",
      color: "yellow",
    },
    {
      id: 1339,
      name: " 🍉 Watermalone",
      color: "Red",
    },
    {
      id: 1340,
      name: "🫐 Blourberry",
      color: "Blue",
    },
    {
      id: 1341,
      name: "🍏 Apple",
      color: "Green",
    },
    
  ];

  return (
   
    <main>
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </main>
  );
}
