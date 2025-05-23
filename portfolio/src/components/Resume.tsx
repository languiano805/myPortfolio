import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-text">Resume</div>
      <div className="cutout">
        <div className="resume-download-container">
            <div className="resume-download-text">Download</div>
        </div>
      </div>
      <div className="resume-content ">
        B.S. in Computer Science from California State University, Sacramento.
        Full Stack Developer with a passion for building efficient, user-focused
        software. Experienced with JavaScript, Python, Java, and SQL.
      </div>
    </div>
  );
};

export default Resume;
