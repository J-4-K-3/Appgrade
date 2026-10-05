import { useState } from 'react';
import { useAppgradeStore } from '../../state/AppgradeStore';

const Settings = () => {
  const { user } = useAppgradeStore();
  const [theme, setTheme] = useState('Dark');
  const [fontSize, setFontSize] = useState('Medium');
  const [layout, setLayout] = useState('Compact');
  const [language, setLanguage] = useState('JavaScript');
  const [framework, setFramework] = useState('React');
  const [designStyle, setDesignStyle] = useState('Modern');
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    productUpdates: true,
    billingAlerts: false,
  });

  return (
    <div className="page-shell" style={{ backgroundColor: 'white' }}>
      <header className="page-header overview-hero">
        <div>
          <p className="eyebrow">Settings</p>
          <h1 className="page-title">Preferences & security</h1>
          <p className="page-subtitle">
            Control your Appgrade environment, alerts, account safety, and publishing experience.
          </p>
        </div>
      </header>

      <div className="grid-2">
        <div className="feature-card">
          <h2 className="section-title">Account</h2>
          <div className="settings-card-list">
            <div className="settings-row">
              <div>
                <strong>Change email</strong>
                <p className="small-text">Switch the email address tied to your Appgrade account.</p>
              </div>
              <button className="secondary-bubble-text">Update</button>
            </div>
            <div className="settings-row">
              <div>
                <strong>Change password</strong>
                <p className="small-text">Rotate your password to keep your account protected.</p>
              </div>
              <button className="secondary-bubble-text">Change</button>
            </div>
            <div className="settings-row">
              <div>
                <strong>Delete account</strong>
                <p className="small-text">Permanently remove your profile, published assets, and usage history.</p>
              </div>
              <button className="secondary-bubble-text">Decide</button>
            </div>
          </div>
        </div>

        <div className="feature-card">
          <h2 className="section-title">Appearance</h2>
          <div className="input-group">
            <label>Theme</label>
            <select className="select-field" value={theme} onChange={(event) => setTheme(event.target.value)}>
              <option>Dark</option>
              <option>Light</option>
              <option>System</option>
            </select>
          </div>
          <div className="input-group">
            <label>Font size</label>
            <select className="select-field" value={fontSize} onChange={(event) => setFontSize(event.target.value)}>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div className="input-group">
            <label>Layout</label>
            <select className="select-field" value={layout} onChange={(event) => setLayout(event.target.value)}>
              <option>Compact</option>
              <option>Spacious</option>
              <option>Standard</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid-2">
        <div className="feature-card">
          <h2 className="section-title">AI & preferences</h2>
          <div className="input-group">
            <label>Preferred programming language</label>
            <select className="select-field" value={language} onChange={(event) => setLanguage(event.target.value)}>
              <option>JavaScript</option>
              <option>TypeScript</option>
              <option>Python</option>
              <option>Go</option>
            </select>
          </div>
          <div className="input-group">
            <label>Preferred framework</label>
            <select className="select-field" value={framework} onChange={(event) => setFramework(event.target.value)}>
              <option>React</option>
              <option>Next.js</option>
              <option>Vue</option>
              <option>Angular</option>
            </select>
          </div>
          <div className="input-group">
            <label>Preferred design style</label>
            <select className="select-field" value={designStyle} onChange={(event) => setDesignStyle(event.target.value)}>
              <option>Modern</option>
              <option>Minimal</option>
              <option>Neumorphic</option>
              <option>Material</option>
            </select>
          </div>
        </div>

        <div className="feature-card">
          <h2 className="section-title">Notifications</h2>
          <label className="toggle-row">
            <span>Email alerts</span>
            <input
              type="checkbox"
              checked={notifications.emailAlerts}
              onChange={() => setNotifications((prev) => ({ ...prev, emailAlerts: !prev.emailAlerts }))}
            />
          </label>
          <label className="toggle-row">
            <span>Product updates</span>
            <input
              type="checkbox"
              checked={notifications.productUpdates}
              onChange={() => setNotifications((prev) => ({ ...prev, productUpdates: !prev.productUpdates }))}
            />
          </label>
          <label className="toggle-row">
            <span>Billing alerts</span>
            <input
              type="checkbox"
              checked={notifications.billingAlerts}
              onChange={() => setNotifications((prev) => ({ ...prev, billingAlerts: !prev.billingAlerts }))}
            />
          </label>
        </div>
      </div>

      <div className="grid-2">
        <div className="feature-card">
          <h2 className="section-title">Security</h2>
          <div className="settings-card-list">
            <div className="settings-row">
              <div>
                <strong>Two-factor authentication</strong>
                <p className="small-text">Protect your Appgrade workspace with a second verification step.</p>
              </div>
              <button className="secondary-bubble-text">Manage</button>
            </div>
            <div className="settings-row">
              <div>
                <strong>Login sessions</strong>
                <p className="small-text">Review where your account is currently signed in.</p>
              </div>
              <button className="secondary-bubble-text">View</button>
            </div>
            <div className="settings-row">
              <div>
                <strong>Connected devices</strong>
                <p className="small-text">See and revoke devices with access to your account.</p>
              </div>
              <button className="secondary-bubble-text">Review</button>
            </div>
          </div>
        </div>

        <div className="feature-card">
          <h2 className="section-title">Storage & usage</h2>
          <div className="detail-row">
            <div>
              <strong>Storage used</strong>
              <p className="small-text">650 MB of 2 GB used</p>
            </div>
            <button className="secondary-bubble-text">Clear cache</button>
          </div>
          <div className="detail-row">
            <div>
              <strong>Download data</strong>
              <p className="small-text">Export your projects, activity, and settings.</p>
            </div>
            <button className="secondary-bubble-text">Download</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings