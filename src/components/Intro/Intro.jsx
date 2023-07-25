import React from "react";
import { styled } from "styled-components";

function Intro() {
  return (
    <Wrapper>
      <main>
        <p>Hi!!</p>
        <p>I&apos;m Maneesh Cheema</p>
        <p>Frontend Developer</p>
        <button>
          <a href="#">Resume</a>
        </button>
      </main>
      <aside></aside>
    </Wrapper>
  );
}
const Wrapper = styled.article`
  display: flex;
`;
export default Intro;
