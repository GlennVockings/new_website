import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Players } from "./pages/Players";
import { Table } from "./pages/Table";
import { Fixtures } from "./pages/Fixtures";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <Router>
          <div className="pt-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/fixtures" element={<Fixtures />} />
              <Route path="/team" element={<Players />} />
              <Route path="/table" element={<Table />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
