import styled from "styled-components";

const StyledContact = styled.div`
  color: black;
  background-color: white;
  padding: 1.5rem 3rem 3rem;

  @media (min-width: 481px) {
    padding: 2rem 3rem 4.5rem;
  }
`;

const Heading = styled.h2`
  font-family: "League Spartan";
  width: max-content;
  margin: auto;
  font-size: 1.75rem;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 481px) {
    font-size: 2.25rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: auto;
  font-family: "League Spartan";

  @media (min-width: 481px) {
    font-size: 1.25rem;
    width: 75%;
  }

  @media (min-width: 1024px) {
    max-width: min(60%, 768px);
  }
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
