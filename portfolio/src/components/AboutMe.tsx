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
                <span>
                  I’m a full stack developer with a B.S. in Computer Science
                  from California State University, Sacramento. I enjoy building
                  clean, efficient, and user-centered software from front-end
                  interfaces to back-end systems. My experience spans
                  technologies like JavaScript, Python, Java, SQL, and
                  frameworks such as Node.js, Express, and Unity. Whether it's
                  designing web apps or analyzing solar energy data, I'm
                  passionate about solving real-world problems through code. I'm
                  always learning, always building and looking for
                  opportunities to grow with teams that value curiosity,
                  collaboration, and impact.
                </span>
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
