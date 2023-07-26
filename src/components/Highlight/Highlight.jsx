import React from "react";
import { styled } from "styled-components";
import { COLORS } from "../../constants";

function Highlight(props) {
  return <Wrapper {...props} />;
}
const Wrapper = styled.span`
  color: ${COLORS.plum};
`;
export default Highlight;
