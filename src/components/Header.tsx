import React, { useCallback, useState } from "react";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";
import RegisterModal from "./shared/RegisterModal";
import { Button } from "./shared/Button";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  WIDESCREEN_BREAKPOINT,
} from "../styles/GlobalStyle";

type Props = {
  onClick: () => void;
  theme: string;
};

const Header: React.FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const allLinks = [
    { id: "about", desc: "about" },
    { id: "interests", desc: "topics of interests" },
    { id: "tracks", desc: "tracks" },
    { id: "organizer", desc: "organizer" },
    { id: "submissions-and-review", desc: "Submissions & Review" },
    { id: "benefits", desc: "benefits of conference" },
    { id: "sponsors", desc: "sponsor us" },
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCallForProposalClick = useCallback(() => {
    window.open("https://easychair.org/conferences/?conf=compilertech2024");
  }, []);

  return (
    <>
      <NavBar>
        <Logo className="logo">
          <img
            src={
              props.theme === "light"
                ? "./icons/logo_light-cropped.png"
                : "./icons/logo_dark-cropped.png"
            }
          />
        </Logo>
        <NavLinks isOpen={isOpen}>
          <Links>
            {allLinks.map((link, index) => (
              <a key={index} onClick={handleToggle} href={`#${link.id}`}>
                {link.desc}
              </a>
            ))}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                width: "100%",
                padding: "0 20px",
                justifyContent: "center",
              }}
            >
              <StyledButton
                onClick={handleCallForProposalClick}
                style={{
                  flex: 1,
                  display: "inline-block",
                  maxWidth: "200px",
                  textWrap: "nowrap",
                }}
              >
                CALL FOR PROPOSALS
              </StyledButton>
              <StyledButton
                onClick={toggleModal}
                style={{
                  flex: 1,
                  display: "inline-block",
                  maxWidth: "200px",
                  textWrap: "nowrap",
                }}
              >
                REGISTER NOW
              </StyledButton>
            </div>
          </Links>
        </NavLinks>
        <Action isOpen={isOpen}>
          <StyledButton onClick={handleCallForProposalClick}>
            CALL FOR PROPOSALS
          </StyledButton>
          <StyledButton onClick={toggleModal}>REGISTER NOW</StyledButton>
          <ThemeToggle theme={props.theme} toggleTheme={props.onClick} />
        </Action>
        <Hamburger isOpen={isOpen} onClick={handleToggle}>
          <span />
          <span />
          <span />
        </Hamburger>
      </NavBar>
      {<RegisterModal onClose={toggleModal} hidden={!isModalOpen} />}
    </>
  );
};

const StyledButton = styled(Button)`
  color: white !important;
  display: flex;
  justify-content: center;
  gap: 5px;
`;
const Action = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 0.2s ease-in-out;
  gap: 20px;
  @media (min-width: ${MOBILE_BREAKPOINT}) and (max-width: ${TABLET_BREAKPOINT}) {
    width: auto;
    button {
      width: auto;
    }
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    ${({ isOpen }) => (!isOpen ? `right:60px` : "left:15px;")};
    position: absolute;
    button {
      display: none;
    }
  }
`;
const Links = styled.div`
  display: none;
  a {
    text-align: center;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
  }
`;
const Logo = styled.div`
  img {
    height: 70px;
    margin-top: 15px;
    margin-bottom: 7px;
  }
`;

const NavBar = styled.section`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.body};
  padding: 0 11.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Bebas Neue", sans-serif;
  font-style: normal;
  font-size: 2rem;
  height: auto;
  z-index: 1;
  padding-top: 0;
  padding-bottom: 0;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0 4rem;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    justify-content: space-between;
    padding: 0 1rem;
  }
  @media (min-width: ${WIDESCREEN_BREAKPOINT}) {
    padding-left: calc(44% - 420px);
    padding-right: calc(44% - 420px);
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const NavLinks = styled.nav<{ isOpen: boolean }>`
  width: 15%;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    margin: 0 1rem;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.body};
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: all 0.2s ease-in-out;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};

    a {
      margin: 1rem 0;
      font-size: 1.75rem;
    }
  }
`;

const Hamburger = styled.div<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 1001;
  span {
    height: 4px;
    width: 25px;
    background: ${({ theme }) => theme.text};
    margin-bottom: 4px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;

    // Animate hamburger to close icon
    span:nth-child(1) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(45deg) translate(7px, 5px)" : "rotate(0)"};
    }
    span:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    }
    span:nth-child(3) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(-45deg) translate(6px, -5px)" : "rotate(0)"};
    }
  }
`;

export default Header;
