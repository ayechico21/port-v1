import React from "react";
import styled from "styled-components";
import Link from "../Link";
function Navbar() {
  return (
    <Wrapper>
      <UserName>
        <Link href="#">@ayechico21</Link>
      </UserName>
      <LinkList>
        <li>
          <Link href="#">Projects</Link>
        </li>
        <li>
          <Link href="#">Hire Me!</Link>
        </li>
      </LinkList>
    </Wrapper>
  );
}
const Wrapper = styled.nav`
  display: flex;
  align-items: baseline;
`;
const UserName = styled.h1`
  margin-right: auto;
`;

const LinkList = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
`;

export default Navbar;
