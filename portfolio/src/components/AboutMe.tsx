import mePhoto from "../assets/me-photo.jpeg";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="card about-me-container">
      <div className="card-img-wrapper">
        <img src={mePhoto} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <div className="card-text-container">
            <h5 className="card-title">#About Me</h5>
            <p className="card-text">
              Building my skills one line of code at a time.
            </p>
            <div className="corner-square"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
