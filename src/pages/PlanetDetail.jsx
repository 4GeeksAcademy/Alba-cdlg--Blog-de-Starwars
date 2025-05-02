import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { getPlanetById } from "../api/swapi";
import "../styles/custom.css";

const PlanetDetail = () => {
  const { id } = useParams();
  const { data: planet, loagind, error } = useFetch(getPlanetById, id);

  if (loagind) return <p>Loading...</p>;
  if (error) return <p>Error loading planet.</p>;
  if (!planet) return <p>No planet data available.</p>;

  return (
    <div className="container my-5">
      {/* Card horizontal */}
      <div className="row mb-4 align-items-start">
        {/* Imagen */}
        <div className="col-md-6">
          <img
            src="https://placehold.co/800x600"
            alt="Planet placeholder"
            style={{
              width: "800px",
              height: "600px",
              objectFit: "cover",
              maxWidth: "100%",
            }}
          />
        </div>

        {/* Título + Lorem centrado */}
        <div className="col-md-6 planet-description">
          <h1>{planet.properties.name}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget
            viverra nulla sem vitae neque. Quisque id sodales libero. Nam
            dignissim, diam in vulputate bibendum, nulla lacus fringilla orci,
            vel sollicitudin enim mi a metus. Mauris et dictum augue. Morbi
            luctus velit nec velit feugiat, nec tristique quam placerat. Etiam
            nec sapien at quam ultrices faucibus sit amet nec arcu. Fusce sit
            amet ornare purus. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Aliquam erat volutpat.
            Vestibulum viverra justo ut lorem laoreet, nec dignissim tortor
            interdum.
          </p>
        </div>
      </div>

      {/* Línea roja */}
      <hr style={{ borderTop: "4px solid red" }} />

      {/* Títulos y valores alineados en tabla horizontal */}
      <div className="planet-grid-titles">
        <div>Name</div>
        <div>Climate</div>
        <div>Population</div>
        <div>Orbital Period</div>
        <div>Rotation Period</div>
        <div>Diameter</div>
      </div>
      <div className="planet-grid-values">
        <div>{planet.properties.name}</div>
        <div>{planet.properties.climate}</div>
        <div>{planet.properties.population}</div>
        <div>{planet.properties.orbital_period}</div>
        <div>{planet.properties.rotation_period}</div>
        <div>{planet.properties.diameter}</div>
      </div>
    </div>
  );
};

export default PlanetDetail;
