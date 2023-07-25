import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import ThemeWrapper from "../ThemeWrapper";
import MaxWidthContainer from "../MaxWidthContainer";
import Intro from "../Intro";

function Header() {
  return (
    <ThemeWrapper>
      <MaxWidthContainer>
        <Wrapper>
          <Navbar />
          <Intro />
        </Wrapper>
      </MaxWidthContainer>
    </ThemeWrapper>
  );
}

const Wrapper = styled.div``;

export default Header;
