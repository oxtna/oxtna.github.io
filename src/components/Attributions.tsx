import styled from "styled-components";

const StyledAttributions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Attribution = styled.a`
  text-decoration: none;
  color: gray;
  font-size: 0.7rem;
  border-bottom: solid 1px gray;
  max-width: max-content;
`;

const Attributions: React.FC = () => {
  return (
    <StyledAttributions>
      <Attribution href="https://www.gnu.org/licenses/lgpl.html">
        Fabián Alexis, via Wikimedia Commons
      </Attribution>
      <Attribution href="https://icons8.com">Icons8, icon provider</Attribution>
    </StyledAttributions>
  );
};

export default Attributions;
