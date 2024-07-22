import {cacheExchange, Client, fetchExchange, Provider} from "urql";
import "./App.css";
import {TestClient} from "./components/ProjectsList";
import {useState} from "react";
import {ProjectDetail} from "./components/ProjectDetail";

const client = new Client({
  url: "https://eu-central-1.cdn.hygraph.com/content/cl7rij5cj669q01uhae8r9wkh/master",
  exchanges: [cacheExchange, fetchExchange],
});

function App() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <Provider value={client}>
      <div>
        <TestClient onClick={(id) => setActiveId(id)} />
      </div>
      {activeId && (
        <div>
          <ProjectDetail id={activeId} />
        </div>
      )}
    </Provider>
  );
}

export default App;
