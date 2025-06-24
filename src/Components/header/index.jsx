import styled from "styled-components";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import Logo from "../logo";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 4rem;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    width: 100%;
    background-color: white;
    padding: 1.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: left 0.3s ease-in-out;
    z-index: 99;
    text-align: center;
  }
`;

const NavLink = styled.a`
  color: #6d5580; /* Tom de lavanda mais escuro */
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.5rem 0;

  &:hover {
    color: #b19cd9; /* Lavanda mais intenso no hover */
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: #f3e5f5; /* Lavanda bem claro */
    color: #7b68ee; /* Lavanda */
    transition: all 0.3s ease;

    &:hover {
      background-color: #7b68ee; /* Lavanda */
      color: white;
      transform: translateY(-2px);
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #6d5580;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #b19cd9;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fecha o menu ao clicar em um link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Fecha o menu quando a janela é redimensionada para maior que 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderContainer>
      <TopRow>
        <LogoWrapper>
          <Logo size="1.5rem" />
        </LogoWrapper>

        <div style={{ display: "flex", alignItems: "center" }}>
          <SocialLinks>
            <a
              href="https://www.instagram.com/psi_rafaelrichard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://wa.me/+5534992913300?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={18} />
            </a>
          </SocialLinks>

          <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </div>
      </TopRow>

      <Nav isOpen={isMenuOpen}>
        <NavLink href="#sobre" onClick={handleLinkClick}>
          Sobre
        </NavLink>
        <NavLink href="#atuacao" onClick={handleLinkClick}>
          Atuação
        </NavLink>
        <NavLink href="#depoimentos" onClick={handleLinkClick}>
          Depoimentos
        </NavLink>
        <NavLink href="#contato" onClick={handleLinkClick}>
          Contato
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
}
