import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";
import { getPlanetById } from "../api/swapi";

const CardPlanet = ({ planet, uid }) => {
  const { state, dispatch } = useGlobalContext();
  const [details, setDetails] = useState(null);

  const isFavorite = state.favorites.some((fav) => fav.uid === uid);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: "REMOVE_FAVORITE", payload: item });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: { uid, name: planet.name } });
    }
  };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const result = await getPlanetById(uid);
        setDetails(result.properties);
      } catch (error) {
        console.error("Error fetching planet details", error);
      }
    };

    fetchDetails();
  }, [uid]);

  if (!details) {
    return <p>Loading planet details...</p>;
  }

  return (
    <div className="card">
      <img
        src="https://placehold.co/400x200"
        className="card-img-top"
        alt={details.name}
      />
      <div className="card-body">
        <h5 className="card-text">{details.name}</h5>
        <p className="mb-1">
          <strong>Population:</strong> {details.population}
        </p>
        <p className="mb-2">
          <strong>Terrain:</strong> {details.terrain}
        </p>
      </div>
      <div className="d-flex justify-content-between">
        <Link to={`/planet/${uid}`} className="learn-more-btn">
          Learn more!
        </Link>
        <button
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={handleFavorite}
        >
          <i className="bi bi-heart-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default CardPlanet;
