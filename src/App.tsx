import {cacheExchange, Client, fetchExchange, Provider} from "urql";
import "./App.css";
import {TestClient} from "./components/test";

const client = new Client({
  url: "https://eu-central-1.cdn.hygraph.com/content/cl7rij5cj669q01uhae8r9wkh/master",
  exchanges: [cacheExchange, fetchExchange],
});

function App() {
  return (
    <Provider value={client}>
      <TestClient />
    </Provider>
  );
}

export default App;
