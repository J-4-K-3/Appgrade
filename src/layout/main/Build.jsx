import { useEffect, useState } from 'react';
import {
  IoAdd,
  IoArrowForward,
  IoLogoAppleAppstore,
  IoLogoGithub,
  IoLogoGooglePlaystore,
  IoLogoVercel,
  IoRocket,
  IoSparkles,
} from 'react-icons/io5';
import { useAppgradeStore } from '../../state/AppgradeStore';
import GitPopup from '../popups/GithubPopup';
import PlayPopup from '../popups/PlayStorePopup';
import AppPopup from '../popups/AppStorePopup';
import WebPopup from '../popups/WebPopup';

const progressSteps = ['Prompt received', 'Vision mapping', 'UI sketch', 'Launch polish', 'Delivery ready'];

const Build = () => {
  const { createBuild } = useAppgradeStore();
  const [prompt, setPrompt] = useState('');
  const [projectName, setProjectName] = useState('New App');
  const [platform, setPlatform] = useState('App');
  const [language, setLanguage] = useState('');
  const [engine, setEngine] = useState('beta_edition');
  const [style, setStyle] = useState('pro');
  const [status, setStatus] = useState('Waiting');
  const [statusMessage, setStatusMessage] = useState('Ready to transform your vision into a premium build.');
  const [buildId, setBuildId] = useState(null);
  const [buildArtifacts, setBuildArtifacts] = useState(() => {
    if (typeof window === 'undefined') {
      return {
        document: 'N/A',
        apk: 'N/A',
        repo: 'Not created yet',
        maintenance: 'Not attached',
        monetization: 'Stripe + PayPal',
      };
    }

    const stored = window.localStorage.getItem('appgrade-build-artifacts');
    if (!stored) {
      return {
        document: 'N/A',
        apk: 'N/A',
        repo: 'Not created yet',
        maintenance: 'Not attached',
        monetization: 'Stripe + PayPal',
      };
    }

    try {
      return JSON.parse(stored);
    } catch {
      return {
        document: 'N/A',
        apk: 'N/A',
        repo: 'Not created yet',
        maintenance: 'Not attached',
        monetization: 'Stripe + PayPal',
      };
    }
  });
  const [guideNote, setGuideNote] = useState('Use the launch guide to publish on web, app stores, and internal distribution channels.');
  const [savedState, setSavedState] = useState('Not saved yet');
  const [followUpNote, setFollowUpNote] = useState('Ask Telvin about growth ideas, ads, future upgrades, and release strategy.');
  const [github, setGithub] = useState(false)
  const [playStore, setPlayStore] = useState(false)
  const [appStore, setAppStore] = useState(false)
  const [webupload, setwebUpload] = useState(false)

  useEffect(() => {
    window.localStorage.setItem('appgrade-build-artifacts', JSON.stringify(buildArtifacts));
  }, [buildArtifacts]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!prompt.trim()) {
      setStatus('Waiting');
      setStatusMessage('Describe your vision with a little more detail so Telvin can shape it beautifully.');
      return;
    }

    const name = projectName.trim() || 'New build';
    const nextBuildId = createBuild({
      name,
      prompt,
      platform,
      monetization: 'Stripe + PayPal',
    });

    setBuildId(nextBuildId);
    setStatus('Brainstorming');
    setStatusMessage('Telvin is translating your brief into product requirements, audience cues, and a launch narrative.');

    window.setTimeout(() => {
      setStatus('Sketching');
      setStatusMessage('UI concepts, brand tone, screen flow, and the experience map are being shaped.');
    }, 900);

    window.setTimeout(() => {
      setStatus('Editing');
      setStatusMessage('The build is being tuned for colors, typography, and navigation clarity.');
    }, 1900);

    window.setTimeout(() => {
      const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const computedLanguage = language || (platform === 'Web' ? 'Next.js + TypeScript' : platform === 'Mobile' ? 'React Native + Firebase' : 'Node.js + Supabase');
      setStatus('Completing');
      setStatusMessage('Your build package is ready with code preview, launch guidance, and scaling support.');
      setBuildArtifacts({
        document: `${slug}-brief.pdf`,
        apk: `${slug}.apk`,
        repo: 'Not created yet',
        maintenance: 'Not attached',
        monetization: 'Stripe + PayPal',
      });
      setGuideNote(`The ${platform.toLowerCase()} build uses ${computedLanguage} and is prepared for premium launches.`);
      setSavedState(`Draft saved for ${name}`);
    }, 3000);
  };

  const handleOpenTelvin = () => {
    window.open('https://telvin.ai', '_blank', 'noopener,noreferrer');
  };

  const handleSaveToStorage = () => {
    const name = projectName.trim() || 'New build';
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    setBuildArtifacts((previous) => ({
      ...previous,
      document: `${slug}-brief.pdf`,
      apk: `${slug}.apk`,
    }));
    setSavedState(`Saved ${name} to storage for future maintenance.`);
  };

  const handleAttachMaintenance = () => {
    setBuildArtifacts((previous) => ({
      ...previous,
      maintenance: 'Attached to maintenance queue',
    }));
    setStatusMessage('Your build is now linked to a maintenance path for upgrades and follow-up revisions.');
  };

  const handleCreateRepo = () => {
    const name = projectName.trim() || 'New build';
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    setBuildArtifacts((previous) => ({
      ...previous,
      repo: `https://github.com/appgrade/${slug}`,
    }));
    setGuideNote('GitHub repo ready. Share the repo link with your team or continue with deployment steps.');
  };

  const handleAskFollowUp = () => {
    setFollowUpNote('Scale your product with our help to reach further audience.');
    setStatusMessage('Follow-up support is ready for product growth, ads, and scale strategy.');
  };

  const handleReadGuide = () => {
    setGuideNote('Use the guide to publish on web, app stores, and internal distribution channels with a beginner-friendly flow.');
  };

  const currentIndex = ['Waiting', 'Brainstorming', 'Sketching', 'Editing', 'Completing'].indexOf(status);
  const progressValue = status === 'Waiting' ? 0 : status === 'Brainstorming' ? 25 : status === 'Sketching' ? 50 : status === 'Editing' ? 75 : 100;

  return (
    <div className="page-shell build-shell">
      <header className="page-header overview-hero">
        <div>
          <p className="eyebrow">Build studio</p>
          <h1 className="page-title">Create with Telvin</h1>
          <p className="page-subtitle">
            Turn ideas into apps, websites, games and AI-powered experiences with a premium product workflow.
          </p>
        </div>
        <div className="overview-actions">
          <div className="live-pill">
            <IoSparkles size={16} />
            AI orchestration
          </div>
          <div className="icon-cluster">
            <div className="icon-bubble">
              <IoLogoGithub size={18} onClick={() => setGithub(true)} />
            </div>
            <div className="icon-bubble">
              <IoLogoGooglePlaystore size={18} onClick={() => setPlayStore(true)} />
            </div>
            <div className="icon-bubble">
              <IoLogoAppleAppstore size={18} onClick={() => setAppStore(true)} />
            </div>
            <div className="icon-bubble">
              <IoLogoVercel size={18} onClick={() => setwebUpload(true)} />
            </div>
          </div>
        </div>
      </header>

      <form className="builder-shell" onSubmit={handleSubmit}>
        <section className="builder-panel">
          <div className="builder-prompt-card">
            <div className="card-head">
              <div>
                <p className="eyebrow">Prompt studio</p>
                <h3>Describe your vision</h3>
              </div>
              <div className="status-pill">{status}</div>
            </div>

            <div className="builder-form-grid">
              <label className="builder-field">
                <span>Project name</span>
                <input value={projectName} onChange={(event) => setProjectName(event.target.value)} placeholder="My app" />
              </label>
              <label className="builder-field">
                <span>Platform</span>
                <select value={platform} onChange={(event) => setPlatform(event.target.value)}>
                  <option value="App">Mobile app</option>
                  <option value="Web">Web app</option>
                  <option value="Game">Game</option>
                  <option value="AI">AI generation</option>
                  <option value="Solve">Error Solving</option>
                </select>
              </label>
              <label className="builder-field">
                <span>Language</span>
                <select value={language} onChange={(event) => setLanguage(event.target.value)}>
                  <option value="">Auto by Telvin</option>
                  <option value="React/Next.js">React / Next.js</option>
                  <option value="TypeScript">TypeScript</option>
                  <option value="React Native">React Native</option>
                  <option value="Python">Python</option>
                  <option value="Node.js">Node.js</option>
                  <option value="Go">Go</option>
                </select>
              </label>
              <label className="builder-field">
                <span>Style</span>
                <select value={style} onChange={(event) => setStyle(event.target.value)}>
                  <option value="basic">Regular</option>
                  <option value="pro">Professional</option>
                  <option value="cinematic">Cinematic</option>
                  <option value="real">Realistic</option>
                </select>
              </label>
              <label className="builder-field">
                <span>Engine</span>
                <select value={engine} onChange={(event) => setEngine(event.target.value)}>
                  <option value="beta_edition">Normal EB</option>
                  <option value="first_beta">Normal B1</option>
                  <option value="faster_beta">Normal F1</option>
                  <option value="official_version">Normal OFV</option>
                  <option value="higher_version">Normal Gem</option>
                  <option value="normal_omni">Normal Omni</option>
                </select>
              </label>
            </div>

            <textarea
              className="ai-prompter"
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              placeholder="Describe your vision, whether it is a product, content generation, or a code issue to solve."
              aria-label="Build prompt"
            />

            <div className="builder-toolbar">
              <div className="builder-actions">
                <button className="builder-button primary" type="submit">
                  Begin
                </button> {/* Confirm build */}
                <button className="builder-button ghost" type="button" onClick={handleOpenTelvin}>
                  Edit Build
                </button>
              </div>
            </div>
          </div>

          <div className="build-preview-grid">
            <div className="preview-card">
              <div className="card-head">
                <h4>Build intelligence</h4>
              </div>
              <div className="preview-list">
                <div>
                  <span>Platform</span>
                  <strong>{platform}</strong>
                </div>
                <div>
                  <span>Language</span>
                  <strong>{language || 'Auto by Telvin'}</strong>
                </div>
                <div>
                  <span>Engine</span>
                  <strong>{engine}</strong>
                </div>
                <div>
                  <span>Style</span>
                  <strong>{style}</strong>
                </div>
              </div>
            </div>

            <div className="preview-card">
              <div className="card-head">
                <h4>Launch bundle</h4>
              </div>
              <div className="preview-list">
                <div>
                  <span>Document</span>
                  <strong>{buildArtifacts.document}</strong>
                </div>
                <div>
                  <span>APK</span>
                  <strong>{buildArtifacts.apk}</strong>
                </div>
                <div>
                  <span>Repo</span>
                  <strong>{buildArtifacts.repo}</strong>
                </div>
                <div>
                  <span>Monetization</span>
                  <strong>{buildArtifacts.monetization}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="builder-side">
          <div className="builder-side-card">
            <div className="card-head">
              <div>
                <p className="eyebrow">Build status</p>
                <h3>Telvin is waiting</h3>
              </div>
            </div>
            <div className="status-track">
              <div className="status-fill" style={{ width: `${progressValue}%` }} />
            </div>
            <p className="builder-note">{statusMessage}</p>
            <div className="builder-queue">
              {progressSteps.map((step, index) => (
                <div key={step} className={index <= currentIndex ? 'queue-item active' : 'queue-item'}>
                  <div className="queue-icon">
                    {index <= currentIndex ? <IoRocket size={14} /> : <IoAdd size={14} />}
                  </div>
                  <div>
                    <strong>{step}</strong>
                    <p>{index === currentIndex ? 'Current step' : 'Queued'}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="status-meta">
              <span>Build id: {buildId || 'Pending'}</span>
              <span>{savedState}</span>
            </div>
          </div>

          <div className="builder-side-card">
            <div className="card-head">
              <div>
                <p className="eyebrow">Launch actions</p>
                <h3>Ready for delivery</h3>
              </div>
            </div>
            <div className="action-stack">
              <button className="builder-button primary" type="button" onClick={handleSaveToStorage}>
                Save to storage
              </button>
              <button className="builder-button ghost" type="button" onClick={handleAttachMaintenance}>
                Attach to maintenance
              </button>
              <button className="builder-button ghost" type="button" onClick={handleCreateRepo}>
                Commit GitHub repo
              </button>
              <button className="builder-button ghost" type="button" onClick={handleAskFollowUp}>
                Scale to Engineers
              </button>
            </div>
            <p className="builder-note">{guideNote}</p>
            <button className="builder-button ghost" type="button" onClick={handleReadGuide}>
              Read launch guide <IoArrowForward size={16} />
            </button>
          </div>
        </aside>
      </form>

      <GitPopup
        isOpen={github}
        onClose={() => setGithub(false)}
      />
      <PlayPopup
        isOpen={playStore}
        onClose={() => setPlayStore(false)}
      />
      <AppPopup
        isOpen={appStore}
        onClose={() => setAppStore(false)}
      />
      <WebPopup
        isOpen={webupload}
        onClose={() => setwebUpload(false)}
      />
    </div>
  );
};

export default Build;
