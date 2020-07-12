import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./scss/app.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import store from "./redux/store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);

serviceWorker.unregister();
