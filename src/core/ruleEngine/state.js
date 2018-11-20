const state = {};

export const setTheme = theme => {
  // Set theme only if it is not an empty object
  if (Object.keys(theme).length > 0) {
    state.theme = theme;
  }
  return state.theme;
};

export const getTheme = () => state.theme;
