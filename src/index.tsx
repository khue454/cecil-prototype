import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import heading from "./heading.module.css";
import content from "./content.module.scss";
import car from "./images/car.jpg";
import svg from "./images/logo.svg";
import test10kb from "./images/test10kb.png";

const App = () => (
  <>
    <Heading />
    <Content />
  </>
);

const Heading = () => (
  <h1 className={heading.heading}>My React and TypeScript App</h1>
);

const Content = () => (
  <div className={content.container} style={{backgroundImage: `url(${car})`}}>
    {/* <a href={pdf}>ahihi</a> */}
    <img src={svg} className={content.car} />
    <img src={test10kb} className={content.car} />
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
