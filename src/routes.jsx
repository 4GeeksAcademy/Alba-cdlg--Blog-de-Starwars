import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlanetDetail from "./pages/PlanetDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planet/:id" element={<PlanetDetail />} />
    </Routes>
  );
};

export default AppRoutes;