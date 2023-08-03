import React from "react";
import { styled } from "styled-components";
import LinkButton from "../LinkButton";
import ImageWrapper from "../ImageWrapper";
import Highlight from "../Highlight";
import OpenPeepsLaptop from "../../assets/OpenPeepsLaptop.png";
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
        <LinkButton href="https://drive.google.com/drive/folders/1wLR9yNobjXPzZEU1r6WvP2V1wiwUPJJc?usp=sharing">
          Resume
        </LinkButton>
      </main>
      <ImageWrapper
        imgsrc={OpenPeepsLaptop}
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
