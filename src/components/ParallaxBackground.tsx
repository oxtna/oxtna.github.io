import styled from "styled-components";

const StyledParallax = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  background-image: linear-gradient(hsl(0 0% 0% / 0%), hsl(0 0% 0% / 100%)),
    url("img/NASA-Japan-at-night.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  transform: translateZ(-10px) scale(2);
`;

const ParallaxBackground: React.FC = () => {
  return <StyledParallax />;
};

export default ParallaxBackground;
