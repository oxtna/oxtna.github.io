import { useEffect, useState } from "react";
import styled from "styled-components";
import Repository from "../interfaces/Repository";
import ProjectCard from "./ProjectCard";

interface Props {
  username: string;
  topics?: string | Array<string>;
}

const StyledProjects = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1.5rem 3rem 4rem;
  margin: 0;
  background: linear-gradient(40deg, hsl(340 70% 50%), hsl(35 85% 50%));
  background-size: 500% 100%;
  animation: gradient-flow 20s ease infinite;

  @media (min-width: 481px) {
    padding: 2rem 3rem 6rem;
  }
`;

const Heading = styled.h2`
  font-family: "League Spartan";
  font-size: 1.75rem;
  text-align: center;
  padding: 0.5rem 0;

  @media (min-width: 481px) {
    font-size: 2.25rem;
  }
`;

const Projects: React.FC<Props> = ({ username, topics: projectTopics }) => {
  const [repositories, setRepositories] = useState<Array<Repository>>([]);
  useEffect(() => {
    const getProjects = async () => {
      const data = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      let repos: Array<Repository> = await data.json();
      if (projectTopics !== undefined) {
        if (typeof projectTopics === "string") {
          repos = repos.filter((repo) => repo.topics.includes(projectTopics));
        } else {
          repos = repos.filter((repo) =>
            projectTopics.some((topic) => repo.topics.includes(topic))
          );
        }
      }
      setRepositories(repos);
    };

    getProjects().catch(console.error);
  }, [username, projectTopics]);

  return (
    <StyledProjects>
      <Heading>My projects</Heading>
      {repositories.map((repo) => (
        <ProjectCard
          key={repo.id}
          name={repo.name}
          description={repo.description}
          url={repo.html_url}
        />
      ))}
    </StyledProjects>
  );
};

export default Projects;
