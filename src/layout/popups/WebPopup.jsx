import { useState } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { IoLogoVercel } from 'react-icons/io5';
import './Popup.css'

const WebPopup = ({ isOpen, onClose }) => {
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
          <IoLogoVercel size={50} color="white" style={{ alignSelf: 'center', justifySelf: 'center' }} />
          <h2 className='intro-text'>Get to know about Vercel, how Appgrade can upload for you and how to get the domain for your ventures.</h2>
          <button className="builder-button intro-button action-link">Open Guide</button>
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
            <div style={{ disWeb: "flex", alignItems: "center", gap: "1rem" }}>
              <div>
                <h2 style={{ margin: 0, fontSize: "1.5rem" }}>Web Upload</h2>
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
            <div className="web-upload-content">
              <div className="upload-guide">
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default WebPopup;
