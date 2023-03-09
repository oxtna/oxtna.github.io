import styled from "styled-components";
import SocialMedia from "./SocialMedia";

const StyledProfile = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 3rem;
  width: 16rem;

  @media (min-width: 481px) {
    width: 20rem;
    gap: 4rem;
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

const ProfileImage = styled.img`
  width: 80%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 0 4px hsl(0 0% 50%);
`;

const Profile: React.FC = () => {
  return (
    <StyledProfile>
      <ProfileImage src="img/profile-picture.jpg" alt="oxtna" />
      <SocialMedia />
    </StyledProfile>
  );
};

export default Profile;
