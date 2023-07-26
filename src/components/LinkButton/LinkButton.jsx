import React from "react";
import { styled } from "styled-components";
import { COLORS } from "../../constants";

function LinkButton(props) {
  return <Wrapper {...props} />;
}
const Wrapper = styled.a`
  color: ${COLORS.white};
  background-color: ${COLORS.plum};
  text-decoration: none;
  padding: 5px 10px;
`;
export default LinkButton;
