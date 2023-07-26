import React from "react";
import { styled } from "styled-components";
import LinkButton from "../LinkButton";

function Intro() {
  return (
    <Wrapper>
      <main>
        <p>Hey !!</p>
        <p>I&apos;m Maneesh Cheema</p>
        <Job>Frontend Developer</Job>
        <LinkButton href="#">Resume</LinkButton>
      </main>
      <aside></aside>
    </Wrapper>
  );
}
const Wrapper = styled.article`
  display: flex;
`;

const Job = styled.p`
  font-size: 1.3rem;
  margin-bottom: 10px;
`;
export default Intro;
