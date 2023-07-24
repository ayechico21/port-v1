import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import ThemeWrapper from "../ThemeWrapper";
import MaxWidthContainer from "../MaxWidthContainer";

function Header() {
  return (
    <ThemeWrapper>
      <MaxWidthContainer>
        <Wrapper>
          <Navbar></Navbar>
        </Wrapper>
      </MaxWidthContainer>
    </ThemeWrapper>
  );
}

const Wrapper = styled.div``;

export default Header;
