import Color from "color";

export const colors = {
  main: new Color("rgb(13, 21, 51)"),
  sub: new Color("rgb(204, 81, 219)"),
  accent: new Color("rgb(200, 50, 100)"),
  white: new Color("rgb(225, 210, 240)"),
  alert: new Color("rgb(200, 35, 100)"),
  success: new Color("rgb(50, 180, 120)"),
};

export const pressed = {
  border: "none",
  borderRadius: "3px",
  color: colors.white.hex(),
  backgroundColor: colors.main.lighten(0.3).hex(),
  boxShadow:
    "inset 2px 2px 2px rgba(0, 0, 0, 0.5)," +
    "inset -2px -2px 2px rgba(255, 255, 255, 0.05);",
};

export const extruded = {
  border: "none",
  borderRadius: "3px",
  color: colors.white.hex(),
  backgroundColor: colors.main.lighten(0.3).hex(),
  boxShadow:
    "2px 2px 4px rgba(0, 0, 0, 0.5)," +
    "-2px -2px 4px rgba(255, 255, 255, 0.05);",
  ":hover": {
    backgroundColor: colors.main.lighten(0.4).hex(),
  },
  ":active": {
    backgroundColor: colors.main.darken(0.3).hex(),
    boxShadow: "none",
    color: colors.white.mix(colors.main).hex(),
  },
};
