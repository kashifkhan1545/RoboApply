import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
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
      <div className="right-panel">
        <div className="progress-container">
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
      </div>
    </div>
  );
}

export default ThirdScreen;
