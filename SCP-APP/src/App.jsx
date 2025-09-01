import { useState } from "react";
import Menu from "./Menu.jsx";
import SCP from "./SCP.jsx";
import "./App.css";

const scpData = [
  {
    item: "SCP-173",
    class: "Euclid",
    desc: "SCP-173 is a humanoid statue that is extremely hostile. It cannot move while in a direct line of sight.",
    containment:
      "SCP-173 must be kept in a locked container at all times. Personnel must maintain eye contact when nearby.",
  },
  {
    item: "SCP-096",
    class: "Euclid",
    desc: "SCP-096 is a humanoid entity that becomes agitated when viewed directly and attacks the viewer.",
    containment:
      "SCP-096 must be contained in a sealed chamber, with no visual contact allowed under any circumstances.",
  },
  {
    item: "SCP-682",
    class: "Keter",
    desc: "SCP-682 is a highly intelligent and adaptive reptilian creature that seeks to destroy all life.",
    containment:
      "SCP-682 must be contained in a reinforced, acid-resistant containment chamber at all times.",
  },
  {
    item: "SCP-049",
    class: "Euclid",
    desc: "SCP-049 is a humanoid entity resembling a medieval plague doctor. It believes it can cure 'pestilence'.",
    containment:
      "SCP-049 must be kept in a secure containment cell. Interaction must be done with extreme caution.",
  },
];

function App() {
  const [selectedSCP, setSelectedSCP] = useState(null);

  return (
    <div className="app">
      <header className="app-header">
        <h1>🔒 SCP Foundation Portal</h1>
        <p>Secure • Contain • Protect</p>
      </header>

      <main className="app-main">
        <Menu scps={scpData} onSelect={setSelectedSCP} />
        <SCP selectedSCP={selectedSCP} />
      </main>

      <footer className="app-footer">
        <p>© 2025 SCP Foundation | Demo Portal</p>
      </footer>
    </div>
  );
}

export default App;
