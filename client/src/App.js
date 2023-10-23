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
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fixtures" element={<Fixtures />} />
            <Route path="/team" element={<Players />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/fixture/:id" element={<EditFixture />} />
            <Route path="/admin/week/:id" element={<EditWeek />} />
          </Routes>
        </Router>
        <Footer />
      </ApolloProvider>
    </>
  );
}

export default App;
