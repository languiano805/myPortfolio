import "./ProjectComponent.css"
import EarthPhoto from "../assets/earth.jpg";

const StarDrifter = () => {
  return (
    <div className="star-drifter-container project-container">
      <img
        src={EarthPhoto}
        className="star-drifter-img"
        alt="Star Drifter Logo"
        onClick={() => window.open("")}
      />
    </div>
  );
};

export default StarDrifter;
