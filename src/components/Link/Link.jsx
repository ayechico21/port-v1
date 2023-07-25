import React from "react";
import { styled } from "styled-components";
import { COLORS } from "../../constants";

function Link(props) {
  return <Wrapper {...props} />;
}
const Wrapper = styled.a`
  text-decoration: none;
  color: ${COLORS.white};
`;
export default Link;
