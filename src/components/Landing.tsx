import { useRef } from "react";
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
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  min-height: 600px;
  background-image: linear-gradient(hsl(0 0% 0% / 0%), hsl(0 0% 0% / 100%)),
    url("img/NASA-Japan-at-night.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  @media (pointer: fine) {
    background-size: cover, 120% auto;
    background-position: var(--pointer-position-x) var(--pointer-position-y);
  }
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
  const thisElement = useRef<HTMLDivElement>(null);

  const setCSSPointerPosition: React.MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    thisElement.current?.style.setProperty(
      "--pointer-position-x",
      `${(event.clientX / document.documentElement.clientWidth) * 100}%`
    );
    thisElement.current?.style.setProperty(
      "--pointer-position-y",
      `${(event.clientY / document.documentElement.clientHeight) * 50 + 25}%`
    );
  };

  return (
    <StyledLanding onMouseMove={setCSSPointerPosition} ref={thisElement}>
      <Header />
      <Profile />
      <ScrollButton onClick={onScrollClick}>
        <ArrowDown style={{ width: 40 }} />
      </ScrollButton>
    </StyledLanding>
  );
};

export default Landing;
