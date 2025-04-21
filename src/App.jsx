import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PlanetDetail from "./pages/PlanetDetail";

const App = () => {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planet/:id" element={<PlanetDetail />} />
        </Routes>
      </Layout>
  );
};

export default App;
