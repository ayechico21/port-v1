import React from "react";
import { styled } from "styled-components";
import { COLORS } from "../../constants";

function LinkButton({ href, ...rest }) {
  return <Wrapper href={href} {...rest} />;
}
const Wrapper = styled.a`
  color: ${COLORS.white};
  background-color: ${COLORS.plum};
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;

  &::first-letter {
    text-transform: uppercase;
  }
`;
export default LinkButton;
