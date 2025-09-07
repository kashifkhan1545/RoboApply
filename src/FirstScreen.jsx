import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";

function FirstScreen() {
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

      <div className="right-panel">
        <div className="form-card">
          <h2>
            What's your first <span className="highlight">name?</span>
          </h2>
          <p>We’re happy you’re here. Let’s get to know a little about you.</p>

          <form>
            <label>First Name</label>
            <input type="text" placeholder="write your first name" />

            <label>Last Name</label>
            <input type="text" placeholder="write your last name" />

            <div className="form-buttons">
              <button type="button" className="back-btn">Back</button>
              <button 
                type="button" 
                className="next-btn"
                onClick={() => navigate("/second")}
              >
                Next →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FirstScreen;
