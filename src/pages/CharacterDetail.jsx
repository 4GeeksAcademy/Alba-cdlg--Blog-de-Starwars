import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { getCharacterById } from "../api/swapi";
import "../styles/custom.css";

const CharacterDetail = () => {
  const { id } = useParams();
  const { data: character, loagind, error } = useFetch(getCharacterById, id);

  if (loagind) return <p>Loading...</p>;
  if (error) return <p>Error loading character.</p>;
  if (!character) return <p>No character data available.</p>;

  return (
    <div className="container my-5">
      {/* Card horizontal */}
      <div className="row mb-4 align-items-start">
        <div className="col-md-6">
          <img
            src="https://placehold.co/800x600"
            alt="Character placeholder"
            style={{
              width: "800px",
              height: "600px",
              objectFit: "cover",
              maxWidth: "100%",
            }}
          />
        </div>
        <div className="col-md-6 planet-description">
          <h1>{character.properties.name}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget
            viverra nulla sem vitae neque. Donec sed odio dui. Nulla vitae elit
            libero, a pharetra augue. Vestibulum id ligula porta felis euismod
            semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
            dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia
            quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Etiam porta sem malesuada magna mollis euismod.
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
            Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus
            mollis interdum.
          </p>
        </div>
      </div>

      <hr style={{ borderTop: "4px solid red" }} />

      <div className="planet-grid-titles">
        <div>Name</div>
        <div>Birth Year</div>
        <div>Gender</div>
        <div>Height</div>
        <div>Skin Color</div>
        <div>Eye Color</div>
      </div>
      <div className="planet-grid-values">
        <div>{character.properties.name}</div>
        <div>{character.properties.birth_year}</div>
        <div>{character.properties.gender}</div>
        <div>{character.properties.height}</div>
        <div>{character.properties.skin_color}</div>
        <div>{character.properties.eye_color}</div>
      </div>
    </div>
  );
};

export default CharacterDetail;
