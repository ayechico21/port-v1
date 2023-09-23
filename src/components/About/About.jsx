import React from "react";
import { styled } from "styled-components";
import ImageWrapper from "../ImageWrapper";
import MaxWidthContainer from "../MaxWidthContainer";
import LinkButton from "../LinkButton";
import Highlight from "../Highlight";
import { github, linkedin, twitter } from "../../assets";
function About() {
  return (
    <MaxWidthContainer>
      <Wrapper>
        <ImageWrapper
          imgsrc={new URL("/images/BigShoesTorso.png", import.meta.url).href}
          imgalt="character image"
        />
        <Main>
          <h2>
            About <Highlight>ME</Highlight>
          </h2>
          <p>
            A frontend web Developer well versed in JavaScript and web
            technologies like React, CSS.
            <br />
            Known to SQL and noSQL databases as well
          </p>
          <p>Currently building in Next.js</p>
          <h4>
            Connect with <Highlight>me</Highlight>
          </h4>
          <LinkBar>
            <LinkButton href="https://github.com/ayechico21">
              <ImageWrapper imgsrc={github} imgalt="github logo" />
            </LinkButton>
            <LinkButton href="https://www.linkedin.com/in/ayechico21/">
              <ImageWrapper imgsrc={linkedin} imgalt="linkedinlogo" />
            </LinkButton>
            <LinkButton href="https://X.com/ayechico21">
              <ImageWrapper imgsrc={twitter} imgalt="twitter logo" />
            </LinkButton>
          </LinkBar>
        </Main>
      </Wrapper>
    </MaxWidthContainer>
  );
}
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const LinkBar = styled.article`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;
export default About;
