import { Link } from "react-router-dom";

const CardCharacter = ({ character }) => {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img
        src="https://placehold.co/400x200"
        className="card-img-top"
        alt="Character"
      />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <Link to={`/character/${character.uid}`} className="btn btn-primary">
          Learn more!
        </Link>
      </div>
    </div>
  );
};

export default CardCharacter;
