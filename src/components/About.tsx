import { forwardRef } from "react";
import styled from "styled-components";

const StyledAbout = styled.div`
  padding: 2rem 3rem;
  margin: 2rem auto;

  @media (min-width: 481px) {
    max-width: 75%;
    margin: 4rem auto;
    padding: 4rem 3rem;
  }

  @media (min-width: 1024px) {
    max-width: min(60%, 768px);
  }
`;

const Heading = styled.h2`
  font-size: 1.75rem;
  font-family: "League Spartan";
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 481px) {
    font-size: 2.25rem;
  }
`;

const Content = styled.p`
  font-size: 1rem;
  font-family: "League Spartan";

  @media (min-width: 481px) {
    font-size: 1.25rem;
  }
`;

const About = forwardRef<HTMLDivElement>((_, ref) => (
  <StyledAbout ref={ref}>
    <Heading>About me</Heading>
    <Content>
      I'm a CompSci undergrad, spending copious amounts of time tinkering with
      my configs and making new projects. Web dev is where I feel most
      comfortable, but I'm also exploring other areas, all the while actively
      seeking my first professional opportunity as a software developer to begin
      my career in the industry.
    </Content>
  </StyledAbout>
));

export default About;
