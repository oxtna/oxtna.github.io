import styled from "styled-components";

interface Props {
  readonly name: string;
  readonly image?: string;
}

const StyledTechStackItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "League Spartan";
  font-size: 0.8rem;

  @media (min-width: 481px) {
    font-size: 1rem;
  }
`;

const TechLogo = styled.img`
  width: 64px;
  height: auto;

  @media (min-width: 481px) {
    width: 96px;
  }
`;

const TechStackItem: React.FC<Props> = ({ name, image }) => {
  return (
    <StyledTechStackItem>
      {image && <TechLogo src={image} alt={name} />}
      <h3>{name}</h3>
    </StyledTechStackItem>
  );
};

export default TechStackItem;
