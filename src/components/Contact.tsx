import styled from "styled-components";

const StyledContact = styled.div`
  color: black;
  background-color: white;
  padding: 1rem 3rem 2rem;
`;

const Heading = styled.h2`
  font-family: "League Spartan";
  font-size: 1.75rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: "League Spartan";
`;

const ContactInfoItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-decoration: none;
  color: black;
`;

const Link = styled.a`
  text-decoration: none;
  color: gray;
  border-bottom: solid 1px gray;
`;

const Contact: React.FC = () => {
  return (
    <StyledContact>
      <Heading>Contact me</Heading>
      <ContactInfo>
        <ContactInfoItem>
          <span>via e-mail:</span>
          <Link href="mailto:kajomof.rafal@gmail.com">
            kajomof.rafal@gmail.com
          </Link>
        </ContactInfoItem>
        <ContactInfoItem>
          <span>on LinkedIn:</span>
          <Link href="https://linkedin.com/in/rafal-kajomof">
            /in/rafal-kajomof
          </Link>
        </ContactInfoItem>
      </ContactInfo>
    </StyledContact>
  );
};

export default Contact;
