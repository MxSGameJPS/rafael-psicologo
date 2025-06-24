import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../logo";


export default function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        {" "}
        <LogoWrapper>
          <Logo size="2.2rem" />
          <Tagline>Psicólogo Clínico</Tagline>
        </LogoWrapper>
        <HeroTitle>Atendimento Psicológico</HeroTitle>{" "}
        <HeroDescription>
          Um espaço de <Highlight>escuta atenta e ética</Highlight>, onde você
          pode compreender melhor suas dores e encontrar novos caminhos. Cuidar
          de si é um processo que começa pela palavra.
        </HeroDescription>
        
        <ButtonsContainer>
          {" "}
          <WhatsAppButton
             href="https://wa.me/+5534992913300?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={18} />
            Agendar
          </WhatsAppButton>
          <SecondaryButton href="#sobre">Saiba Mais</SecondaryButton>
        </ButtonsContainer>
      </HeroContent>

      <ImageContainer>
        <PsychologistImage
          src="/sem-terno.png"
          alt="Dr. Rafael Richard - Psicólogo"
        />
      </ImageContainer>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 5rem;
  background: linear-gradient(135deg, #f3e5f5 0%, #f9f2ff 40%, #fff0e6 100%);
  min-height: 50vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: rgba(194, 182, 221, 0.1);
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -80px;
    left: -80px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: rgba(255, 240, 230, 0.3);
    z-index: 0;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 2.5rem 2rem;
    text-align: center;
    min-height: auto;
  }
`;

const HeroContent = styled.div`
  max-width: 500px;
  z-index: 1;

  @media (max-width: 992px) {
    margin-bottom: 1.5rem;
  }
`;

const LogoWrapper = styled.div`
  margin-bottom: 1rem;
  text-align: left;

  @media (max-width: 992px) {
    text-align: center;
  }
`;

const Tagline = styled.p`
  font-size: 0.9rem;
  color: #7b68ee;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  margin-top: 0.3rem;
  margin-bottom: 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 2.4rem;
  color: #7b68ee;
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.2;
  text-align: left;

  @media (max-width: 992px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const HeroPrice = styled.div`
  font-size: 1rem;
  color: #6d5580;
  margin: 1.2rem 0;
  font-weight: 500;
  padding: 0.6rem 0;
  border-top: 1px solid rgba(194, 182, 221, 0.3);
  border-bottom: 1px solid rgba(194, 182, 221, 0.3);
  display: inline-block;
  text-align: left;

  @media (max-width: 992px) {
    text-align: center;
    font-size: 0.9rem;
    margin: 0.8rem 0;
  }
`;

const HeroDescription = styled.p`
  font-size: 1rem;
  color: #6d5580;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  text-align: left;

  @media (max-width: 992px) {
    text-align: center;
    font-size: 0.9rem;
    margin-bottom: 1.2rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.8rem;

  @media (max-width: 992px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #c2b6dd;
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(123, 104, 238, 0.15);

  &:hover {
    background-color: #b19cd9;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(123, 104, 238, 0.25);
  }

  svg {
    margin-right: 8px;
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #7b68ee;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid #c2b6dd;
  cursor: pointer;

  &:hover {
    background-color: rgba(194, 182, 221, 0.1);
    transform: translateY(-2px);
  }
`;

const ImageContainer = styled.div`
  flex: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.5rem;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 10%;
    left: 10%;
    width: 75%;
    height: 75%;
    border-radius: 10px;
    background: linear-gradient(135deg, #e9ddf9 0%, #ffeadd 100%);
    z-index: -1;
    transform: rotate(-3deg);
  }

  @media (max-width: 992px) {
    margin-left: 0;
    width: 60%;
    margin: 0 auto;
  }

  @media (max-width: 576px) {
    width: 80%;
  }
`;

const PsychologistImage = styled.img`
  max-width: 85%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 12px 25px rgba(123, 104, 238, 0.15);
  transform: translateY(-5px);
  transition: all 0.5s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(123, 104, 238, 0.2);
  }

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const Highlight = styled.span`
  color: #7b68ee;
  font-weight: 700;
`;


