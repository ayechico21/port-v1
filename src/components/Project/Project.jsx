import React from "react";
import LinkButton from "../LinkButton";
import { styled } from "styled-components";
import { COLORS } from "../../constants";

function Project({ name, description, links, imgsrc }) {
  console.log(imgsrc);
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={imgsrc} alt="" />
      </ImageWrapper>
      <Description>
        <Name>{name}</Name>
        <Info>{description}</Info>
      </Description>
      <LinkBar>
        {Object.keys(links).map((key) => (
          <LinkButton key={key} href={links[key]}>
            {key}
          </LinkButton>
        ))}
      </LinkBar>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 20px;
`;
const ImageWrapper = styled.div`
  height: 300px;
  width: 100%;
`;
const Image = styled.img`
  /**object fit requires a defined height and width of image */
  height: 100%;
  width: 100%;

  object-fit: cover; /**fill the image container with image */
`;
const Description = styled.div`
  padding: 20px;
  flex-grow: 1; /**fill remaining space in project wrapper */

  /**for name and info */
  display: flex;
  flex-direction: column;
`;
const LinkBar = styled.div`
  /**position links */
  display: flex;
  width: 100%; /**fill the containter horizontally */
  justify-content: space-evenly;

  margin-top: auto; /**make linkbar stick to bottom on container */
`;
const Name = styled.div`
  color: ${COLORS.plum};
`;
const Info = styled.p`
  flex-grow: 1; /**Fill the remaining space in description */

  /**center text in p */
  display: flex;
  align-items: center;
`;
export default Project;
