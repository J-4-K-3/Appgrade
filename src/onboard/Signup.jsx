import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { IoLogoGoogle, IoLogoApple, IoLogoMicrosoft } from "react-icons/io5";
import OnboardPopup from "../popups/OnboardPopup";
import "../App.css";

const Signup = ({ onBack }) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("Email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [techId, setTechId] = useState("");
  const [error, setError] = useState("");
  const [continuePopUp, setContinuePopUp] = useState(false);
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [timer, setTimer] = useState(30);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [timer]);

  // When Continue clicked, open popup
  const handleSignup = () => {
    // Add your validation here...
    setContinuePopUp(true);
  };

  const handlePopupComplete = () => {
    setContinuePopUp(false);
    // Navigate to main app
    navigate("/home", { replace: true });
  }

  const renderOptionContent = () => {
    switch (selectedOption) {
      case "Email":
        return (
          <div className="option-content">
            <h3 className="recommended-text">Recommended</h3>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="option-field"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="option-field"
            />
            <h4 className="minimum-text">Include a minimum of 6 characters</h4>
          </div>
        );
      case "Create":
        return (
          <div className="option-content">
            <h3 className="recommended-text">Recommended</h3>
            <textarea
              type="text"
              placeholder="Tell me your name, company, your goals a little about yourself so I can create an account for you based on that"
              className="option-field"
            />
            <h4 className="minimum-text">Include has much detail in 200 words</h4>
          </div>
        );
      case "Tech":
        return (
          <div className="option-content">
            <h3 className="recommended-text">Recommended</h3>
            <input
              type="text"
              placeholder="Enter your TechID"
              value={techId}
              onChange={(e) => setTechId(e.target.value)}
              className="option-field"
            />
            <h4 className="minimum-text">
              Keep these private for your account's security
            </h4>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="signup-container">
      <div>
        <img src="/appgrade_logo.png" alt="Appgrade logo" className="appgrade_logo" />
        <h3 className="signup-text2">Signup</h3>

        <div>
          <div className="options">
            <div
              className={`option ${selectedOption === "Email" ? "selected" : ""
                }`}
              onClick={() => setSelectedOption("Email")}
            >
              <h4>
                Email
                <br />
                Address
              </h4>
            </div>
            <div
              className={`option ${selectedOption === "Create" ? "selected" : ""
                }`}
              onClick={() => setSelectedOption("Create")}
            >
              <h4>
                Create Account
                <br />
                with Telvin
              </h4>
            </div>
            <div
              className={`option ${selectedOption === "Tech" ? "selected" : ""
                }`}
              onClick={() => setSelectedOption("Tech")}
            >
              <h4>
                Innoxation <br />
                TechID
              </h4>
            </div>
          </div>
          {renderOptionContent()}
        </div>
        <div>
          <button className="continue-button" onClick={handleSignup}>
            {isLoading ? "Loading..." : "Continue"}
          </button>
        </div>
        <div className="signup2-container">
          <p className="signup-text">Already have an account?
            <a
              className="signup2-button"
              onClick={onBack}
            >
              Login
            </a>
          </p>
        </div>
      </div>
      <div className="icons-container">
        <IoLogoGoogle size={40} className="signup-icon" />
        <IoLogoApple size={40} className="signup-icon" />
        <IoLogoMicrosoft size={40} className="signup-icon" />
      </div>

      <OnboardPopup
        isOpen={continuePopUp}
        onClose={() => setContinuePopUp(false)}
        onComplete={handlePopupComplete}
      />
    </div>
  )
}

export default Signup