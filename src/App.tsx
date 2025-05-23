import NavBar from "./components/NavBar";
import "./App.css";
import Title from "./components/Title";
import AboutMe from "./components/AboutMe";

import RawgClone from "./components/RawgClone";
import SolarPanel from "./components/SolarPanel";
import StarDrifter from "./components/StarDrifter";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="navbar-container">
          <NavBar />
        </div>
        <div className="website-container">
          <Title />
        </div>
        <div className="content-container">
          <div className="left-side-content-container">
            <AboutMe />
          </div>
          <div className="right-side-content-container">
            
            <div className="content-container-resume"><Resume/></div>
            <div className="portfolio-projects-container">
              <RawgClone />
              <SolarPanel />
              <StarDrifter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
