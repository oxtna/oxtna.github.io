import { useRef } from "react";
import styled from "styled-components";
import Technology from "../interfaces/Technology";
import TechStackItem from "./TechStackItem";

const StyledTechStack = styled.div`
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
  font-family: "League Spartan";
  font-size: 1.75rem;
  text-align: center;
  margin-bottom: 1.5rem;

  @media (min-width: 481px) {
    font-size: 2.25rem;
  }
`;

const TechStackItemContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  row-gap: 1rem;
  column-gap: 2rem;
`;

const TechStack: React.FC = () => {
  const technologies = useRef<Array<Technology>>([
    { name: "Javascript", image: "img/javascript.png" },
    { name: "Typescript", image: "img/typescript.png" },
    { name: "React", image: "img/react.png" },
    { name: "Lua", image: "img/lua.png" },
    { name: "Python", image: "img/python.png" },
    { name: "Django", image: "img/django.png" },
    { name: "FastAPI", image: "img/fastapi.png" },
    { name: "C++", image: "img/c++.png" },
    { name: "C#", image: "img/c_sharp.png" },
    { name: "Docker", image: "img/docker.png" },
    { name: "SQL", image: "img/sql.png" },
    { name: "Git", image: "img/git.png" },
  ]);

  return (
    <StyledTechStack>
      <Heading>Technologies I know</Heading>
      <TechStackItemContainer>
        {technologies.current.map((tech, i) => (
          <TechStackItem name={tech.name} image={tech.image} key={i} />
        ))}
      </TechStackItemContainer>
    </StyledTechStack>
  );
};

export default TechStack;
