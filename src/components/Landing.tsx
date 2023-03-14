import styled from "styled-components";
import Header from "./Header";
import Profile from "./Profile";
import { ReactComponent as ArrowDown } from "./assets/arrow-down.svg";

interface Props {
  onScrollButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledLanding = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  min-height: 600px;
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

const Landing: React.FC<Props> = ({ onScrollButtonClick }) => {
  return (
    <StyledLanding>
      <Header />
      <Profile />
      <ScrollButton onClick={onScrollButtonClick}>
        <ArrowDown style={{ width: 40 }} />
      </ScrollButton>
    </StyledLanding>
  );
};

export default Landing;
