import styled from "styled-components";
import SocialMedia from "./SocialMedia";

const StyledProfile = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 3rem;
  width: 16rem;
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
