// import { Card } from "react-bootstrap";
import { getPlanets, getCharacters } from "../api/swapi";
import { useFetch } from "../hooks/useFetch";
import CardPlanet from "../components/CardPlanet";
import CardCharacter from "../components/CardCharacter";

const Home = () => {
  console.log("Home cargado");

  const { data: planets, loading: loadingPlanets } = useFetch(getPlanets);
  const { data: characters, loading: loadingCharacters } =
    useFetch(getCharacters);

  console.log("Planetas", planets);

  return (
    <>
      <h1>Starwars Explorer</h1>

      <h2>Characters</h2>

      <div className="horizontal-scroll">
        {loadingCharacters ? (
          <p>Loading characters...</p>
        ) : characters && characters.length > 0 ? (
          characters.map((character, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <CardCharacter character={character} uid={index + 1} />
            </div>
          ))
        ) : (
          <p>No characters available.</p>
        )}
      </div>

      <h2>Planets</h2>

      <div className="horizontal-scroll">
        {loadingPlanets ? (
          <p>Loading planets...</p>
        ) : planets && planets.length > 0 ? (
          planets.map((planet, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <CardPlanet planet={planet} uid={index + 1} />
            </div>
          ))
        ) : (
          <p>No planets available.</p>
        )}
      </div>
    </>
  );
};

export default Home;
