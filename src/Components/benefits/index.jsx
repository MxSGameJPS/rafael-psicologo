import styled from "styled-components";
import {
  FaLightbulb,
  FaBalanceScale,
  FaHeart,
  FaUserFriends,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const BenefitsContainer = styled.section`
  padding: 6rem 4rem;
  background-color: #f9f4ff; /* Fundo lavanda ultra claro */
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -10%;
    right: -5%;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: rgba(194, 182, 221, 0.1);
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5%;
    left: -5%;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: rgba(255, 216, 191, 0.15);
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled.h2`
  font-size: 2.4rem;
  color: #7b68ee; /* Lavanda mais intenso */
  margin-bottom: 1rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(to right, #c2b6dd, #ffd8bf);
    border-radius: 3px;
  }
`;

const SectionSubtitle = styled.h3`
  font-size: 1.5rem;
  color: #6d5580; /* Tom de lavanda mais escuro */
  margin-top: 1.5rem;
  margin-bottom: 4rem;
  font-weight: 500;
  position: relative;
  z-index: 2;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.8rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 2.5rem 1.8rem;
  text-align: center;
  box-shadow: 0 8px 20px rgba(123, 104, 238, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(194, 182, 221, 0.15);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(123, 104, 238, 0.12);
    border-color: rgba(194, 182, 221, 0.3);
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #f3e5f5; /* Lavanda bem claro */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.8rem;
  color: #7b68ee; /* Lavanda */
  box-shadow: 0 5px 15px rgba(123, 104, 238, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;

  ${BenefitCard}:hover & {
    transform: scale(1.1);
    background-color: #efe5ff;
  }
`;

const BenefitTitle = styled.h4`
  color: #7b68ee; /* Lavanda */
  margin-bottom: 1rem;
  font-size: 1.3rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background-color: rgba(123, 104, 238, 0.3);
  }
`;

const BenefitDescription = styled.p`
  color: #6d5580; /* Tom de lavanda mais escuro */
  line-height: 1.7;
  flex-grow: 1;
  margin-top: 0.8rem;
  font-size: 1rem;
`;

const EthicsContainer = styled.div`
  margin-top: 5rem;
  text-align: center;
  padding: 3.5rem;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(123, 104, 238, 0.08);
  position: relative;
  z-index: 2;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, #c2b6dd, #ffd8bf);
  }
`;

const SectionSubtitleLarge = styled.h3`
  font-size: 1.7rem;
  color: #7b68ee; /* Lavanda mais intenso */
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #7b68ee;
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(123, 104, 238, 0.25);

  &:hover {
    background-color: #6a5acd;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(123, 104, 238, 0.35);
  }

  svg {
    margin-right: 10px;
  }
`;

export default function Benefits() {
  const benefits = [
    {
      title: "Autoconhecimento",
      description:
        "Compreensão profunda de padrões, emoções e comportamentos que impactam sua vida.",
      icon: <FaLightbulb size={28} />,
    },
    {
      title: "Equilíbrio emocional",
      description:
        "Desenvolvimento de recursos para lidar com emoções intensas e situações desafiadoras.",
      icon: <FaBalanceScale size={28} />,
    },
    {
      title: "Bem-estar",
      description:
        "Construção de uma relação mais saudável consigo mesmo e com sua história de vida.",
      icon: <FaHeart size={28} />,
    },
    {
      title: "Relacionamentos",
      description:
        "Melhoria na comunicação e na qualidade das conexões afetivas e sociais.",
      icon: <FaUserFriends size={28} />,
    },
  ];

  return (
    <BenefitsContainer id="beneficios">
      <SectionHeader>
        <SectionTitle>Mais clareza. Mais equilíbrio.</SectionTitle>
        <SectionSubtitle>Mais presença em si.</SectionSubtitle>
      </SectionHeader>

      <SectionSubtitle>A Psicoterapia proporciona:</SectionSubtitle>
      <BenefitsGrid>
        {benefits.map((benefit, index) => (
          <BenefitCard key={index}>
            <IconWrapper>{benefit.icon}</IconWrapper>
            <BenefitTitle>{benefit.title}</BenefitTitle>
            <BenefitDescription>{benefit.description}</BenefitDescription>
          </BenefitCard>
        ))}
      </BenefitsGrid>

      <EthicsContainer>
        <SectionSubtitleLarge>
          Aqui, seu processo é conduzido com ética, escuta e responsabilidade
          clínica.
        </SectionSubtitleLarge>
        <p
          style={{
            color: "#6d5580",
            lineHeight: "1.8",
            fontSize: "1.1rem",
          }}
        >
          A psicoterapia não é resposta pronta — é construção. Não é receita — é
          travessia. Meu compromisso é oferecer um espaço onde sua história
          possa ser dita, escutada e ressignificada.
        </p>
         <CTAButton
                  href="https://wa.me/+5534992913300?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={20} />
                  Agendar uma consulta
                </CTAButton>
      </EthicsContainer>
    </BenefitsContainer>
  );
}
