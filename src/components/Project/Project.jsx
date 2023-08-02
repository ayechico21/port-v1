import React from "react";
import LinkButton from "../LinkButton";
import { styled } from "styled-components";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import { COLORS } from "../../constants";

function Project({ name, description, links, imgsrc }) {
  return (
    <Wrapper>
      <Image src={imgsrc} alt="" />
      <Description>
        <Name>{name}</Name>
        <div>{description}</div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 20px;
`;
const Image = styled.img`
  max-width: 400px;
`;
const Description = styled.div`
  padding: 20px;
`;
const LinkBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
const Name = styled.div`
  color: ${COLORS.plum};
`;
export default Project;
