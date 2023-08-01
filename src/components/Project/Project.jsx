import React from "react";
import LinkButton from "../LinkButton";
import { styled } from "styled-components";
import ImageWrapper from "../ImageWrapper/ImageWrapper";

function Project({ name, description, links, imgsrc }) {
  return (
    <Wrapper>
      <ImageWrapper imgsrc={imgsrc} />
      <div>{name}</div>
      <div>{description}</div>
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
  padding: 10px 20px;
  border: 2px solid rgba(0, 0, 0, 0.2);
`;
const LinkBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
export default Project;
