import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="navbar-container">
          <NavBar />
        </div>
        <div className="website-container"></div>
        <div className="content-container">hello world</div>
      </div>
    </>
  );
}

export default App;
