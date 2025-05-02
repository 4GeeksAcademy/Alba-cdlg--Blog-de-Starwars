import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";
import { getCharacterById } from "../api/swapi";

const CardCharacter = ({ character }) => {
  const { state, dispatch } = useGlobalContext();
  const [details, setDetails] = useState(null);

  const uid = character.uid;

  const isFavorite = state.favorites.some((fav) => fav.uid === uid);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: "REMOVE_FAVORITE", payload: character });
    } else {
      dispatch({
        type: "ADD_FAVORITE",
        payload: { uid, name: character.name },
      });
    }
  };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const result = await getCharacterById(uid);
        setDetails(result.properties);
      } catch (error) {
        console.error("Error getching character details", error);
      }
    };

    fetchDetails();
  }, [uid]);

  if (!details) {
    return <p>Loading character details...</p>;
  }

  return (
    <div className="card">
      <img
        src="https://placehold.co/400x200"
        className="card-img-top"
        alt={character.name}
      />
      <div className="card-body">
        <h5 className="card-text">{details.name}</h5>
        <p className="mb-1">
          <strong>Gender:</strong> {details.gender}
        </p>
        <p className="mb-1">
          <strong>Hair Color:</strong> {details.hair_color}
        </p>
        <p className="mb-2">
          <strong>Eye Color:</strong> {details.eye_color}
        </p>
      </div>
      <div className="d-flex justify-content-between">
        <Link to={`/character/${uid}`} className="learn-more-btn">
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

export default CardCharacter;
