import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import Start from './onboard/Start'
import Main from './components/Main';
import { AppgradeStoreProvider } from './state/AppgradeStore';

// Main page screens - go if current use, go to Start if new user
import Overview from './layout/main/Overview';
import Build from './layout/main/Build'
import Projects from './layout/main/Projects'
import More from './layout/main/More'
import Marketplace from './layout/main/Marketplace';
import Profile from './layout/main/Profile'
import Settings from './layout/main/Settings'

// Submain page screens
import Account from './layout/submain/Account';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Start is auth flow
  // Main is for logged in user
  // Add logic for navigation between logged in user and new user below

  // Use code below to authenticate current user with new user
  // if (!isAuthenticated || !userId) {
  //  return (
  //    <Routes>
  //      <Route path="/start/*" element={<Start />} />
  //      <Route path="*" element={<Navigate to="/start" replace />} />
  //    </Routes>
  //  );
  // }

  // Authenticated - show main app
  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <AppgradeStoreProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/build" element={<Build />} />
              <Route path="/projects" element={<Projects />} />      
              <Route path="/market" element={<Marketplace />} />
              <Route path="/more" element={<More />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />

              <Route path="/account" element={<Account />} />
            </Routes>
          </MainLayout>
        </AppgradeStoreProvider>
      )}
    </Router>
  );
};

function App() {
  return <AppContent />;
}

export default App;

function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Main />
      <main className="main-content">
        <div className="main-content-inner">
          {children}
        </div>
      </main>
    </div>
  );
}

{/*
  <AppgradeStoreProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/build" element={<Build />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/account" element={<Account />} />
              <Route path="/market" element={<Marketplace />} />
              <Route path="/more" element={<More />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </MainLayout>
        </AppgradeStoreProvider>
*/}

{/*
  <Routes>
        <Route path="/" element={<Start />} />
      </Routes>
*/}