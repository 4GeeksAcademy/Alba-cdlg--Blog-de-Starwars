import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlanetDetail from "./pages/PlanetDetail";
import CharacterDetail from "./pages/CharacterDetail"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planet/:id" element={<PlanetDetail />} />
      <Route path="/character/:id" element={<CharacterDetail />} />
    </Routes>
  );
};

export default AppRoutes;