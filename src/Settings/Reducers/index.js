import { TOGGLE_DARK_MODE, TOGGLE_SEAMLESS, TOGGLE_SMOOTH_SCROL } from '../Actions/actionTypes'
import produce from "immer"

const initialState = {
  darkMode: false,
  seamless: false,
  smoothScroll: false,
};

export const settings = produce((draft, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      draft.darkMode = !draft.darkMode;
      return draft;

    case TOGGLE_SMOOTH_SCROL:
      draft.smoothScroll = !draft.smoothScroll;
      return draft;

    case TOGGLE_SEAMLESS:
      draft.seamless = !draft.seamless;
      return draft;

    default:
      return draft
  }
}, initialState)