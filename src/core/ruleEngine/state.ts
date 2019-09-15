class EngineState {
  theme = {
    breakpoints: {},
    defaultStyles: {},
    sizes: {},
    colors: {},
  };

  setTheme(theme) {
    // Set theme only if it is not an empty object
    if (Object.keys(theme).length > 0) {
      this.theme = theme;
    }
    return this.theme;
  }
}

export default new EngineState();
