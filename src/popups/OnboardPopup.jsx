import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckSquare, FaRegSquare } from 'react-icons/fa';

const OnboardPopup = ({ isOpen, onClose, onComplete }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    tosAccepted: false,
    fullName: '',
    birthday: '',
    gender: '',
    profileImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNext = () => {
    if (step === 1 && formData.tosAccepted) {
      setStep(2);
    } else if (step === 2 && formData.fullName) {
      setStep(3);
    }
  };

  if (!isOpen) return null;

  const handleFinish = () => {
    navigate('')
  }

  const closeButtonStyle = {
    position: "absolute",
    top: 12,
    right: 12,
    background: "transparent",
    border: "none",
    color: 'white',
    fontSize: 24,
    cursor: "pointer",
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button style={closeButtonStyle} onClick={onClose}>
          ×
        </button>
        <div className="modal-header">
          <h2></h2>
          <div className="step-indicator">
            <span className={step >= 1 ? 'active' : ''}>1</span>
            <span className={step >= 2 ? 'active' : ''}>2</span>
            <span className={step >= 3 ? 'active' : ''}>3</span>
          </div>
        </div>

        <div className="modal-body">
          {/* Step 1: Email & Password */}
          {step === 1 && (
            <div className="step-content">
              <h3>We like to know a few things</h3>

              <div className="form-group">
                <label>Where did you hear about Appgrade?</label>
                <input
                  type="text"
                  name="text"
                  placeholder="Where?..."
                  required
                />
              </div>

              <div className="form-group">
                <label>What would you like to use Appgrade for?</label>
                <div className="password-input-wrapper">
                  <input
                    type='text'
                    name="text"
                    placeholder="We will tailor your experience"
                    required
                  />
                </div>
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <button
                    type="button"
                    className="checkbox-icon"
                    onClick={() => setFormData(prev => ({ ...prev, tosAccepted: !prev.tosAccepted }))}
                  >
                    {formData.tosAccepted ? <FaCheckSquare /> : <FaRegSquare />}
                  </button>
                  <span>
                    I agree to the <a href="/terms" target="_blank">Terms of Service</a>
                  </span>
                </label>
              </div>

              <button
                className="btn-primary"
                onClick={handleNext}
                disabled={!formData.tosAccepted}
              >
                Next
              </button>
              <p style={{ fontSize: 12, marginTop: 12 }}>Design inspired by Innoxation Tech Inc Website</p>
            </div>
          )}

          {/* Step 2: Personal Info */}
          {step === 2 && (
            <div className="step-content">
              <h3>Lets customize your experience with our AI</h3>

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label>Company name (optional)</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company name if you got one"
                />
              </div>

              <div className="form-group">
                <label>What's your goal?</label>
                <input
                  type="text"
                  name="goals"
                  placeholder="Your goal(s)"
                  required
                />
              </div>

              <div className="form-group">
                <label>Do you have any tech background?</label>
                <input
                  type="text"
                  name="background"
                  placeholder="We build for all"
                  required
                />
              </div>

              <div className="form-group">
                <label>Anything you would like to add?</label>
                <input
                  type="text"
                  name="else"
                  placeholder="We like to know"
                  required
                />
              </div>

              <div className="button-group">
                <button className="btn-secondary" onClick={() => setStep(1)}>
                  Back
                </button>
                <button
                  className="btn-primary"
                  onClick={handleNext}
                  disabled={!formData.fullName}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Profile Image */}
          {step === 3 && (
            <div className="step-content">
              <h3>Which of these fits you best?</h3>

              <div>
                <p>INTEREST CARD HERE - NOTE TO SELF</p>
              </div>

              <div className="welcome-message">
                <p>
                  Welcome to Appgrade! Here you can build and generate any of your imagination.
                  Watch has your ideas, sketches and vision come to life with Appgrade
                </p>
              </div>

              <div className="button-group">
                <button className="btn-secondary" onClick={() => setStep(2)}>
                  Back
                </button>
                <button className="btn-primary">
                  Finish
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default OnboardPopup