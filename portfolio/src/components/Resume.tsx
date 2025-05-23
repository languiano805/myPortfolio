import "./Resume.css";
import resume from "../assets/leonardo_a_resume.pdf";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-text">Resume</div>
      <div className="cutout">
        <a className="resume-download-container" href={resume} download>
          <div className="resume-download-text">Download</div>
        </a>
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
