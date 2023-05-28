import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Players } from "./pages/Players";
import { Table } from "./pages/Table";
import { Fixtures } from "./pages/Fixtures";

function App() {
  return (
    <>
      <Header />
      <Router>
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fixtures" element={<Fixtures />} />
            <Route path="/team" element={<Players />} />
            <Route path="/table" element={<Table />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
