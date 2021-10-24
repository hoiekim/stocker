import styled, { createGlobalStyle } from "styled-components";

export const Fullscreen = styled.div({
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: "0",
  left: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const FlexBox = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const theme = {
  main: "rgb(13, 21, 51)",
  sub: "rgb(204, 81, 219)",
  accent: "rgb(255, 188, 173)",
  white: "rgb(225, 210, 240)",
  alert: "rgb(200, 35, 100)",
  success: "rgb(50, 180, 120)",
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props: any) => props.theme.main};
    color: ${(props: any) => props.theme.white};
    font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
  }
  * {
    box-sizing: border-box;
  }
`;

GlobalStyle.defaultProps = { theme };

export const Header = styled.h2(({ theme }) => ({
  color: theme.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

Header.defaultProps = { theme };

export const Input = styled.input(({ theme }) => ({
  margin: "0.5rem",
  height: "2rem",
  width: "15rem",
  padding: "0.5rem",
  border: "none",
  borderRadius: "3px",
  backgroundColor: theme.white,
  boxShadow:
    "inset 2px 2px 2px rgba(0, 0, 0, 0.2)," +
    "inset -2px -2px 2px rgba(255, 255, 255, 0.2);",
  color: theme.main,
}));

Input.defaultProps = { theme };

export const Select = styled.select(({ theme }) => ({
  margin: "0.5rem",
  height: "2rem",
  width: "15rem",
  padding: "0.5rem",
  border: "none",
  borderRadius: "3px",
  boxShadow:
    "inset 2px 2px 2px rgba(0, 0, 0, 0.2)," +
    "inset -2px -2px 2px rgba(255, 255, 255, 0.2);",
  backgroundColor: theme.white,
  color: theme.main,
}));

Select.defaultProps = { theme };

export const Label = styled.div({
  display: "inline-flex",
  alignItems: "center",
  margin: "0.5rem",
  height: "2rem",
  width: "5rem",
});

export const Button = styled.button(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0.5rem",
  height: "2rem",
  width: "15rem",
  border: "none",
  borderRadius: "3px",
  backgroundColor: theme.white,
  color: theme.main,
}));

Button.defaultProps = { theme };
