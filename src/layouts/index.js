import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import GranimCanvas from "react-granim-canvas";
import styled from "styled-components";
import "./reset.css";

const BackgroundWrapper = styled.canvas`
  position: absolute;
  z-index: -1;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

class TemplateWrapper extends Component {
  bgCanvasState() {
    return {
      "default-state": {
        gradients: [
          ["#000428", "#004e92"],
          ["#00a0bd", "#00CDAC"],
          ["#002228", "#009260"],
          ["#42275a", "#734b6d"],
          ["#B24592", "#F15F79"]
        ],
        transitionSpeed: 5000
      }
    };
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        <GranimCanvas states={this.bgCanvasState()} />
        <div>{children()}</div>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
