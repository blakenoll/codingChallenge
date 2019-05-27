import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFound = ({ className }) => (
  <div className={className}>
    <h1>404 Page not found</h1>
    <Link to="/">Home</Link>
  </div>
);

const StyledNotFound = styled(NotFound)`
  text-align: center;
  h1 {
    font-size: 2rem:
  }
`;

export default StyledNotFound;
