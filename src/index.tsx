import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import * as components from "./components";
import { styles } from "./lib";

const { Config, Layout } = components;
const { Header, GlobalStyle, Button, FlexBox } = styles;

export const App = () => {
  return (
    <Layout>
      <Header>Hello Stock World 🙊</Header>
      <Config name={"primary"} />
      <FlexBox>
        <Button>Start Watching</Button>
      </FlexBox>
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
