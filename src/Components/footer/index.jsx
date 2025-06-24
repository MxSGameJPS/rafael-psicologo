import styled from "styled-components";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const FooterContainer = styled.footer`
  padding: 4rem 4rem 2rem;
  background-color: #f3e5f5; /* Lavanda bem claro */

  @media (max-width: 768px) {
    padding: 3rem 2rem 1.5rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  max-width: 350px;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: #7b68ee; /* Lavanda */
  margin-bottom: 1rem;

  span {
    display: block;
    font-size: 1rem;
    color: #6d5580; /* Tom de lavanda mais escuro */
  }
`;

const FooterText = styled.p`
  color: #6d5580; /* Tom de lavanda mais escuro */
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h3`
  color: #7b68ee; /* Lavanda */
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    color: #7b68ee; /* Lavanda */
    transition: all 0.3s ease;

    &:hover {
      background-color: #7b68ee; /* Lavanda */
      color: white;
      transform: translateY(-2px);
    }
  }
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 1rem;
    color: #6d5580; /* Tom de lavanda mais escuro */
  }

  a {
    color: #7b68ee; /* Lavanda */
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #b19cd9; /* Lavanda mais intenso no hover */
    }
  }
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background-color: #c2b6dd; /* Lavanda médio */
  margin: 2rem 0;
`;

const Copyright = styled.p`
  text-align: center;
  color: #6d5580; /* Tom de lavanda mais escuro */
  font-size: 0.9rem;
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo>
            Rafael Silva
            <span>Psicólogo Clínico</span>
          </Logo>
          <FooterText>
            Atendimento psicológico online com abordagem psicanalítica,
            oferecendo um espaço seguro e acolhedor para autoconhecimento e
            transformação.
          </FooterText>
          <SocialLinks>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Vim%20pelo%20site%20e%20quero%20saber%20mais."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={20} />
            </a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Acompanhe reflexões e conteúdos</SectionTitle>
          <FooterText>
            Siga nas redes sociais para acompanhar publicações sobre saúde
            mental, autoconhecimento e desenvolvimento pessoal.
          </FooterText>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Contato</SectionTitle>
          <ContactList>
            <li>
              <a
                href="https://wa.me/5511999999999?text=Olá!%20Vim%20pelo%20site%20e%20quero%20saber%20mais."
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: (11) 99999-9999
              </a>
            </li>
            <li>
              <a href="mailto:contato@rafaelsilva.com.br">
                Email: contato@rafaelsilva.com.br
              </a>
            </li>
            <li>CRP: 06/XXXXX</li>
            <li>Atendimento Online para todo o Brasil</li>
          </ContactList>
        </FooterSection>
      </FooterContent>

      <Divider />

      <Copyright>
        &copy; {currentYear} Rafael Silva - Psicólogo | Todos os direitos
        reservados
      </Copyright>
    </FooterContainer>
  );
}
