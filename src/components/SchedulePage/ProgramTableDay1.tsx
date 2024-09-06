import styled from "styled-components";
import { dayOneData } from "./Data/DayOne";

// Define the interface for props
interface StyledProps {
  bgColor: string;
}

function ProgramTable() {
  return (
    <Wrapper>
      {dayOneData.sessions.map((sessionData, index) => (
        <Session key={index} bgColor={sessionData.session.bgColor}>
          <SessionHeader>
            <SessionTime>{sessionData.session.sessionDuration}</SessionTime>
            <SessionType>{sessionData.session.sessionNumber}</SessionType>
            <SessionCategory>{sessionData.session.sessionType}</SessionCategory>
          </SessionHeader>

          {sessionData.introduction && (
            <Section bgColor={sessionData.introduction.bgcolor}>
              <Duration>{sessionData.introduction.duration}</Duration>
              <SectionHeading>
                {sessionData.introduction.heading}
              </SectionHeading>
              <Mentor>
                {sessionData.introduction.mentor},{" "}
                {sessionData.introduction.inst}
              </Mentor>
            </Section>
          )}

          {sessionData.keyNote &&
            sessionData.keyNote.map((keyNote, keyIndex) => (
              <Section key={keyIndex} bgColor={keyNote.bgcolor}>
                <Duration>{keyNote.duration}</Duration>
                <SectionHeading>{keyNote.heading}</SectionHeading>
                <Mentor>
                  {keyNote.mentor}, {keyNote.inst}
                </Mentor>
              </Section>
            ))}

          {sessionData.lunch && (
            <Section bgColor={sessionData.lunch.bgcolor}>
              <Duration>{sessionData.lunch.duration}</Duration>
              <SectionHeading>{sessionData.lunch.heading}</SectionHeading>
              <Description>{sessionData.lunch.description}</Description>
            </Section>
          )}
        </Session>
      ))}
    </Wrapper>
  );
}

export default ProgramTable;

// Apply StyledProps interface here to inform TypeScript of the expected prop types
const Session = styled.div<StyledProps>`
  width: 100%;
  background-color: ${(props) => props.bgColor};
  margin-bottom: 10px;
  padding: 10px;
  border: 5px solid "#000";
  border-radius: 5px;
`;

const Section = styled.div<StyledProps>`
  background-color: ${(props) => props.bgColor};
  margin-top: 10px;
  padding: 5px;
  border-radius: 3px;
`;

// Other styled-components without props
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  padding: 20px;
`;

const SessionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

const SessionTime = styled.span`
  flex: 1;
`;

const SessionType = styled.span`
  flex: 1;
  text-align: center;
`;

const SessionCategory = styled.span`
  flex: 1;
  text-align: right;
`;

const Duration = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const SectionHeading = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const Mentor = styled.span`
  color: #555;
`;

const Description = styled.p`
  margin: 5px 0;
  color: #777;
  font-size: 0.9rem;
`;
