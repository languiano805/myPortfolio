import "./Github.css";
import githubImage from "../assets/github-image.jpg";

const GitHub = () => {
  return (
    <div className="github-container">
      <img
        src={githubImage}
        className="github-card-img"
        alt="GitHub Logo"
        onClick={() => window.open("https://github.com/languiano805")}
      />
    </div>
  );
};

export default GitHub;
