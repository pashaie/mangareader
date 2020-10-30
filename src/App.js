import './App.css';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = (e) => {
    if (!darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    setDarkMode(!darkMode)
  }

  return (
    <>
      <div>
        <div className="toolbar">
          <div className="menu-header">
            <div className="menu-icon" />
            <div className="menu-title">View Options</div>
          </div>
          <div className="menu-items">
            <div className="menu-subtitle">SIZING</div>
            <button id="btn-original-width">Original size</button>
            <button id="btn-shrink-size">Shrink to fit</button>
            <button id="btn-shrink-width">Shrink width to fit</button>
            <button id="btn-shrink-height">Shrink height to fit</button>
            <button id="btn-fit-width">Fit to width</button>
            <button id="btn-fit-height">Fit to height</button>
            <button className="btn-smart-fit" data-fit-key="size0">Smart fit small</button>
            <button className="btn-smart-fit" data-fit-key="size1">Smart fit large</button>
            <div className="menu-subtitle">SETTINGS</div>
            <label className="label-toggle">
              <input type="checkbox" id="input-smooth-scroll" className="input-toggle" />
              <span>Smooth scrolling</span>
            </label>
            <label className="label-toggle">
              <input type="checkbox" id="input-seamless" className="input-toggle" />
              <span>Collapse spacing</span>
            </label>
            <label className="label-toggle">
              <input type="checkbox" className="input-toggle" checked={darkMode} onChange={handleDarkMode} />
              <span>Dark mode</span>
            </label>
          </div>
        </div>
        <div id="scrubber-icon" />
        <div id="scrubber-container">
          <div id="scrubber-preview" />
          <div id="scrubber" />
          <div id="scrubber-marker-active" />
          <div id="scrubber-marker" />
        </div>
        <div id="update-toast">
          <span> A new version of Mangareader (<span id="next-version" />) is available. </span>
          <a id="link-update" target="_blank">Download</a>
        </div>
      </div>

    </>
  );
}

export default App;
