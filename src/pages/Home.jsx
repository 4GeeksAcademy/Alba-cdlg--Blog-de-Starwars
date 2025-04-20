import { Card } from "react-bootstrap";
import { useFetch } from "../hooks/useFetch";
import CardPlanet from "../components/CardPlanet";

const Home = () => {
  const { data: planets, loading: loadingPlanets } = useFetch(getPlanets);

  return (
    <>
      <h1>Star Wars Explorer</h1>

      <h2>Planetas</h2>

      <div className="row">
        {loadingPlanets ? (
          <p>Loading planets...</p>
        ) : (
          planets.map((planet, index) => {
            <div className="col-md-4 mb-4" key={index}>
              <CardPlanet planet={planet} uid={planet.uid} />
            </div>;
          })
        )}
      </div>
    </>
  );
};

export default Home;
