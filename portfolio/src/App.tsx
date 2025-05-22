import NavBar from "./components/NavBar";
import "./App.css";
import Title from "./components/Title";
import AboutMe from "./components/AboutMe";


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
        </div>
      </div>
    </>
  );
}

export default App;
