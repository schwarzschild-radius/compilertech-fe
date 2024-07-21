import React from "react";
import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../styles/GlobalStyle";

const TravelAssistance: React.FC = () => {
  return (
    <Section id="sponsors">
      <Title>Travel Assistance</Title>
      <Description>
        We are providing travel assistance to current undergraduate and graduate students who need financial support to attend the workshop.
        All students are encouraged to apply. Note that
        the travel assistance will be granted for student attendees on a case by
        case basis. Please email{" "}
        <Email href="mailto:support@compilertech.org?subject=Request%20for%20travel%20assistance">
          support@compilertech.org
        </Email> with a legitimate reason for requesting travel assistance.
      </Description>
    </Section>
  );
};

const Section = styled.section`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: auto;
  margin-top: 7.5rem;
  padding: 0 11.75rem;
  @media (min-width: ${MOBILE_BREAKPOINT}) and (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0 4rem;
    margin-top: 5rem;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 90%;
    padding: 0;
    margin-top: 3.75rem;
  }
`;

const Title = styled.p`
  font-family: "Bebas Neue", sans-serif;
  font-size: clamp(38px, 5vw, 64px);
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 3.75rem;
  text-align: left;
  color: ${({ theme }) => theme.primary};
  @media (max-width: ${TABLET_BREAKPOINT}) {
    margin-bottom: 0.5rem;
  }
`;

const Description = styled.p`
  font-family: "Satoshi", sans-serif;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: justify;
  color: ${({ theme }) => theme.lightText};
  text-align: center;
  margin-bottom: 3.75rem;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

const Email = styled.a`
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  filter: brightness(${({ theme }) => (theme.text === "#FFF" ? 1.5 : 1.1)});
  font-decoration: none;
`;

export default TravelAssistance;