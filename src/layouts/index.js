import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import GranimCanvas from "react-granim-canvas";
import styled from "styled-components";
import "../assets/css/reset.css";
import "../assets/css/global.css";

const SiteWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 100;
  min-height: 100vh;
  color: #fff;
`;

const SiteContainer = styled.div`
  max-width: 700px;
  text-align: center;
  padding: 25px;
  margin: 0 auto;
`;

class TemplateWrapper extends Component {
  bgCanvasState() {
    return {
      "default-state": {
        gradients: [
          ["#000428", "#004e92"],
          ["#004e92", "#00a0bd"],
          ["#004e92", "#000428"],
          ["#00a0bd", "#004e92"]
          // ["#00a0bd", "#00CDAC"],
          // ["#002228", "#009260"],
          // ["#42275a", "#734b6d"],
          // ["#B24592", "#F15F79"]
        ],
        transitionSpeed: 5000
      }
    };
  }

  bgCanvasStyle() {
    return {
      position: "absolute",
      zIndex: -1,
      display: "block",
      width: "100%",
      height: "100%",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
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
        <GranimCanvas
          states={this.bgCanvasState()}
          style={this.bgCanvasStyle()}
        />
        <SiteWrapper>
          <SiteContainer>{children()}</SiteContainer>
        </SiteWrapper>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
