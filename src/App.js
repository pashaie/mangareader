import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode, toggleSeamless, toggleSmoothScroll } from './Settings/Actions'


function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.settings)

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
              <input type="checkbox" id="input-smooth-scroll" className="input-toggle"
                checked={state.smoothScroll} onChange={() => dispatch(toggleSmoothScroll())} />
              <span>Smooth scrolling</span>
            </label>
            <label className="label-toggle">
              <input type="checkbox" id="input-seamless" className="input-toggle"
                checked={state.seamless} onChange={() => dispatch(toggleSeamless())} />
              <span>Collapse spacing</span>
            </label>
            <label className="label-toggle">
              <input type="checkbox" className="input-toggle"
                checked={state.darkMode} onChange={() => dispatch(toggleDarkMode())} />
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
      </div>

    </>
  );
}

export default App;
