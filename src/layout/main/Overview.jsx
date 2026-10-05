import { useEffect, useState } from 'react';
import { IoArrowForward, IoCard, IoNotifications, IoPulse, IoRocket, IoSparkles } from 'react-icons/io5';
import { useAppgradeStore } from '../../state/AppgradeStore';
import { useNavigate } from "react-router-dom";
import NotificationPopup from '../popups/NotificationPopup';
import BillsPopup from '../popups/BillsPopup';
import ProgressBar from '../../components/ProgressBar';

const planDescriptions = {
  Creator: 'A starter package for small proof-of-concept builds with AI idea guidance and base assets.',
  Prototype: 'Build 2 basic apps with limited customization and rapid prototyping support.',
  Production: 'Product-ready output, monetization support, and escalation to engineering review.',
  Growth: 'Enterprise-ready builds with custom backend, support, and performance planning.',
  Enterprise: 'Fully managed roadmap, scaling, infra, marketing, and collaborative development.Batman Unlimited: monster mayhem',
};

const tips = [
  {
    title: 'Prompt with a target user and desired outcome.',
    detail: '“Build a premium mobile app for busy founders who want daily planning, invoicing, and AI summaries.”',
    tags: ['Clarity', 'Audience'],
  },
  {
    title: 'Describe the feel before the feature list.',
    detail: 'Set the mood, brand voice, and type of experience so Telvin can align every screen with your vision.',
    tags: ['Brand', 'Experience'],
  },
  {
    title: 'Use the build loop to refine fast.',
    detail: 'Generate, review, revise, and escalate when your product needs deeper infra or growth planning.',
    tags: ['Iteration', 'Scale'],
  },
];

const activityViews = {
  latest: [
    { title: 'Live build started', detail: 'A premium experience moved from prompt to UI sketch in seconds.' },
    { title: 'Insight surfaced', detail: 'The system flagged a stronger monetization and onboarding path.' },
    { title: 'Escalation queued', detail: 'A production-ready product is ready for engineering review.' },
  ],
  builds: [
    { title: 'Launch package refined', detail: 'Build assets, downloads, and storage handoff were prepared for review.' },
    { title: 'Prototype upgraded', detail: 'The build flow now includes premium visuals, backend planning, and launch guidance.' },
    { title: 'Growth path prepared', detail: 'A plan for scale, maintenance, and upgrade routes is now attached.' },
  ],
  generations: [
    { title: 'Image generation ready', detail: 'Visual assets can be generated in tandem with the app flow and brand system.' },
    { title: 'Video concept drafted', detail: 'Marketing and onboarding content can be generated directly from the same brief.' },
    { title: 'Code review captured', detail: 'Errors, screenshots, and prompts can be used to resolve issues intelligently.' },
  ],
};

const Overview = () => {
  const navigate = useNavigate()
  const { storage, projects, activity, user } = useAppgradeStore();
  const [tipIndex, setTipIndex] = useState(0);
  const [activityView, setActivityView] = useState('latest');
  const [activityIndex, setActivityIndex] = useState(0);
  const [notificationPopup, setNotificationPopup] = useState(false)
  const [bills, setBills] = useState(false)

  useEffect(() => {
    const tipTimer = window.setInterval(() => {
      setTipIndex((value) => (value + 1) % tips.length);
    }, 4000);

    return () => window.clearInterval(tipTimer);
  }, []);

  useEffect(() => {
    const viewTimer = window.setInterval(() => {
      setActivityView((value) => {
        if (value === 'latest') return 'builds';
        if (value === 'builds') return 'generations';
        return 'latest';
      });
    }, 5000);

    return () => window.clearInterval(viewTimer);
  }, []);

  useEffect(() => {
    const itemTimer = window.setInterval(() => {
      setActivityIndex((value) => (value + 1) % activityViews[activityView].length);
    }, 5000);

    return () => window.clearInterval(itemTimer);
  }, [activityView]);

  const activePlan = user?.plan || 'Creator';
  const activeTip = tips[tipIndex];
  const currentActivity = activityViews[activityView][activityIndex];
  const usagePercent = Math.min(100, Math.round((storage.usedGB / storage.totalGB) * 100));

  const seePlans = () => {
    navigate('/account')
  }

  return (
    <div className="page-shell overview-shell" style={{ backgroundColor: 'white' }}>
      <header className="page-header overview-hero">
        <div>
          <p className="eyebrow">Operations dashboard</p>
          <h1 className="page-title">Overview</h1>
          <p className="page-subtitle">
            A live summary of your Appgrade plan, build velocity, storage and launch readiness.
          </p>
        </div>
        <div className="overview-actions">
          <div className="live-pill">
            <IoPulse size={16} />
            Live telemetry
          </div>
          <div className="icon-cluster">
            <div className="icon-bubble" onClick={() => setNotificationPopup(true)}>
              <IoNotifications size={18} />
            </div>
            <div className="icon-bubble" onClick={() => setBills(true)}>
              <IoCard size={18} />
            </div>
            <div className="icon-bubble" style={{ opacity: 0.4 }}>
              <IoRocket size={18} />
            </div>
          </div>
        </div>
      </header>

      <section className="overview-grid">
        <div className="overview-main-panel">
          <div className="overview-card hero-card">
            <div className="hero-card-head">
              <div>
                <p className="eyebrow">Current plan</p>
                <h2>{activePlan}</h2>
              </div>
              <div className="plan-pill">Build flow</div>
            </div>
            <p className="hero-card-copy">{planDescriptions[activePlan] || planDescriptions.Creator}</p>
            <div className="overview-kpis">
              <div className="kpi-card">
                <span>Builds</span>
                <strong>{projects.length}</strong>
              </div>
              <div className="kpi-card">
                <span>Storage</span>
                <strong>{usagePercent}%</strong>
              </div>
              <div className="kpi-card">
                <span>Momentum</span>
                <strong>High</strong>
              </div>
            </div>
            <button className="builder-button primary action-link" onClick={seePlans}>
              View plans <IoArrowForward size={16} />
            </button>
          </div>

          <div className="overview-card tips-card">
            <div className="card-head">
              <div>
                <p className="eyebrow">Tips</p>
                <h3>Prompt like an elite operator</h3>
              </div>
              <div className="status-pill">Auto rotating</div>
            </div>
            <p className="tip-title">{activeTip.title}</p>
            <p className="tip-detail">{activeTip.detail}</p>
            <div className="tag-row">
              {activeTip.tags.map((tag) => (
                <span className="tag-chip" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="overview-card activity-card">
          <div className="card-head">
            <div>
              <p className="eyebrow">Activities</p>
              <h3>Latest signals</h3>
            </div>
            <div className="segmented-control">
              {['latest', 'builds', 'generations'].map((view) => (
                <button
                  key={view}
                  className={activityView === view ? 'segmented-btn active' : 'segmented-btn'}
                  onClick={() => setActivityView(view)}
                >
                  {view === 'latest' ? 'Latest' : view === 'builds' ? 'Builds' : 'AI generations'}
                </button>
              ))}
            </div>
          </div>

          <div className="activity-surface">
            <div className="activity-badge">
              <IoSparkles size={20} />
              {activityView === 'latest' ? 'Latest' : activityView === 'builds' ? 'Builds' : 'Generations'}
            </div>
            <h4>{currentActivity.title}</h4>
            <p>{currentActivity.detail}</p>
            <div className="activity-meta">
              <span>Storage: {storage.usedGB.toFixed(1)} GB / {storage.totalGB} GB</span>
              <span>Recent builds: {projects.length}</span>
            </div>
          </div>

          <div className="activity-list">
            {activity.slice(0, 3).map((item) => (
              <div className="activity-row" key={item.id}>
                <div className="activity-dot" />
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="insight-grid">
        <div className="insight-card">
          <h3>About Appgrade</h3>
          <p>Understand how Appgrade combines product strategy, AI generation, deployment and maintenance into one premium workflow.</p>
          <button className="builder-button ghost">Read more</button>
        </div>
        <div className="insight-card">
          <h3>How to prompt</h3>
          <p>Learn how to produce sharp product briefs, user flows, and launch-ready app ideas with Telvin.</p>
          <button className="builder-button ghost">See how</button>
        </div>
        <div className="insight-card">
          <h3>Explore Innoxation</h3>
          <p>See the company, ecosystem, and the technology force behind Telvin, N.O.R.M.A.L and future product infrastructure.</p>
          <button className="builder-button ghost" style={{ opacity: 0.4 }}>Explore</button>
        </div>
      </section>

      <NotificationPopup
        isOpen={notificationPopup}
        onClose={() => setNotificationPopup(false)}
      />
      <BillsPopup
        isOpen={bills}
        onClose={() => setBills(false)}
      />
    </div>
  );
};

export default Overview;