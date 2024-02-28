import { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Admin } from "./pages/Admin";
import { TablePage } from "./pages/TablePage";
import { Fixtures } from "./pages/Fixtures";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  createHttpLink,
} from "@apollo/client";
import { EditFixture } from "./components/admin/EditFixture";
import { EditWeek } from "./components/admin/EditWeek";
import { Footer } from "./components/Footer";
import possibleTypes from "./possibleTypes.json";
import { PlayersPage } from "./pages/PlayersPage";

const httpLink = createHttpLink({
  // uri: "https://oxted-api.onrender.com/graphql",
  uri: "http://localhost:3001/graphql",
});

const link = ApolloLink.from([httpLink]);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        fixtures: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
    Fixture: {
      keyFields: ["id", "awayTeam", "homeTeam"],
    },
    Player: {
      keyFields: ["id", "name", "number", "goals", "appearances"],
    },
    Week: {
      keyFields: ["week"],
    },
  },
  possibleTypes,
});

const client = new ApolloClient({
  link,
  cache,
});

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ApolloProvider client={client}>
        <Header isScrolled={isScrolled} />
        <div className="mt-20 overflow-hidden md:mt-40">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/fixtures"
                element={<Fixtures isScrolled={isScrolled} />}
              />
              <Route path="/team" element={<PlayersPage />} />
              <Route path="/table" element={<TablePage />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/fixture/:id" element={<EditFixture />} />
              <Route path="/admin/week/:id" element={<EditWeek />} />
            </Routes>
          </Router>
        </div>
        <Footer />
      </ApolloProvider>
    </>
  );
}

export default App;
