import { TOGGLE_DARK_MODE, TOGGLE_SEAMLESS, TOGGLE_SMOOTH_SCROL } from './actionTypes';

export const toggleDarkMode = () => (dispatch, getState) => {
  const { settings } = getState();
  if (!settings.darkMode) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
  dispatch({ type: TOGGLE_DARK_MODE })
}

export const toggleSeamless = () => (dispatch, getState) => {
  const { settings } = getState();
  if (!settings.seamless) {
    document.body.classList.add('seamless');
  } else {
    document.body.classList.remove('seamless');
  }
  dispatch({ type: TOGGLE_SEAMLESS });
}

export const toggleSmoothScroll = () => (dispatch, getState) => {
  const { settings } = getState();
  window.pauseZenscroll = !settings.smoothScroll;
  dispatch({ type: TOGGLE_SMOOTH_SCROL });
}
