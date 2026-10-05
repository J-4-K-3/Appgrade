import { useMemo, useState } from 'react';
import { useAppgradeStore } from '../../state/AppgradeStore';
import ProgressBar from '../../components/ProgressBar';
import { IoChevronForward, IoArrowForward, IoSparkles } from 'react-icons/io5';

// Everything thats needs to be navigated too, comes here

const Projects = () => {
  const { projects, storage, credits } = useAppgradeStore();

  const recentProjects = useMemo(
    () => projects.slice(0, 4),
    [projects]
  );

  const generatedAssets = (credits?.remaining ?? 0) + 16;

  const [open, setOpen] = useState({
    builds: true,
    maintenance: false,
    generated: false,
  });

  const toggle = (key) => {
    setOpen((state) => ({
      ...state,
      [key]: !state[key],
    }));
  };

  const storagePercentage =
    storage?.totalGB > 0
      ? Math.min((storage.usedGB / storage.totalGB) * 100, 100)
      : 0;

  return (
    <div className="page-shell">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="page-header overview-hero">
        <div>
          <p className="eyebrow">Project Space</p>
          <h1 className="page-title">Workspace hub</h1>
          <p className="page-subtitle">
            Your central workspace for builds, assets, storage,
            maintenance, and everything moving toward production.
          </p>
        </div>
        <div className="overview-actions">
          <div className="live-pill">
            <IoSparkles size={16} />
            Live workspace
          </div>
        </div>
      </header>

      {/* =====================================================
          WORKSPACE OVERVIEW
      ===================================================== */}

      <section className="workspace-overview">

        <div className="overview-card hero-card">

          <div className="hero-heading">
            <div>
              <span className="eyebrow">
                Workspace overview
              </span>

              <h2>Your products, organized.</h2>
            </div>

            <div className="hero-symbol">
              <IoSparkles />
            </div>
          </div>

          <p className="hero-description">
            Every draft, generated asset, and maintenance task
            stays connected to your product workflow so you can
            move from concept to launch without losing context.
          </p>

          <div className="workspace-metrics">

            <div className="kpi-card">
              <span>Saved builds</span>
              <strong>{projects.length}</strong>
              <small>
                Active apps and website drafts
              </small>
            </div>

            <div className="kpi-card">
              <span>Generated assets</span>
              <strong>{generatedAssets}</strong>
              <small>
                AI-created product assets
              </small>
            </div>

            <div className="kpi-card">
              <span>Maintenance</span>
              <strong>3</strong>
              <small>
                Updates and fixes in progress
              </small>
            </div>

          </div>

          <div className="workspace-actions">
            <button className="builder-button primary action-link">
              Open saved builds
              <IoArrowForward size={16} />
            </button>

            <button className="secondary-bubble">
              Review maintenance
            </button>
          </div>

        </div>

        {/* ===================================================
            STORAGE
        =================================================== */}

        <div className="storage-card">

          <div className="storage-card-header">
            <div>
              <span className="eyebrow">
                Infrastructure
              </span>

              <h3>Storage</h3>
            </div>

            <div className="storage-icon">
              {Math.round(storagePercentage)}%
            </div>
          </div>

          <p style={{ fontSize: 16 }}>
            Secure workspace storage for your builds,
            generated content, and launch artifacts.
          </p>

          <div className="storage-number">
            <strong>{storage.usedGB}</strong>
            <span>GB used of {storage.totalGB} GB</span>
          </div>

          <div className="storage-track">
            <span
              style={{
                width: `${storagePercentage}%`,
              }}
            />
          </div>

          <div className="storage-meta">
            <span>
              {Math.max(storage.totalGB - storage.usedGB, 0)} GB available
            </span>

            <span>
              {storagePercentage >= 90
                ? 'Storage almost full'
                : 'Storage healthy'}
            </span>
          </div>

          <div className="storage-note">
            <span>Creator & Prototype</span>
            <p>
              Fixed 2GB storage included. Paid plans
              unlock scheduled reset and archive workflows.
            </p>
          </div>

          <button className="storage-button">
            View storage options
            <IoArrowForward />
          </button>

        </div>

      </section>

      {/* =====================================================
          WORKSPACE MODULES
      ===================================================== */}

      <section className="workspace-modules">

        <div className="section-heading">
          <div>
            <span className="eyer">
              Workspace modules
            </span>

            <h2 className='modules-title'>Everything in one place</h2>

            <p>
              Jump between your products, maintenance work,
              and generated content.
            </p>
          </div>
        </div>

        <div className="module-grid">

          {/* Saved builds */}
          <div
            className={`workspace-module ${open.builds ? 'module-open' : ''
              }`}
          >
            <button
              className="module-header"
              onClick={() => toggle('builds')}
            >
              <div className="module-title">
                <span className="module-number">01</span>

                <div>
                  <h3>Saved builds</h3>
                  <span>
                    {projects.length} active projects
                  </span>
                </div>
              </div>

              <IoChevronForward
                className={`module-chevron ${open.builds ? 'open' : ''
                  }`}
              />
            </button>

            {open.builds && (
              <div className="module-body">
                <p>
                  Your active game, app and website builds,
                  version history and product prototypes.
                </p>

                <button className="module-link">
                  Open build library
                  <IoArrowForward />
                </button>
              </div>
            )}
          </div>

          {/* Maintenance */}
          <div
            className={`workspace-module ${open.maintenance ? 'module-open' : ''
              }`}
          >
            <button
              className="module-header"
              onClick={() => toggle('maintenance')}
            >
              <div className="module-title">
                <span className="module-number">02</span>

                <div>
                  <h3>Maintenance builds</h3>
                  <span>3 workflows active</span>
                </div>
              </div>

              <IoChevronForward
                className={`module-chevron ${open.maintenance ? 'open' : ''
                  }`}
              />
            </button>

            {open.maintenance && (
              <div className="module-body">
                <p>
                  Manage product updates, bug fixes,
                  revisions, and launch-ready improvements.
                </p>

                <button className="module-link">
                  Review maintenance
                  <IoArrowForward />
                </button>
              </div>
            )}
          </div>

          {/* Generated content */}
          <div
            className={`workspace-module ${open.generated ? 'module-open' : ''
              }`}
          >
            <button
              className="module-header"
              onClick={() => toggle('generated')}
            >
              <div className="module-title">
                <span className="module-number">03</span>

                <div>
                  <h3>Generated content</h3>
                  <span>{generatedAssets} assets</span>
                </div>
              </div>

              <IoChevronForward
                className={`module-chevron ${open.generated ? 'open' : ''
                  }`}
              />
            </button>

            {open.generated && (
              <div className="module-body">
                <p>
                  Track AI-generated visuals, audio,
                  documentation, copy, and code previews.
                </p>

                <button className="module-link">
                  Browse generated content
                  <IoArrowForward />
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* =====================================================
          RECENT BUILDS
      ===================================================== */}

      <section className="workspace-content-grid">

        <div className="builds-panel">

          <div className="panel-heading">
            <div>
              <span className="eyebrow">
                Recently updated
              </span>

              <h2>Saved builds</h2>
            </div>

            <button className="text-button">
              View all
              <IoArrowForward />
            </button>
          </div>

          {recentProjects.length > 0 ? (
            <div className="build-list">

              {recentProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="build-row"
                >
                  <div className="build-index">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="build-main">
                    <strong>{project.name}</strong>

                    <span>
                      {project.type}
                      {' · '}
                      {new Date(
                        project.updatedAt
                      ).toLocaleDateString()}
                    </span>
                  </div>

                  <span className="build-status">
                    {project.status}
                  </span>

                  <IoChevronForward className="build-arrow" />
                </div>
              ))}

            </div>
          ) : (
            <div className="empty-builds">
              <span>01</span>
              <h3>No saved builds yet</h3>
              <p>
                Your next product starts here.
              </p>
              <button className="primary-button">
                Create your first build
              </button>
            </div>
          )}

        </div>

        {/* Retention */}
        <div className="retention-panel">

          <div className="panel-heading">
            <div>
              <span className="eyebrow">
                Workspace policy
              </span>

              <h2>Retention</h2>
            </div>
          </div>

          <div className="retention-list">

            <div className="retention-item">
              <span>01</span>
              <div>
                <strong>Creator & Prototype</strong>
                <p>
                  2GB fixed storage with manual cleanup.
                </p>
              </div>
            </div>

            <div className="retention-item">
              <span>02</span>
              <div>
                <strong>Production & above</strong>
                <p>
                  Scheduled resets and archive workflows.
                </p>
              </div>
            </div>

            <div className="retention-item">
              <span>03</span>
              <div>
                <strong>Export your work</strong>
                <p>
                  Save artifacts as downloads, documents,
                  and build records.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          GUIDES
      ===================================================== */}

      <section className="guides-section">

        <div className="section-heading">
          <div>
            <span className="eyer">
              Appgrade intelligence
            </span>

            <h2 className='modules-title'>Build with more intention.</h2>

            <p>
              Practical guidance for getting more from
              Telvin and the Appgrade workflow.
            </p>
          </div>
        </div>

        <div className="guide-grid">

          <article className="guide-card">
            <span className="guide-number">01</span>
            <h3>Build better products</h3>
            <p>
              Give Telvin a clear problem, target audience,
              desired outcome, and brand direction to produce
              stronger product decisions.
            </p>
            <button className="guide-link">
              Read guide <IoArrowForward />
            </button>
          </article>

          <article className="guide-card">
            <span className="guide-number">02</span>
            <h3>Optimize your workspace</h3>
            <p>
              Archive completed builds, reuse assets, and
              separate production artifacts from experiments
              to keep your workspace efficient.
            </p>
            <button className="guide-link">
              Read guide <IoArrowForward />
            </button>
          </article>

          <article className="guide-card">
            <span className="guide-number">03</span>
            <h3>Prompt Telvin effectively</h3>
            <p>
              Ask for UX direction, audience fit,
              monetization strategy, architecture,
              and high-value product flows.
            </p>
            <button className="guide-link">
              Read guide <IoArrowForward />
            </button>
          </article>

        </div>

      </section>

    </div>
  );
};

export default Projects;
