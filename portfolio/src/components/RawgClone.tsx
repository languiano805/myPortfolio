import "./ProjectComponent.css";
import rawgImage from "../assets/rawg-clone-img.png";

const RawgClone = () => {
  return (
    <div className="rawg-clone-container project-container">
      <img
        src={rawgImage}
        className="rawg-clone-img"
        alt="Rawg Clone Logo"
        onClick={() =>
          window.open("https://languiano805.github.io/rawg-clone/")
        }
      />
    </div>
  );
};

export default RawgClone;
