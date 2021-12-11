import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "normalize.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    overflow-y: scroll;
  }
`;

ReactDOM.render(
    <Router>
        <GlobalStyles />
        <App />
    </Router>,
    document.getElementById("root"),
);
