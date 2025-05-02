// import { Card } from "react-bootstrap";
import { getPlanets, getCharacters } from "../api/swapi";
import { useFetch } from "../hooks/useFetch";
import CardPlanet from "../components/CardPlanet";
import CardCharacter from "../components/CardCharacter";


const Home = () => {

  console.log("Home cargado");

  const { data: planets, loading: loadingPlanets } = useFetch(getPlanets);
  const { data: characters, loading: loadingCharacters } = useFetch(getCharacters); 

  console.log("Planetas", planets);

  return (
    <>
      <h1>Starwars Explorer</h1>

      <h2>Characters</h2>

      <div className="row">
        {loadingCharacters ? (
          <p>Loading characters...</p>
        ) : (
          characters.map((character, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <CardCharacter character={character} uid={index + 1} />
            </div>
          ))
        )}
      </div>

      <h2>Planets</h2>

      <div className="row">
        {loadingPlanets ? (
          <p>Loading planets...</p>
        ) : (
          planets.map((planet, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <CardPlanet planet={planet} uid={index + 1} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
