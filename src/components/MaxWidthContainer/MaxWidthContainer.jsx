import React from "react";
import { styled } from "styled-components";

function MaxWidthContainer({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
const Wrapper = styled.div`
  max-width: 1200px; /**Content size */
  margin: 0 auto; /**center content */
`;
export default MaxWidthContainer;
