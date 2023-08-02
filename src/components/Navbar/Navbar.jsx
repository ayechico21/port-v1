import React from "react";
import styled from "styled-components";
import Link from "../Link";
import Highlight from "../Highlight";
function Navbar() {
  return (
    <Wrapper>
      <UserName>
        <Link href="#">
          @<Highlight>ayeChico21</Highlight>
        </Link>
      </UserName>
      <LinkList>
        <li>
          <Link href="#">Projects</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </LinkList>
    </Wrapper>
  );
}
const Wrapper = styled.nav`
  display: flex;
  align-items: baseline;
  margin-bottom: 20px;
  font-size: 1.3rem;
`;
const UserName = styled.h1`
  margin-right: auto;
  font-size: 2rem;
`;

const LinkList = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
`;

export default Navbar;
