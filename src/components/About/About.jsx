import React from "react";
import { styled } from "styled-components";
import ImageWrapper from "../ImageWrapper";
import MaxWidthContainer from "../MaxWidthContainer";
import LinkButton from "../LinkButton";
import Highlight from "../Highlight";
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </LinkButton>
            <LinkButton href="https://www.linkedin.com/in/ayechico21/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </LinkButton>
            <LinkButton href="https://X.com/ayechico21">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
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
