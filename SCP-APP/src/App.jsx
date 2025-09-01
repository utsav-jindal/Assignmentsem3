import "./App.css";
import { useState } from "react";
import scpData from "./data/scpData.json";

function App() {
  // State to track which SCP is expanded
  const [expandedId, setExpandedId] = useState(null);

  const toggleSCP = (id) => {
    // Collapse if already expanded, else expand
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="App">
      <header>
        <h1>SCP Catalogue 🚀</h1>
      </header>

      <main>
        {scpData.map((scp) => (
          <div key={scp.id} className="scp-card">
            <h2 onClick={() => toggleSCP(scp.id)} className="scp-title">
              {scp.id}: {scp.name}
            </h2>
            {expandedId === scp.id && (
              <p className="scp-description">{scp.description}</p>
            )}
          </div>
        ))}
      </main>

      <footer>
        Utsav Jindal | Student ID: 30090250
      </footer>
    </div>
  );
}

export default App;
