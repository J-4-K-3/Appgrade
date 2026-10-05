import { useState } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { IoLogoGithub } from 'react-icons/io5';
import './Popup.css'

const GitPopup = ({ isOpen, onClose }) => {
  const [intro, setIntro] = useState(true)
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      {intro ? (
        <motion.div className="modal-content intro">
          <IoLogoGithub size={50} color="white" style={{ alignSelf: 'center', justifySelf: 'center' }} />
          <h2 className='intro-text'>Github for saving your workflow, builds and generations.</h2>
          <button className="builder-button intro-button action-link">Begin Commit</button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="modal-header">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div>
                <h2 style={{ margin: 0, fontSize: "1.5rem" }}>Github</h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="onclose"
              onMouseEnter={(e) =>
                (e.target.style.background = "#0597f2")
              }
              onMouseLeave={(e) => (e.target.style.background = "none")}
            >
              <FiX />
            </button>
          </div>

          {/* Content */}
          <div
            style={{
              padding: "10px",
              height: "calc(100% - 100px)",
              overflowY: "auto",
            }}
          >
            <div className="github">
              <div className="about-git">
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default GitPopup;
