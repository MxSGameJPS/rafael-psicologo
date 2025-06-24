import styled from "styled-components";
import {
  FaBrain,
  FaHeart,
  FaUserFriends,
  FaSadTear,
  FaUsers,
  FaChild,
  FaWhatsapp,
} from "react-icons/fa";

const AtuacaoContainer = styled.section`
  padding: 6rem 4rem;
  background-color: #fbfaff; /* Fundo levemente lavanda */

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #7b68ee; /* Lavanda mais intenso */
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #6d5580; /* Tom de lavanda mais escuro */
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  line-height: 1.6;
`;

const AreasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const AreaCard = styled.div`
  background: linear-gradient(
    to bottom,
    #f9f4ff,
    #fff0e6
  ); /* Lavanda bem clarinho para pêssego claro */
  border-radius: 15px;
  padding: 2.5rem 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  min-height: 280px;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, #c2b6dd, #ffd8bf);
    transform: scaleX(0.85);
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(123, 104, 238, 0.1);

    &::after {
      transform: scaleX(1);
    }
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #7b68ee; /* Lavanda */
  box-shadow: 0 5px 15px rgba(123, 104, 238, 0.15);
  transition: transform 0.3s ease;

  ${AreaCard}:hover & {
    transform: scale(1.1);
  }
`;

const AreaTitle = styled.h3`
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
    background-color: rgba(123, 104, 238, 0.4);
  }
`;

const AreaDescription = styled.p`
  color: #6d5580; /* Tom de lavanda mais escuro */
  line-height: 1.6;
  font-size: 0.95rem;
  margin-top: 0.5rem;
`;

const ProcessContainer = styled.div`
  margin-top: 5rem;
  text-align: center;
  padding: 3.5rem 3rem;
  background-color: #f9f4ff; /* Lavanda muito claro */
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(123, 104, 238, 0.08);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(to right, #c2b6dd, #ffd8bf);
  }
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

export default function Atuacao() {
  const areas = [
    {
      title: "Ansiedade",
      description:
        "Tratamento para transtornos de ansiedade, ataques de pânico, fobias e medos que limitam sua vida cotidiana.",
      icon: <FaBrain size={28} />,
    },
    {
      title: "Depressão",
      description:
        "Acolhimento e tratamento para estados depressivos, tristeza profunda e falta de motivação para a vida.",
      icon: <FaSadTear size={28} />,
    },
    {
      title: "Relacionamentos",
      description:
        "Suporte para desafios em relacionamentos amorosos, familiares e sociais, questões de comunicação e limites.",
      icon: <FaUserFriends size={28} />,
    },
    {
      title: "Autoestima",
      description:
        "Trabalho com questões de autoimagem, autoconfiança e desenvolvimento de uma relação saudável consigo mesmo.",
      icon: <FaHeart size={28} />,
    },
    {
      title: "Traumas",
      description:
        "Abordagem especializada para processamento e integração de experiências traumáticas e seus impactos.",
      icon: <FaUsers size={28} />,
    },
    {
      title: "Desenvolvimento",
      description:
        "Apoio para autodescoberta, crescimento pessoal e construção de uma vida mais alinhada com seus valores.",
      icon: <FaChild size={28} />,
    },
  ];
  return (
    <AtuacaoContainer id="atuacao">
      <SectionTitle>Atuo como Psicólogo Clínico</SectionTitle>
      <SectionSubtitle>oferecendo suporte especializado para:</SectionSubtitle>
      <AreasGrid>
        {areas.map((area, index) => (
          <AreaCard key={index}>
            <IconWrapper>{area.icon}</IconWrapper>
            <AreaTitle>{area.title}</AreaTitle>
            <AreaDescription>{area.description}</AreaDescription>
          </AreaCard>
        ))}
      </AreasGrid>{" "}
      <ProcessContainer>
        <SectionTitle>O processo terapêutico</SectionTitle>
        <SectionSubtitle style={{ marginBottom: "1.5rem" }}>
          consiste em nomear e identificar, dar novos destinos àquilo que está
          oculto, mas que pertence a nós mesmos.
        </SectionSubtitle>
        <CTAButton
          href="https://wa.me/+5534992913300?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={20} />
          Agendar uma consulta
        </CTAButton>
      </ProcessContainer>
    </AtuacaoContainer>
  );
}
