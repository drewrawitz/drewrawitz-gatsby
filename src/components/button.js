import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { em } from "polished";

const StyledButton = styled.button`
  display: inline-block;
  padding: ${em("12px")} ${em("35px")};
  border: ${em("2px")} solid #fff;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  ${props =>
    props.size === "small" &&
    `
  font-size: 0.8em;
`} ${props =>
      props.size === "medium" &&
      `
  font-size: 1em;
`} ${props =>
      props.size === "large" &&
      `
  font-size: 1.2em;
`} ${props =>
      props.disabled &&
      `
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
`} ${props =>
      props.full &&
      `
  width: 100%;
  text-align: center;
`};
`;

const StyledLink = StyledButton.withComponent("a").extend`
    text-decoration: none;
    color: inherit;
`;

const Button = props => {
  const ButtonWrapper = props.href ? StyledLink : StyledButton;

  return (
    <ButtonWrapper {...props} className="hvr-bounce-to-right">
      {props.children}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  disabled: false,
  full: false,
  size: "medium"
};

export default Button;
