import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import reportWebVitals from "./reportWebVitals";
import * as components from "./components";
import { styles } from "./lib";

const { Config, Layout } = components;
const { size, GlobalStyle, Header, Button, FlexBox } = styles;

const Footer = styled(FlexBox)({ margin: "1rem 0 2rem 0" });
const ThickButton = styled(Button)({
  ...size.shortish,
  fontWeight: "bold",
});

export const App = () => {
  const configEl = { state: {} };

  return (
    <Layout>
      <Header>Hello Stock World 🙊</Header>
      <Config customRef={configEl} name={"primary"} />
      <Footer>
        <ThickButton onClick={() => console.log(configEl)}>
          Start Watching
        </ThickButton>
      </Footer>
    </Layout>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
