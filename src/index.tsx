import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";

// store
import configureAppStore from "./configureStore";
import App from "./App";

const store = configureAppStore();

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);