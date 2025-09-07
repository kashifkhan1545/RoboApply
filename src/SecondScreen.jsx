import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import groupShield from "./assets/Group.png"; // shield image
import "./SecondScreen.css";

function SecondScreen() {
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
        <div className="form-card second-card">
          <h2>
            👋 Welcome, <span className="highlight">Idris</span>
          </h2>
          <p className="intro-text">Let’s get to know you better!</p>

          {/* Navigate to Third Screen */}
          <button
            className="start-btn"
            onClick={() => navigate("/third")}
          >
            Start Onboarding (&lt; 2 mins)
          </button>

          <div className="secure-box">
            <span className="shield">
              <img src={groupShield} alt="shield" className="shield-img" />
            </span>
            <p>
              Your data is <span className="highlight">protected</span> with us.
              <br />
              We do not share your data with any third party vendors.
            </p>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default SecondScreen;
