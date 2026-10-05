import {
  IoArrowForward,
  IoBugOutline,
  IoBulbOutline,
  IoCloudUploadOutline,
  IoFlashOutline,
  IoHelpCircleOutline,
  IoRocketOutline,
  IoShieldCheckmarkOutline,
  IoSparklesOutline,
} from 'react-icons/io5';

const services = [
  {
    number: '01',
    icon: IoBugOutline,
    title: 'Debugging',
    description:
      'Give Telvin your code, screenshots, logs or issue description and turn a blocker into a clear path forward.',
    action: 'Start debugging',
  },
  {
    number: '02',
    icon: IoBulbOutline,
    title: 'Project brainstorm',
    description:
      'Shape your product identity, audience, UX direction, brand language and launch positioning before you build.',
    action: 'Start brainstorm',
    featured: true,
  },
  {
    number: '03',
    icon: IoFlashOutline,
    title: 'Agentic mode',
    description:
      'Let Telvin work across product tasks with deeper automation, contextual reasoning and guided workflow actions.',
    action: 'Explore agentic mode',
  },
  {
    number: '04',
    icon: IoCloudUploadOutline,
    title: 'Project upload',
    description:
      'Bring an existing project into Appgrade for optimization, completion, architecture review or scaling guidance.',
    action: 'Upload project',
  },
];

const guides = [
  {
    number: '01',
    title: 'Build better products',
    description:
      'Learn how to give Telvin the context it needs to make stronger product and UX decisions.',
  },
  {
    number: '02',
    title: 'Optimize your workspace',
    description:
      'Keep your builds, assets, and storage organized as your product portfolio grows.',
  },
  {
    number: '03',
    title: 'Prompt with precision',
    description:
      'Create clearer prompts that lead to stronger designs, architecture, and product outcomes.',
  },
];

const More = () => {
  return (
    <div className="page-shell" style={{ backgroundColor: 'white' }}>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="page-header overview-hero">
        <div>
          <p className="eyebrow">Appgrade services</p>
          <h1 className="page-title">More ways to build</h1>
          <p className="page-subtitle">
            Go beyond the builder with product guidance,
            debugging, automation, project services, and
            launch support designed around your workflow.
          </p>
        </div>
        <div className="overview-actions">
          <div className="icon-cluster">
            <button className="primary-bubble">Upload project <IoCloudUploadOutline /></button>
            <button className="primary-bubble">Start brainstorm <IoArrowForward /></button>
          </div>
        </div>
      </header>

      {/* =====================================================
          FEATURED SERVICE
      ===================================================== */}

      <section className="service-hero">

        <div className="service-hero-content">

          <div className="service-hero-icon">
            <IoSparklesOutline />
          </div>

          <div>
            <span className="eyer">
              Product intelligence
            </span>

            <h2>Turn an idea into a clearer product.</h2>

            <p style={{ fontSize: 16 }}>
              Appgrade combines Telvin's intelligence with
              structured product workflows to help you make
              better decisions before, during, and after the
              build.
            </p>

            <div className="hero-capabilities">
              <span>Product strategy</span>
              <span>UX direction</span>
              <span>Launch planning</span>
              <span>Technical guidance</span>
            </div>
          </div>

        </div>

        <button className="builder-button primary action-link">
          Start a session
          <IoArrowForward size={16} />
        </button>

      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="services-section">

        <div className="section-heading">
          <div>
            <span className="eyer">
              Services
            </span>

            <h2 className='modules-title'>Support for the work between the lines.</h2>

            <p>
              When building isn't the only thing you need,
              Appgrade gives you additional ways to move
              the product forward.
            </p>
          </div>
        </div>

        <div className="services-grid">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className={`service-card ${service.featured
                  ? 'service-card-featured'
                  : ''
                  }`}
              >
                <div className="service-card-top">
                  <span className="service-number">
                    {service.number}
                  </span>

                  <div className="service-icon">
                    <Icon />
                  </div>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <button className="service-link">
                  {service.action}
                  <IoArrowForward />
                </button>
              </article>
            );
          })}

        </div>
      </section>

      {/* =====================================================
          ACTION CENTER
      ===================================================== */}

      <section className="action-center">

        <div className="action-center-heading">
          <div>
            <span className="eyer">
              Workspace actions
            </span>

            <h2 className='modules-title'>Keep your product moving.</h2>

            <p style={{ fontSize: 14 }}>
              Quick access to the actions that connect
              Appgrade's services with your existing workflow.
            </p>
          </div>

          <div className="action-center-icon">
            <IoRocketOutline />
          </div>
        </div>

        <div className="action-grid">

          <button className="action-item">
            <div>
              <span className="action-index">01</span>
              <strong>Share a build</strong>
              <p>
                Send a project for review or collaboration.
              </p>
            </div>

            <IoArrowForward />
          </button>

          <button className="action-item">
            <div>
              <span className="action-index">02</span>
              <strong>Request documentation</strong>
              <p>
                Generate or organize project documentation.
              </p>
            </div>

            <IoArrowForward />
          </button>

          <button className="action-item">
            <div>
              <span className="action-index">03</span>
              <strong>Attach maintenance</strong>
              <p>
                Keep a finished build connected to future updates.
              </p>
            </div>

            <IoArrowForward />
          </button>

        </div>

      </section>

      {/* =====================================================
          GUIDES
      ===================================================== */}

      <section className="guides-section">

        <div className="section-heading">
          <div>
            <span className="eyer">
              Learn with Appgrade
            </span>

            <h2 className='modules-title'>Small improvements. Better outcomes.</h2>

            <p>
              Practical guidance for getting more value
              from your workspace and Telvin.
            </p>
          </div>
        </div>

        <div className="guides-grid">

          {guides.map((guide) => (
            <article
              key={guide.number}
              className="guide-card"
            >
              <span className="guide-number">
                {guide.number}
              </span>

              <h3>{guide.title}</h3>

              <p>{guide.description}</p>

              <button className="guide-link">
                Read guide
                <IoArrowForward />
              </button>
            </article>
          ))}

        </div>

      </section>

      {/* =====================================================
          ASK TELVIN
      ===================================================== */}

      <section className="telvin-section">

        <div className="telvin-content">

          <div className="telvin-icon">
            <IoHelpCircleOutline />
          </div>

          <div>
            <span className="eyer">
              Ask Telvin
            </span>

            <h2 className='modules-title'>Your product has questions. Ask.</h2>

            <p style={{ fontSize: 13 }}>
              Get guidance on architecture, TechID,
              authentication, launch strategy, retention,
              integrations, marketing, and product growth.
            </p>
          </div>

        </div>

        <div className="question-list">

          <button>
            <span>Can I use TechID in my app?</span>
            <IoArrowForward />
          </button>

          <button>
            <span>Can I integrate Google sign-in?</span>
            <IoArrowForward />
          </button>

          <button>
            <span>What should I improve before launch?</span>
            <IoArrowForward />
          </button>

          <button>
            <span>How can I improve retention?</span>
            <IoArrowForward />
          </button>

        </div>

      </section>

      {/* =====================================================
          TRUST / COMPANY
      ===================================================== */}

      <section className="more-footer-grid">

        <article className="about-card">

          <div className="about-card-icon">
            <IoSparklesOutline />
          </div>

          <span className="eyer">
            About Appgrade
          </span>

          <h2 className='modules-title'>More than an app builder.</h2>

          <p style={{ fontSize: 13 }}>
            Appgrade is an AI product platform designed to
            help turn ideas into applications, content,
            and launch-ready product experiences.
          </p>

          <button className="text-link">
            Learn about Appgrade
            <IoArrowForward />
          </button>

        </article>

        <article className="policy-card">

          <div className="policy-icon">
            <IoShieldCheckmarkOutline />
          </div>


          <div>
            <span className="eyer">
              Trust & policies
            </span>

            <h2 className='modules-title'>Your work stays yours.</h2>

            <p style={{ fontSize: 13 }}>
              Review Appgrade's terms, privacy controls,
              workspace policies, and information about
              how generated content is handled.
            </p>

            <div className="policy-links">
              <button>Terms of service</button>
              <button>Privacy controls</button>
              <button>Workspace policies</button>
            </div>
          </div>

        </article>

      </section>

    </div>
  );
};

export default More;