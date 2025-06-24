import styled from "styled-components";

const AboutContainer = styled.section`
  padding: 7rem 4rem 6rem;
  background-color: #fff;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 5rem 2rem 4rem;
  }
`;

const AboutContent = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
    gap: 3rem;
  }
`;

const BackgroundCircle = styled.div`
  position: absolute;
  left: -2%;
  top: 50%;
  transform: translateY(-50%);
  width: 48%;
  height: 95%;
  background-color: #f9f4ff; /* Lavanda muito claro */
  border-radius: 300px;
  z-index: 1;

  @media (max-width: 992px) {
    width: 85%;
    height: 48%;
    left: 50%;
    top: 28%;
    transform: translate(-50%, -50%);
  }
`;

const ImageWrapper = styled.div`
  flex: 1.1;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 480px;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 5px 25px rgba(123, 104, 238, 0.15);
    transition: transform 0.3s ease;
    border: 6px solid white;

    &:hover {
      transform: scale(1.02);
    }
  }
  @media (max-width: 992px) {
    margin-bottom: 1.5rem;

    img {
      max-width: 420px;
    }
  }

  @media (max-width: 576px) {
    img {
      max-width: 100%;
    }
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding-right: 2rem;

  @media (max-width: 992px) {
    padding-right: 0;
    text-align: center;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.4rem;
  color: #7b68ee; /* Lavanda mais intenso */
  margin-bottom: 0.5rem;
  font-weight: 600;

  span {
    display: block;
    font-size: 1.2rem;
    color: #c2b6dd; /* Lavanda médio */
    font-weight: 500;
    margin-top: 0.3rem;
  }

  @media (max-width: 992px) {
    font-size: 2.2rem;
  }
`;

const AboutParagraph = styled.p`
  font-size: 1.1rem;
  color: #6d5580; /* Tom de lavanda mais escuro */
  line-height: 1.8;
  margin-bottom: 1.5rem;

  @media (max-width: 992px) {
    text-align: center;
  }
`;

const Quote = styled.blockquote`
  font-style: italic;
  color: #7b68ee; /* Lavanda */
  border-left: 3px solid #ffd8bf; /* Pêssego claro */
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-size: 1.1rem;
  background-color: rgba(255, 216, 191, 0.1); /* Pêssego bem claro */
  padding: 1.5rem;
  border-radius: 0 10px 10px 0;

  @media (max-width: 992px) {
    text-align: left;
  }
`;

export default function About() {
  return (
    <AboutContainer id="sobre">
      <BackgroundCircle />
      <AboutContent>
        <TextContent>
          <SectionTitle>
            Rafael Richard
            <span>Psicólogo Clínico</span>
          </SectionTitle>

          <AboutParagraph>
            Olá! Sou Rafael Richard, psicólogo especialista no tratamento de
            ansiedade, depressão e outros sintomas e estou aqui para te ajudar a
            enfrentar esses desafios sempre com acolhimento e compreensão.
          </AboutParagraph>

          <AboutParagraph>
            Meu trabalho é criar um ambiente seguro e sem julgamentos para que
            você possa explorar seus sentimentos e pensamentos e fazer com que o
            tratamento seja o mais eficaz e humanizado possível.
          </AboutParagraph>

          <AboutParagraph>
            Sou formado pela Unitri em Uberlândia Minas Gerais, e minha
            abordagem é a humanista-existencial, essa linha vê o cliente além de
            seu sintoma, vê como uma pessoa digna de sua história.
          </AboutParagraph>
          <AboutParagraph>
            Aprendi nesses anos de estudo a acreditar na capacidade de cada um
            em lidar com as dificuldades e se reinventar.
          </AboutParagraph>
          <AboutParagraph>
            Além disso, prezo pela ciência e o que há de mais moderno no
            tratamento de cada caso. Utilizarei das melhores técnicas da ciência
            para te ajudar.
          </AboutParagraph>
          <AboutParagraph>
            O atendimento é online, podendo ser feito até pelo celular, o que
            torna o processo prático e acessível adaptando-se à sua rotina.
          </AboutParagraph>

          <AboutParagraph>
            Juntos, vamos construir uma conexão de confiança, essencial para
            você se autoconhecer, desenvolver ferramentas eficazes para
            gerenciar seus sintomas e, finalmente, encontrar mais equilíbrio e
            bem-estar.
          </AboutParagraph>
        </TextContent>
        <ImageWrapper>
          <img src="/com-terno.png" alt="Rafael Silva - Psicólogo" />
        </ImageWrapper>
      </AboutContent>
    </AboutContainer>
  );
}
