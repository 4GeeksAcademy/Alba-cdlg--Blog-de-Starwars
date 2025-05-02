import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { getPlanetById } from "../api/swapi";

const PlanetDetail = () => {
  const { id } = useParams();
  const { data: planet, loagind, error } = useFetch(getPlanetById, id);

  if (loagind) return <p>Loading...</p>;
  if (error) return <p>Error loading planet.</p>;
  if (!planet) return <p>No planet data available.</p>

  return (
    <div className="container my-5">
      <h1 className="mb-4">{planet.properties.name}</h1>
      <ul className="list-group">
        <li className="list-group-item"><strong>Climate:</strong> {planet.properties.climate}</li>
        <li className="list-group-item"><strong>Population:</strong> {planet.properties.population}</li>
        <li className="list-group-item"><strong>Orbital Period:</strong> {planet.properties.orbital_period}</li>
        <li className="list-group-item"><strong>Rotation Period:</strong> {planet.properties.rotation_period}</li>
        <li className="list-group-item"><strong>Diameter:</strong> {planet.properties.diameter}</li>
      </ul>
    </div>
  );
};

export default PlanetDetail;
