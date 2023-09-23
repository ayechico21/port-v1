import React from "react";
import { styled } from "styled-components";

function ImageWrapper({ imgsrc, imgalt, ...rest }) {
  console.log(imgsrc);
  return (
    <Wrapper {...rest}>
      <img src={imgsrc} alt={imgalt}></img>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  max-width: 250px; /**clamp img size */
`;

export default ImageWrapper;
