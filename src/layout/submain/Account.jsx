import { useMemo } from 'react';
import { IoChevronForward, IoArrowForward, IoSparkles } from 'react-icons/io5';
import { useAppgradeStore } from '../../state/AppgradeStore';

/*
 Note to self: Remove this page has part of the navigation, make it a different page -> 
 trigger navigation in Overview
*/

const plans = [
  {
    name: 'Creator',
    price: 'Free',
    duration: 'Starter access',
    engine: 'Normal EB',
    description: 'Everything you need to explore the Appgrade workflow.',
    details: [
      '1 game, app or website',
      '15 images',
      '2 short videos',
      '2GB storage limit',
      'Basic support',
    ],
  },

  {
    name: 'Prototype',
    price: '$50',
    duration: 'Rapid prototyping',
    engine: 'Normal B1',
    description: 'Turn an idea into a functional prototype quickly.',
    details: [
      'Everything in Creator',
      '2 project builds',
      'Limited customization',
      '1 Build Edit',
      '4 short videos',
      '2 revisions',
      'Priority AI suggestions',
      '2.5GB storage limit',
    ],
  },

  {
    name: 'Production',
    price: '$200',
    duration: 'Launch ready',
    engine: 'Normal F1',
    description:
      'Turn validated ideas into polished, launch-ready products.',
    details: [
      'Everything in Prototype',
      '4 product-ready builds',
      'Monetization setup',
      'Maintenance queue',
      'Limited customization',
      '3 Build Edits',
      '4 revisions',
      'Basic escalation',
      '5 high-quality videos',
      'Custom product logo',
      'Project code zip'
    ],
    featured: true,
  },

  {
    name: 'Growth',
    price: '$450',
    duration: 'Scale and strategy',
    engine: 'Normal F1',
    description:
      'Advanced development, customization, and strategic support for growing products.',
    details: [
      'Everything in Production',
      '4 enterprise-ready builds',
      '6 Build Edits',
      'Enterprise UX',
      'Advanced customization',
      '8 revisions',
      'Priority escalation',
      'Engineer escalation',
      'Priority development support',
      'Marketing guidance',
      'Growth planning',
      'Limited updates',
      'Limited maintenance',
    ],
  },

  {
    name: 'Enterprise',
    price: 'Custom',
    duration: 'Tailored service',
    engine: 'Normal Gem',
    description:
      'A dedicated Appgrade experience built around your organization and long-term needs.',
    details: [
      'Everything in Growth',
      'Custom backend',
      'Dedicated engineers',
      'Team collaboration',
      'Full customization',
      'Custom infrastructure planning',
      'App Store launch support',
      'Unlimited revisions',
      'Executive onboarding',
      'User testing',
      'Innoxation company contract',
      'Full updates',
      'Full maintenance',
    ],
  },
];

const Account = () => {
  const { user, upgradePlan } = useAppgradeStore();

  const currentPlan = useMemo(
    () => plans.find((plan) => plan.name === user.plan) || plans[0],
    [user.plan]
  );

  const currentIndex = plans.findIndex((plan) => plan.name === user.plan);
  const nextPlan = plans[currentIndex + 1];

  return (
    <div className="page-shell">
      {/* Header */}

      <header className="page-header overview-hero">
        <div>
          <p className="eyebrow">Account</p>
          <h1 className="page-title">Pricing plan</h1>
          <p className="page-subtitle">
            Manage your Appgrade plan, product capacity, and the tools available
            to your workspace.
          </p>
        </div>
      </header>

      {/* Current plan / overview */}
      <div className="account-overview">
        <div className="overview-card hero-card">
          <div className="card-topline">
            <span className="status-badge">
              <span className="status-dot" />
              Current plan
            </span>

            <span className="plan-index">
              {currentIndex + 1} / {plans.length}
            </span>
          </div>

          <div className="current-plan-content">
            <div>
              <h2>{currentPlan.name}</h2>

              <div className="large-price">
                {currentPlan.price}
                {currentPlan.price !== 'Free' &&
                  currentPlan.price !== 'Custom' && (
                    <span>/month</span>
                  )}
              </div>

              <p className="plan-description">
                {currentPlan.description}
              </p>
            </div>

            <div className="plan-meta">
              <span>Plan type</span>
              <strong>{currentPlan.duration}</strong>
            </div>
          </div>

          <div className="plan-divider" />

          <div className="included-section">
            <div className="section-label">Included with your plan</div>

            <div className="included-grid">
              {currentPlan.details.map((item) => (
                <div className="included-item" key={item}>
                  <span className="check-icon">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-actions">
            <button className="builder-button primary action-link">Manage billing</button>
            <button className="secondary-bubble">Plan support</button>
          </div>
        </div>

        {/* Account intelligence - account-insights */}
        <div className="storage-card">
          <div className="insight-header">
            <div>
              <span className="eyebrow">Workspace</span>
              <h3>Plan overview</h3>
            </div>

            <div className="insight-icon">✦</div>
          </div>

          <p style={{ fontSize: 16 }}>
            Your current plan gives your workspace access to Appgrade's
            AI-assisted product workflow.
          </p>

          <div className="usage-list">
            <div className="usage-row">
              <div className="usage-copy">
                <span>Build capacity</span>
                <strong>
                  {currentPlan.details[0]}
                </strong>
              </div>

              <div className="usage-bar">
                <span style={{ width: '62%' }} />
              </div>
            </div>

            <div className="usage-row">
              <div className="usage-copy">
                <span>Creative assets</span>
                <strong>
                  {currentPlan.details[1]}
                </strong>
              </div>

              <div className="usage-bar">
                <span style={{ width: '48%' }} />
              </div>
            </div>

            <div className="usage-row">
              <div className="usage-copy">
                <span>Product support</span>
                <strong>
                  {currentPlan.details[currentPlan.details.length - 1]}
                </strong>
              </div>

              <div className="usage-bar">
                <span style={{ width: '74%' }} />
              </div>
            </div>
          </div>

          {nextPlan && (
            <div className="next-plan">
              <div>
                <span>Next available tier</span>
                <strong>{nextPlan.name}</strong>
              </div>

              <span className="next-price">{nextPlan.price}</span>
            </div>
          )}
        </div>
      </div>

      {/* Plans */}
      <section className="plans-section">
        <div className="section-heading">
          <div>
            <span className="eyer">Appgrade plans</span>
            <h2 className='modules-title'>Choose your next stage</h2>
            <p>
              Start small, build quickly, and unlock deeper product capabilities
              as your workflow grows.
            </p>
          </div>

          <span className="secure-note">
            <span>●</span> Flexible upgrades
          </span>
        </div>

        <div className="plan-grid">
          {plans.map((plan) => {
            const isCurrent = plan.name === user.plan;

            return (
              <div
                key={plan.name}
                className={`plan-card ${isCurrent ? 'current-plan-card-small' : ''
                  } ${plan.featured ? 'featured-plan' : ''}`}
              >
                {plan.featured && (
                  <div className="featured-label">
                    Most popular
                  </div>
                )}

                <div className="plan-card-header">
                  <div>
                    <span className="plan-name">
                      {plan.name}
                    </span>

                    {isCurrent && (
                      <span className="current-label">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <div className="plan-card-price">
                  {plan.price}
                  {plan.price !== 'Free' &&
                    plan.price !== 'Custom' && (
                      <small>/mo</small>
                    )}
                </div>

                <span className="plan-duration">
                  {plan.duration}
                </span>

                <p className="plan-duration">
                  {plan.engine}
                </p>

                <p className="plan-card-description">
                  {plan.description}
                </p>

                <div className="card-rule" />

                <div className="features-heading">
                  What's included
                </div>

                <ul className="feature-list">
                  {plan.details.map((item) => (
                    <li key={item}>
                      <span className="feature-check">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  className={
                    isCurrent
                      ? 'plan-button current-button'
                      : plan.featured
                        ? 'plan-button featured-button'
                        : 'plan-button'
                  }
                  onClick={() => upgradePlan(plan.name)}
                  disabled={isCurrent}
                >
                  {isCurrent
                    ? 'Current plan'
                    : plan.name === 'Enterprise'
                      ? 'Contact sales'
                      : `Upgrade to ${plan.name}`}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Enterprise */}
      <section className="enterprise-card">
        <div className="enterprise-glow" />

        <div className="enterprise-content">
          <div className="enterprise-mark">A</div>

          <div>
            <span className="eyer">Appgrade Enterprise</span>

            <h2>Build beyond the standard plan.</h2>

            <p style={{ fontSize: 16 }}>
              Bring Appgrade closer to your organization with dedicated
              engineering, infrastructure planning, product guidance, and
              launch support.
            </p>

            <div className="enterprise-features">
              <span>Dedicated engineering</span>
              <span>Infrastructure planning</span>
              <span>Launch support</span>
            </div>
          </div>
        </div>

        <button className="builder-button primary action-link">
          Request enterprise quote
          <IoArrowForward size={16} />
        </button>
      </section>
    </div>
  );
};

export default Account;
