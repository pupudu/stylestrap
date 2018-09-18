export const getRuleMap = ({ theme, ...props }) => {
  return {
    fontSize: "font-size",
    fontWeight: {
      __label__: "font-weight",
      unit: ""
    },
    lineHeight: {
      __label__: "line-height",
      derive: () => theme.lineHeight(props.fontSize)
    },
    padding: {
      __label__: "padding",
      top: "padding-top",
      bottom: "padding-bottom",
      left: "padding-left",
      right: "padding-right"
    },
    margin: {
      __label__: "margin",
      top: "margin-top",
      bottom: "margin-bottom",
      left: "margin-left",
      right: "margin-right"
    },
    color: {
      __label__: "color",
      enums: {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        warning: theme.colors.warning,
        danger: theme.colors.danger,
        muted: theme.colors.muted
      },
      derive: (selector, base) =>
        theme.colors[`${selector}`](theme.colors[base])
    }
  };
};
