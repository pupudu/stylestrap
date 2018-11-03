const state = {};

export const setTheme = theme => {
  if (state.theme) return;
  state.theme = theme;
};

export const getTheme = () => state.theme;
