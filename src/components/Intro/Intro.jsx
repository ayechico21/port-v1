import React from "react";
import { styled } from "styled-components";
import LinkButton from "../LinkButton";
import ImageWrapper from "../ImageWrapper";
import Highlight from "../Highlight";

function Intro() {
  return (
    <Wrapper>
      <main>
        <Name>
          <p>Hey 👋</p>
          <p>
            I&apos;m <Highlight>Maneesh Cheema</Highlight>
          </p>
        </Name>
        <Text>
          Frontend Developer <br /> INDIA 🇮🇳
        </Text>
        <LinkButton href="#">Resume</LinkButton>
      </main>
      <ImageWrapper
        imgsrc="src/assets/OpenPeepsLaptop.png"
        imgalt="Image with laptop"
      ></ImageWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.article`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
`;

const Name = styled.div`
  font-size: 2rem;
  line-height: 1.2;
  margin: 30px 0px;
`;
const Text = styled.p`
  font-size: 1.3rem;
  line-height: 1.2;
  margin-bottom: 10px;
  margin: 30px 0px;
`;
export default Intro;
