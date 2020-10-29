import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./scss/index.scss";

// ROUTER
import { BrowserRouter } from "react-router-dom";
import RouterView from "./router";

// REDUX & THUNK
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";
import thunk from "redux-thunk";

// API MIDDLEWARE
import api from "./middleware";

// COMPONENTS
import Layout from "./views/Layout";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ api }))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <RouterView />
        </Layout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
