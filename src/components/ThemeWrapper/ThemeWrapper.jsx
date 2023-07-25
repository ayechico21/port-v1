import React from "react";
import { styled } from "styled-components";
import { COLORS } from "../../constants";

function ThemeWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
`;

export default ThemeWrapper;
