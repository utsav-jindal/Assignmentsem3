import "./App.css";

// 5 SCP entries
const scps = [
  {
    id: "SCP-002",
    name: "Euclid",
    description: "SCP-002 resembles a tumorous, fleshy growth with a volume of roughly 60 m³ (or 2000 ft³). An iron valve hatch on one side leads to its interior, which appears to be a standard low-rent apartment of modest size. One wall of the room possesses a single window, though no such opening is visible from the exterior. The room contains furniture which, upon close examination, appears to be sculpted bone, woven hair, and various other biological substances produced by the human body. All matter tested thus far show independent or fragmented DNA sequences for each object in the room."
  },
  {
    id: "SCP-003",
    name: "Euclid",
    description: "SCP-003 consists of two related components of separate origin, referred to as SCP-003-1 and SCP-003-2."
  },
  {
    id: "SCP-004",
    name: "Whispering Shadows",
    description: "SCP-004 consists of an old wooden barn door (SCP-004-1) and a set of twelve rusted steel keys (SCP-004-2 through SCP-004-13). The door itself is the entrance to an abandoned factory in"
  },
  {
    id: "SCP-005",
    name: "Safe",
    description: "In appearance, SCP-005 resembles an ornate key, displaying the characteristics of a typical mass produced key used in the 1920s. The key was discovered when a civilian used it to infiltrate a high security facility. SCP-005 seems to have the unique ability to open any and all forms of lock (See Appendix A), be they mechanical or digital, with relative ease. The origin of this ability has yet to be determined.."
  },
  {
    id: "SCP-006",
    name: "Glass Cage",
    description: "SCP-006 is a very small spring located 60 km west of Astrakhan. Foundation Command was aware of its existence since the 19th century, but were unable to secure it until 1991 due to political reasons. On the spot of the spring, a chemical factory has been constructed as a disguise"
  }
];

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to the SCP Database 🚀</h1>
      </header>

      <main>
        {scps.map((scp) => (
          <div key={scp.id} className="scp-card">
            <h2>{scp.id}: {scp.name}</h2>
            <p>{scp.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
