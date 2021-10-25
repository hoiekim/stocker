import styled, { createGlobalStyle } from "styled-components";
import * as theme from "./theme";
import * as size from "./size";

export { theme, size };

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }: any) => theme.colors.main.hex()};
    color: ${({ theme }: any) => theme.colors.white.hex()};
    font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
  }
  * {
    box-sizing: border-box;
  }
`;

GlobalStyle.defaultProps = { theme };

export const FlexBox = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Fullscreen = styled(FlexBox)({
  width: "100vw",
  height: "100vh",
  minHeight: "500px",
  position: "relative",
  top: "0",
  left: "0",
});

export const Header = styled.h2(({ theme }) => ({
  color: theme.colors.white.hex(),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

Header.defaultProps = { theme };

export const Input = styled.input(({ theme }: any) => ({
  ...theme.pressed,
  ...size.short,
  ...size.narrow,
  padding: "0.5rem",
}));

Input.defaultProps = { theme };

export const Select = styled.select(({ theme }: any) => ({
  ...theme.pressed,
  ...size.short,
  ...size.narrow,
  padding: "0.5rem",
}));

Select.defaultProps = { theme };

export const Label = styled.div({
  ...size.short,
  ...size.narrow,
  display: "inline-flex",
  alignItems: "center",
});

export const Button = styled.button(({ theme }: any) => ({
  ...theme.extruded,
  ...size.short,
  ...size.wide,
  cursor: "pointer",
}));

Button.defaultProps = { theme };
