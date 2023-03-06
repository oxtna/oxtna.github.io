import styled from "styled-components";
import Header from "./Header";
import Profile from "./Profile";
import { ReactComponent as ArrowDown } from "./assets/arrow-down.svg";

interface Props {
  onScrollClick: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledLanding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background: linear-gradient(hsl(0 0% 0% / 0%), hsl(0 0% 0% / 100%)),
    url("img/NASA-Japan-at-night.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const ScrollButton = styled.button`
  display: block;
  border: none;
  padding: 0;
  width: 4rem;
  margin-bottom: 2rem;
  background-color: transparent;
  animation: float 4s ease-in-out infinite;
  cursor: pointer;
`;

const Landing: React.FC<Props> = ({ onScrollClick }) => {
  return (
    <StyledLanding>
      <Header />
      <Profile />
      <ScrollButton onClick={onScrollClick}>
        <ArrowDown style={{ width: 40 }} />
      </ScrollButton>
    </StyledLanding>
  );
};

export default Landing;
