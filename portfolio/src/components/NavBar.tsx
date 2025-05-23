import "./NavBar.css";
import { FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar">
      <a className="navbar-brand" href="#">
        Leonardo Anguiano
      </a>
      <div className="navbar-links">
        <a
          href="https://www.linkedin.com/in/leo-anguiano/"
          className="navbar-link"
        >
          <FaLinkedin className="navbar-icon" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
