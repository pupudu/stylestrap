const state = {};

export const setTheme = theme => {
  state.theme = theme;
};

export const getTheme = () => state.theme;
