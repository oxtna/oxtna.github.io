import styled from "styled-components";
import Attributions from "./Attributions";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  position: relative;
  background-color: white;
  color: black;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(40deg, hsl(340 70% 50%), hsl(35 85% 50%));
    background-size: 500% 100%;
    animation: gradient-flow 20s ease infinite;
  }

  @media (min-width: 481px) {
    justify-content: space-evenly;
  }
`;

const Copyright = styled.span`
  font-size: 0.8em;
  color: gray;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Copyright>© 2025 Rafał Kajomof</Copyright>
      <Attributions />
    </StyledFooter>
  );
};

export default Footer;
