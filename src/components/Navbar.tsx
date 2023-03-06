import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  gap: 1rem;
`;

const Navbar: React.FC = () => {
  return <StyledNavbar></StyledNavbar>;
};

export default Navbar;
