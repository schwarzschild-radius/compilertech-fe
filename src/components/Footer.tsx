// Footer.tsx
import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  const tracks = [
    {
      id: "classical-compiler",
      title: "Classical Compiler Techniques",
    },
    {
      id: "ai-ml",
      title: "AI/ML, DSLS",
    },
    {
      id: "security",
      title: "SECURITY",
    },
    {
      id: "web3-blockchain",
      title: "WEB3/Blockchain",
      description:
        "Compiler techniques for shaping the next generation of the Web",
    },
  ];
  return (
    <>
      <FooterContainer>
        <Section>
          <Title>COMPILER</Title>
          <Paragraph>
            The Compiler Technology Workshop organizing committee invites
            researchers, practitioners, and enthusiasts in the field of compiler
            technologies to submit presentation proposals for our upcoming
            workshop. This year's theme focuses on the cutting-edge advancements
            in compiler design, implementation, and optimization, and their
            impact on emerging software and hardware platforms.
          </Paragraph>
          <Copyright>©2024 Compiler</Copyright>
        </Section>
        <Links>
          <Section>
            <Title style={{ marginBottom: "10px" }}>Tracks</Title>
            <List>
              {tracks.map((track, index) => (
                <ListItem key={index}>
                  <a href={`#tracks-${track.id}`}>
                    {track.title.toLowerCase()}
                  </a>
                </ListItem>
              ))}
            </List>
          </Section>
          <Section>
            <Title style={{ marginBottom: "10px" }}>Social</Title>
            <List>
              <ListItem>
                <a href="https://LinkedIn.com" target="_blank">
                  LinkedIn
                </a>
              </ListItem>
              <ListItem>
                <a href="https://Twitter.com" target="_blank">
                  Twitter
                </a>
              </ListItem>
              <ListItem>
                <a href="https://WhatsApp.com" target="_blank">
                  WhatsApp
                </a>
              </ListItem>
            </List>
          </Section>
        </Links>
      </FooterContainer>
    </>
  );
};

const FooterContainer = styled.footer`
  background-color: #303134;
  margin-top: 3.75rem;
  color: white;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: flex-start;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 60px 120px;
    h3 {
      margin: 0;
    }
  }
`;

const Section = styled.div`
  flex: 1;
  margin: 0 20px;
`;

const Title = styled.h3`
  margin: 10px 0;
  font-family: Bebas Neue;
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0.04em;
  text-align: left;
`;

const Paragraph = styled.p`
  margin: 0 0 20px 0;
  line-height: 1.5;
  color: #cccccc;
  text-align: justify;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #cccccc;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  text-align: left;
  a {
    color: inherit;
    text-transform: capitalize;
    text-decoration: none;
  }
`;

const Copyright = styled.div`
  text-align: left;
  margin-top: 20px;
  font-size: 14px;
  color: #bbb;
`;

const Links = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 60%;
  }
`;

export default Footer;
