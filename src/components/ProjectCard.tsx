import styled from "styled-components";

interface Props {
  readonly name: string;
  readonly description: string;
  readonly url: string;
}

const StyledProjectCard = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 2fr 3fr;
  align-items: center;
  backdrop-filter: blur(50px) saturate(150%);
  background: hsl(0 0% 100% / 25%);
  border-radius: 1rem;
  padding-left: 1.5rem;
  overflow: hidden;
  font-family: "League Spartan";

  @media (min-width: 481px) {
    width: 75%;
  }

  @media (min-width: 769px) {
    // small laptops
  }

  @media (min-width: 1025px) {
    // large laptops
  }

  @media (pointer: fine) {
    // mouse only
    // parallax
  }
`;

const Heading = styled.a`
  font-size: 1.1rem;
  letter-spacing: 1px;
  white-space: nowrap;
  color: white;
  text-decoration: none;
  padding-top: 0.5rem;

  @media (min-width: 481px) {
    font-size: 1.5rem;
    padding-top: 0.75rem;
  }

  @media (min-width: 769px) {
    // small laptops
  }

  @media (min-width: 1025px) {
    // large laptops
  }

  @media (pointer: fine) {
    // mouse only
    // parallax
  }
`;

const Description = styled.p`
  font-size: 0.8rem;

  @media (min-width: 481px) {
    font-size: 1rem;
  }

  @media (min-width: 769px) {
    // small laptops
  }

  @media (min-width: 1025px) {
    // large laptops
  }

  @media (pointer: fine) {
    // mouse only
    // parallax
  }
`;

const LinkButton = styled.a`
  grid-row: 1 / 3;
  grid-column: 2 / 3;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(
      to right,
      hsl(0 0% 100% / 0%) 50%,
      hsl(0 0% 100% / 20%) 100%
    );
    background-size: 200%;
    background-position: 0% 0%;
    width: 100%;
    height: 100%;
    transition: background-position 350ms ease;
  }

  &::after {
    content: "➤";
    font-size: 2rem;
    height: 1.25em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 30%;
    color: white;
    transition: right 350ms ease-out;
  }

  &:hover::before {
    background-position: 100% 100%;
  }

  &:hover::after {
    right: 15%;
  }

  @media (min-width: 481px) {
    &::after {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 769px) {
    // small laptops
  }

  @media (min-width: 1025px) {
    // large laptops
  }

  @media (pointer: fine) {
    // mouse only
    // parallax
  }
`;

const ProjectCard: React.FC<Props> = ({ name, description, url }) => {
  return (
    <StyledProjectCard>
      <Heading href={url}>{name}</Heading>
      <Description>{description}</Description>
      <LinkButton href={url} />
    </StyledProjectCard>
  );
};

export default ProjectCard;
