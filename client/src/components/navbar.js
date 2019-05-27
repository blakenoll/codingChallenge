import React from "react";
import styled from "styled-components";

const Navbar = ({ className, user }) => (
  <nav className={className}>
    <h1>Latest Tweets: {user}</h1>
  </nav>
);

const StyledNavbar = styled(Navbar)`
  background: #00b0ad;
  h1 {
    font-size: 1.5rem;
    color: #fff;
    text-align: center;
    margin: 0;
    padding: 10px 0;
  }
`;

export default StyledNavbar;
