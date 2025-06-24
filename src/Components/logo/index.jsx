import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.h2`
  font-size: ${(props) => props.size || "1.6rem"};
  color: ${(props) => props.color || "#7b68ee"};
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.5px;
  font-family: "Poppins", sans-serif;
`;

const Title = styled.span`
  font-weight: 700;
`;

const Subtitle = styled.span`
  font-weight: 300;
  font-style: italic;
  margin-left: 5px;
  font-size: 0.9em;
`;

const Dot = styled.span`
  color: #c2b6dd;
  margin: 0 2px;
`;

export default function Logo({ size, color }) {
  return (
    <LogoContainer>
      <LogoText size={size} color={color}>
        <Title>
          Rafael
        </Title>
        <Subtitle>Richard</Subtitle>
      </LogoText>
    </LogoContainer>
  );
}
