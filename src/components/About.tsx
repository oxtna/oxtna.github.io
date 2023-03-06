import { forwardRef } from "react";
import styled from "styled-components";

const StyledAbout = styled.div`
  margin: auto;
  padding: 3rem 3rem 0;
  margin: 0 auto 3rem;
`;

const Heading = styled.h2`
  font-size: 1.75rem;
  font-family: "League Spartan";
  text-align: center;
  margin-bottom: 1rem;
`;

const Content = styled.p`
  font-size: 1rem;
  font-family: "League Spartan";
`;

const About = forwardRef<HTMLDivElement>((_, ref) => (
  <StyledAbout ref={ref}>
    <Heading>About me</Heading>
    <Content>
      I'm a CompSci student, spending copious amounts of time tinkering with my
      configs and making new projects. Web dev is where I feel most comfortable,
      but I'm also exploring other areas, all the while actively seeking my
      first professional opportunity as a software developer to begin my career
      in the industry.
    </Content>
  </StyledAbout>
));

export default About;
