import { Link } from "react-router-dom";

const CardPlanet = ({ planet, uid }) => {
  return (
    <div className="card">
      <img
        src="https://placehold.co/400x200"
        className="card-img-top"
        alt={planet.name}
      />
      <div className="card-body">
        <h5 className="card-text">{planet.name}</h5>
      </div>
      <div className="d-flex justify-content-between">
        <Link to={`/planet/${uid}`} className="btn btn-primary">
          Más información
        </Link>
        <button className="">
          <i className="bi bi-heart-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default CardPlanet;
