import "./ProjectComponent.css";

const RawgClone = () => {
  return (
    <div
      className="rawg-clone-container project-container "
      onClick={() => {
        window.open("https://languiano805.github.io/rawg-clone/");
      }}
    >
      <div className="rawg-clone-text project-text">RAWG Clone</div>
    </div>
  );
};

export default RawgClone;
