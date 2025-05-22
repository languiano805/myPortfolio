import { useState } from "react";
import mePhoto from "../assets/me-photo.jpeg";
import "./AboutMe.css";
import { TiArrowRightThick } from "react-icons/ti";

const AboutMe = () => {
  const [showPopup, setShowPopup] = useState(false);
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
          </div>
          <div className="corner-square">
            <button
              className="btn btn-primary"
              onClick={() => setShowPopup(true)}
            >
              <TiArrowRightThick className="arrow-icon" />
            </button>
            {showPopup && (
              <div className="popup">
                <span>Hello, I'm Leonardo Anguiano!</span>
                <button
                  className="close-btn"
                  onClick={() => setShowPopup(false)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
