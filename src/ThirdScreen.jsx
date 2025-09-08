import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import Active from "./assets/Active.png";
import rd from "./assets/3rd.png";
import rec from "./assets/rectangle.png"
import over from "./assets/overlay.png"
import "./ThirdScreen.css";

function ThirdScreen() {
  const navigate = useNavigate();

  return (
    <div className="app">
      {/* Left Panel */}
      <div className="left-panel">
        <img src={logo} alt="RoboApply Logo" className="logo-img" />
        <div className="trusted-box">
          <p className="trusted">TRUSTED BY</p>
          <p className="users">
            OVER <span className="highlight-number">10k+</span> USERS
          </p>
          <div className="testimonial">
            <div className="avatars">
              <img className="avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="user" />
              <img className="avatar" src="https://randomuser.me/api/portraits/women/44.jpg" alt="user" />
              <img className="avatar" src="https://randomuser.me/api/portraits/men/78.jpg" alt="user" />
              <img className="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="user" />
              <img className="avatar" src="https://randomuser.me/api/portraits/men/11.jpg" alt="user" />
            </div>
            <p>
              "I got recruiters from Amazon, Wise, and other companies reaching out to me already!"
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div
  className="right-panel"
  style={{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start", // push everything to top
    alignItems: "center",     // align everything to left
    gap: "5px",
    paddingTop: "20px"            // optional spacing from top
  }}
>        <div className="progress-container">
          {/* First Progress Bar */}
          <div className="progress-item">
            <div className="progress-header">
              <p className="progress-title">A little bit about you</p>
              <p className="progress-step">2/5</p>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "60%" }}></div>
            </div>
          </div>

          {/* Second Progress Bar */}
          <div className="progress-item">
            <div className="progress-header">
              <p className="progress-title">How can I help you</p>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "0%" }}></div>
            </div>
          </div>
        </div>

        {/* Heading under progress bars */}
        <h2 className="job-heading">
          <span className="purple">Where</span>{" "}
          <span className="white">are you in</span>{" "}
          <span className="yellow">your job</span>{" "}
          <span className="white">search?</span>
          <span className="yellow">*</span>
        </h2>

        {/* Note text */}
        <p className="note-text">
          <span className="yellow">Note:</span>{" "}
          <span className="white">
            Your selection will not affect your platform experience and is for informational purposes only.
          </span>
        </p>
        {/* Three Boxes */}
        <div className="box-container">
          <div className="info-box">
            <img src={Active} alt="box1" className="box-img" />
            <h3 className="box-title">Active Job Seeker</h3>
            <p className="box-detail">I am actively looking for new opportunities and want to find a role within the next six months.</p>
          </div>

          <div className="info-box">
  <div className="box-img-container bigger-box">
    <img src={rec} alt="box2" className="base-img" />
    <img src={over} alt="overlay" className="overlay-img" />
  </div>
  <h3 className="box-title">Passive Job Seeker</h3>
  <p className="box-detail">
    I am passively browsing opportunities that can take me to the next level,
    upskills me, or offers an interesting career transition.
  </p>
</div>



          <div className="info-box">
            <img src={rd} alt="box3" className="box-img" />
            <h3 className="box-title">Not a Job Seeker</h3>
            <p className="box-detail">I am currently not seeking new opportunities but would like to take advantage of career enhancing features such as resume score and Interview guide.</p>
          </div>
          
        </div>
        <div className="form-buttons" style={{alignSelf:'flex-end', marginRight:'12%'}}>
              <button type="button" className="back-btn">Back</button>
              <button 
                type="button" 
                className="next-btn"
                onClick={() => navigate("/second")}
              >
                Next →
              </button>
            </div>
      </div>
    </div>
  );
}

export default ThirdScreen;
