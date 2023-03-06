import styled from "styled-components";

const StyledSocialMedia = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const Link = styled.a`
  display: inline-block;
  padding: 0.5rem;
  border-radius: 1rem;
  transition: background-color 250ms ease-out;

  &:hover {
    background-color: hsl(0 0% 100% / 50%);
  }
`;

const LinkImage = styled.img`
  display: block;
  max-width: 5rem;
  height: auto;
`;

const SocialMedia: React.FC = () => {
  return (
    <StyledSocialMedia>
      <Link href="https://github.com/oxtna">
        <LinkImage src="img/GitHub-logo.png" alt="GitHub" />
      </Link>
      <Link href="https://linkedin.com/in/rafal-kajomof">
        <LinkImage src="img/LinkedIn-logo.png" alt="LinkedIn" />
      </Link>
    </StyledSocialMedia>
  );
};

export default SocialMedia;
