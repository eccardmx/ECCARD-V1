import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
import Routes from "./containers/Routes";
import { BrowserRouter } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
