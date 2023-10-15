const intialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 11, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  return (
    <div className="container">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1 className="logo">🌴 Far Away 💼</h1>;
}

function Form() {
  return (
    <div className="addForm">
      <h3>What do you need for your 😍 trip?</h3>
    </div>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {intialItems.map((e) => (
          <PackingItem key={e.id} item={e}></PackingItem>
        ))}
      </ul>
    </div>
  );
}

function PackingItem({ item }) {
  return (
    <li className="item">
      <span
        style={
          item.packed
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {item.quantity} {item.description}
      </span>
      <button>❎</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
