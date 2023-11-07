import { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Players } from "./pages/Players";
import { Admin } from "./pages/Admin";
import { TablePage } from "./pages/TablePage";
import { Fixtures } from "./pages/Fixtures";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { EditFixture } from "./components/admin/EditFixture";
import { EditWeek } from "./components/admin/EditWeek";
import { Footer } from "./components/Footer";

const client = new ApolloClient({
  uri: "https://oxted-api.onrender.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
        <div className="mt-20 md:mt-40">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/fixtures"
                element={<Fixtures isScrolled={isScrolled} />}
              />
              <Route path="/team" element={<Players />} />
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
