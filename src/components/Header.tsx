import styled from "styled-components";
import Navbar from "./Navbar";

const StyledHeader = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  position: relative;
  padding: 0.25rem;
  margin-top: 0.5rem;
  font-family: "League Spartan";

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(40deg, hsl(340 70% 50%), hsl(35 85% 50%));
    background-size: 500% 100%;
    animation: gradient-flow 20s ease infinite;
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <h1>oxtna.github.io</h1>
      <Navbar></Navbar>
    </StyledHeader>
  );
};

export default Header;
