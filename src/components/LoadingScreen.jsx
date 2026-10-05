import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div 
        className="loading-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src="/appgrade_logo.png" alt="Appgrade Logo" className="loading-logo" />
        <motion.div 
          className="loading-bar-container"
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="loading-bar"></div>
        </motion.div>
        <p className="loading-text">Preparing...</p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
