import React from "react";
import * as PropTypes from "prop-types";
import { Container } from "./styles";
import { colors } from "/theme";

function Button({ color, onClick, children }) {
  return (
    <Container color={color} onClick={onClick}>
      {children}
    </Container>
  );
}

Button.defaultProps = {
  color: "primary",
  onClick: null,
  children: null
};

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default Button;
