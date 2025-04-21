import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const PlanetDetail = () => {
  const { id } = useParams();
  const { data: planets, loagind, error } = useFetch(getPlanetById, id);

  if (loagind) return <p>Loading...</p>;
  if (error) return <p>Error loading planet.</p>;

  return (
    <div>
      <h1>{planet.properties.name}</h1>
    </div>
  );
};

export default PlanetDetail;
