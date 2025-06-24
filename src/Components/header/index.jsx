import styled from "styled-components";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
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
    flex-direction: column;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
    gap: 1rem;
  }
`;

const NavLink = styled.a`
  color: #6d5580; /* Tom de lavanda mais escuro */
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

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

export default function Header() {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Logo size="1.5rem" />
      </LogoWrapper>
      <Nav>
        <NavLink href="#sobre">Sobre</NavLink>
        <NavLink href="#atuacao">Áreas de Atuação</NavLink>
        <NavLink href="#depoimentos">Depoimentos</NavLink>
        <NavLink href="#contato">Contato</NavLink>
      </Nav>
      <SocialLinks>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={18} />
        </a>
        <a
          href="https://wa.me/5511999999999?text=Olá!%20Vim%20pelo%20site%20e%20quero%20saber%20mais."
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={18} />
        </a>
      </SocialLinks>
    </HeaderContainer>
  );
}
