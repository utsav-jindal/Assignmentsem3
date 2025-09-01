import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Welcome to My SCP App 🚀</h1>
      </header>

      <main>
        <p>Your SCP content will go here.</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </main>
    </div>
  );
}

export default App;
