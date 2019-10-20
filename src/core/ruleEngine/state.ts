class EngineState {
  theme = {
    breakpoints: {},
    defaultStyles: {},
    overrideStyles: {},
    sizes: {},
    colors: {},
    colorShadeMap: {},
  };

  setTheme(theme) {
    // Set theme only if it is not an empty object
    if (Object.keys(theme).length > 0) {
      this.theme = theme;
    }
  }
}

export default new EngineState();
