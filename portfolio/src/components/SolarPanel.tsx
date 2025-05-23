import "./ProjectComponent.css";
import solarPanel from "../assets/solarPanel2.jpg";

const SolarPanel = () => {
  return (
    <div className="solar-panel-container project-container">
      <img
        src={solarPanel}
        className="solar-panel-img"
        alt="Solar Panel Logo"
        onClick={() =>
          window.open("https://github.com/languiano805/solar_panel_analysis")
        }
      />
    </div>
  );
};

export default SolarPanel;
