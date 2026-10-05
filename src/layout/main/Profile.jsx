import { useMemo } from 'react';
import { useAppgradeStore } from '../../state/AppgradeStore';
import { IoLink, IoPencil, IoPerson } from 'react-icons/io5';

const Profile = () => {
  const { user, activity } = useAppgradeStore();

  const profile = useMemo(
    () => ({
      company: 'Innoxation Tech Inc',
      techId: '4827820419463017462808',
      bio: 'Design leader and AI builder focused on premium products, reusable components, and community-first publishing.',
      country: 'United States',
      joinedDate: 'Dec 14, 2023',
      portfolioLink: 'https://appgrade.world/portfolio',
      githubLink: 'https://github.com/appgrade',
      googleConnected: true,
      microsoftConnected: true,
      totalAppsBuilt: 16,
      totalWebsitesBuilt: 9,
      totalAIGenerations: 312,
    }),
    [],
  );

  const recentActivity = useMemo(() => activity.slice(0, 5), [activity]);

  return (
    <div className="page-shell" style={{ backgroundColor: 'white' }}>
      <header className="page-header overview-hero">
        <div>
          <p className="eyebrow">Appgrade Profile</p>
          <h1 className="page-title">Your Appgrade identity</h1>
          <p className="page-subtitle">
            A premium dashboard for your creator profile, published apps, connected tools and activity timeline.
          </p>
        </div>
        <div className="overview-actions">
          <div className="icon-cluster">
            <div className="icon-bubble">
              <IoLink size={18} />
            </div>
            <div className="icon-bubble">
              <IoPencil size={18} />
            </div>
          </div>
        </div>
      </header>

      <div className="grid-2">
        <div className="feature-card profile-card">
          <div className="profile-top">
            <div className="profile-avatar">AG</div>
            <div>
              <p className="eyebrow">Creator profile</p>
              <h2>{user.name}</h2>
              <p className="small-text">{profile.company} · {profile.country}</p>
            </div>
          </div>

          <p className="profile-bio">{profile.bio}</p>

          <div className="profile-meta-grid">
            <div>
              <span>TechID</span>
              <strong>{profile.techId}</strong>
            </div>
            <div>
              <span>Plan</span>
              <strong>{user.plan}</strong>
            </div>
            <div>
              <span>Joined</span>
              <strong>{profile.joinedDate}</strong>
            </div>
            <div>
              <span>Country</span>
              <strong>{profile.country}</strong>
            </div>
          </div>

          <div className="link-pill-grid">
            <a href={profile.portfolioLink} target="_blank" rel="noreferrer" className="link-pill">
              Public portfolio
            </a>
            <a href={profile.githubLink} target="_blank" rel="noreferrer" className="link-pill">
              Linked GitHub
            </a>
          </div>

          <div className="profile-connect-grid">
            <span className="status-chip">{profile.googleConnected ? 'Google linked' : 'Google not linked'}</span>
            <span className="status-chip">{profile.microsoftConnected ? 'Microsoft linked' : 'Microsoft not linked'}</span>
          </div>
        </div>

        <div className="feature-card profile-detail-card">
          <h2 className="section-title">Profile snapshot</h2>

          <div className="profile-details-list">
            <div className="detail-row">
              <span>Name</span>
              <strong>{user.name}</strong>
            </div>
            <div className="detail-row">
              <span>Company</span>
              <strong>{profile.company}</strong>
            </div>
            <div className="detail-row">
              <span>TechID</span>
              <strong>{profile.techId}</strong>
            </div>
            <div className="detail-row">
              <span>Plan</span>
              <strong>{user.plan}</strong>
            </div>
            <div className="detail-row">
              <span>Country</span>
              <strong>{profile.country}</strong>
            </div>
          </div>

          <div className="profile-stats-grid">
            <div className="stat-card">
              <span>Total apps built</span>
              <strong>{profile.totalAppsBuilt}</strong>
            </div>
            <div className="stat-card">
              <span>Total websites built</span>
              <strong>{profile.totalWebsitesBuilt}</strong>
            </div>
            <div className="stat-card">
              <span>Total AI generations</span>
              <strong>{profile.totalAIGenerations}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-card">
        <h2 className="section-title">Activity timeline</h2>

        <ul className="timeline-list">
          {recentActivity.map((item) => (
            <li key={item.id} className="timeline-item">
              <div>
                <strong>{item.title}</strong>
                <p className="small-text">{item.detail}</p>
              </div>
              <span className="timeline-time">
                {new Date(item.at).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
