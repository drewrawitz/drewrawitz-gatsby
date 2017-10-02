import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Granim from "granim";
import "./reset.css";

const granimInstance = new Granim({
  element: "#canvas-bg",
  name: "basic-gradient",
  direction: "left-right",
  opacity: [1, 1],
  isPausedWhenNotInView: true,
  states: {
    "default-state": {
      gradients: [
        ["#000428", "#004e92"],
        ["#00a0bd", "#00CDAC"],
        ["#002228", "#009260"],
        ["#42275a", "#734b6d"],
        ["#B24592", "#F15F79"]
      ]
    }
  }
});

granimInstance.play();

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <canvas id="canvas-bg" class="full-page-bg" />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
