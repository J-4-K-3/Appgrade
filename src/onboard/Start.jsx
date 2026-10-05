
import React, { useState, useEffect } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import Signup from './Signup'
import Login from './Login'
import '../App.css'

const rapidFireText = ["Dream", "Vision", "Thoughts", "Ideas", "Sketches"];

const OnboardingVisuals = () => {
  const [scene, setScene] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sceneTimer = setTimeout(() => setScene(2), 10000);
    return () => clearTimeout(sceneTimer);
  }, []);

  useEffect(() => {
    if (scene !== 2) return undefined;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % rapidFireText.length);
    }, 1500);

    const sceneTimer = setTimeout(() => setScene(3), 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(sceneTimer);
    };
  }, [scene]);

  return (
    <div className="onboarding-visuals">
      <div className="glow-ring" />
      <div className="onboarding-card">
        {scene === 1 && (
          <m.div
            key="scene-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="hero-title">Build products. Deploy companies.</h1>
            <p className="hero-line">Appgrade turns your idea into a polished launch-ready product with AI speed and senior expertise.</p>
          </m.div>
        )}

        {scene === 2 && (
          <m.div
            key={`scene-2-${activeIndex}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <h1 className="hero-title">Your <span className="rapid">{rapidFireText[activeIndex]}</span> built with years of expertise</h1>
            <p className="hero-line">Every line, layout, and launch plan feels like it was crafted by a product studio.</p>
          </m.div>
        )}

        {scene === 3 && (
          <m.div
            key="scene-3"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="hero-title">Launch smarter with Telvin</h1>
            <p className="hero-line">A creative engine that sketches ideas, predicts user flow, and keeps your product future-ready.</p>
            <div className="scene-3-card">
              <h2>Something cool</h2>
              <p>Instantly visualize product identity, UI feel, target audiences and launch behaviors while Appgrade builds the details behind the scenes.</p>
            </div>
          </m.div>
        )}
      </div>
    </div>
  )
}

const Start = () => {
  const [screen, setScreen] = useState("signup");
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .auth-shell .left {
            display: none !important;
          }
          .auth-shell .right {
            flex: 1 !important;
            width: 100% !important;
            min-width: 100% !important;
            max-width: 100% !important;
          }
          .auth-shell {
            flex-direction: column !important;
          }
        }
      `}</style>
      <div className="auth-shell">
        {/* LEFT — Onboarding visuals */}
        <div className="left">
          <OnboardingVisuals />
        </div>

        {/* RIGHT — Auth */}
        <div className="right">
          <AnimatePresence mode="wait">
            {screen === "login" && (
              <m.div
                key="login"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Login onSignup={() => setScreen("signup")} />
              </m.div>
            )}

            {screen === "signup" && (
              <m.div
                key="signup"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Signup onBack={() => setScreen("login")} />
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default Start

/*const styles = {
  shell: {
    width: "100%",
    height: "100vh",
    display: "flex",
    backgroundColor: '#0F1220',
  },

  /* LEFT 
  left: {
    flex: 1.6,
    position: "relative",
    overflow: "hidden",
  },

  hero: {
    width: "100%",
    height: "100%",
    position: "relative",
  },

  heroImage: {
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  heroContent: {
    position: "absolute",
    bottom: 32 * 2,
    left: 32,
    maxWidth: 520,
    color: "#fff",
  },

  heroTitle: {
    fontSize: 48,
    fontWeight: 800,
    lineHeight: "1.1",
    marginBottom: 12,
  },

  heroMeta: {
    fontSize: 16,
    opacity: 0.75,
  },

  /* RIGHT 
  right: {
    flex: 1,
    backgroundColor: '#0F1220',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  authContainer: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 14,
    width: 360,
    display: "flex",
    flexDirection: "column",
    gap: 16,
    boxShadow: "0px 10px 30px rgba(0,0,0,0.25)",
  },

  title: {
    fontSize: 28,
    fontWeight: 700,
  },

  subtitle: {
    fontSize: 16,
    color: '#1E2336',
  },

  meta: {
    fontSize: 14,
    color: '#E9ECF4',
  },

  link: {
    color: '#FF8A65',
    cursor: "pointer",
    fontWeight: 600,
  },
}*/