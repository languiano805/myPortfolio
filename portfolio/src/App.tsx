import NavBar from "./components/NavBar";
import "./App.css";
import Title from "./components/Title";
import AboutMe from "./components/AboutMe";
import Github from "./components/GitHub";

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
          <AboutMe />
          <div className="right-side-content-container">
            <Github />
            <div className="portfolio-projects-container"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
