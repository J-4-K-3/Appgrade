import {
  IoCompass, IoSearchSharp, IoCloudUpload, IoSparkles
} from 'react-icons/io5';

const Marketplace = () => {
  return (
    <div className="page-shell" style={{ backgroundColor: 'white' }}>
      <header className="page-header overview-hero">
        <div>
          <p className="eyebrow">Marketplace & publishing</p>
          <h1 className="page-title">Discover templates</h1>
          <p className="page-subtitle">
            Publish templates, components, UI kits, APIs and Appgrade projects
          </p>
        </div>
        <div className="overview-actions">
          <div className="live-pill">
            <IoCompass size={16} />
            Template exploration
          </div>
          <div className="icon-cluster">
            <div className="icon-bubble">
              <IoSparkles size={18} />
            </div>
            <div className="icon-bubble">
              <IoSearchSharp size={18} />
            </div>
            <div className="icon-bubble">
              <IoCloudUpload size={18} />
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Marketplace