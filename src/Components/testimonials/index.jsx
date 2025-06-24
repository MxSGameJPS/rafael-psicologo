import styled from "styled-components";
import { FaQuoteLeft, FaWhatsapp } from "react-icons/fa";

const TestimonialsContainer = styled.section`
  padding: 6rem 4rem;
  background-color: #fbfaff; /* Fundo lavanda ultra claro */
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

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #7b68ee; /* Lavanda mais intenso */
  text-align: center;
  margin-bottom: 3.5rem;
  position: relative;
  z-index: 2;

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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  @media (max-width: 992px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 550px;
  }
`;

const TestimonialCard = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f9f4ff 100%);
  border-radius: 16px;
  padding: 2.5rem 2rem 2rem;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(123, 104, 238, 0.08);
  border: 1px solid rgba(194, 182, 221, 0.15);
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(123, 104, 238, 0.12);
    border-color: rgba(194, 182, 221, 0.3);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: radial-gradient(
      circle,
      rgba(255, 216, 191, 0.15) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    border-top-right-radius: 16px;
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: -20px;
  left: 25px;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    #fff0e6 0%,
    #ffd8bf 100%
  ); /* Gradiente de pêssego */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7b68ee; /* Lavanda */
  box-shadow: 0 4px 10px rgba(255, 216, 191, 0.3);
  border: 2px solid white;
  transition: transform 0.3s ease;

  ${TestimonialCard}:hover & {
    transform: scale(1.1) rotate(-5deg);
  }
`;

const TestimonialText = styled.p`
  font-size: 1.05rem;
  color: #6d5580; /* Tom de lavanda mais escuro */
  line-height: 1.8;
  margin-bottom: 2rem;
  font-style: italic;
  position: relative;
  z-index: 2;
  flex-grow: 1;

  &::after {
    content: '"';
    position: absolute;
    bottom: -1.5rem;
    right: 0;
    font-size: 3rem;
    line-height: 0;
    color: rgba(194, 182, 221, 0.2);
    font-family: serif;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  border-top: 1px dashed rgba(194, 182, 221, 0.3);
  padding-top: 1.2rem;
  margin-top: auto;
`;

const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    #7b68ee 0%,
    #c2b6dd 100%
  ); /* Gradiente de lavanda */
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  box-shadow: 0 3px 10px rgba(123, 104, 238, 0.2);
  border: 2px solid white;
  transition: transform 0.3s ease;

  ${TestimonialCard}:hover & {
    transform: scale(1.08);
  }
`;

const AuthorInfo = styled.div`
  h4 {
    color: #7b68ee; /* Lavanda */
    margin-bottom: 0.3rem;
    font-weight: 600;
    font-size: 1.1rem;
  }

  p {
    color: #6d5580; /* Tom de lavanda mais escuro */
    font-size: 0.9rem;
    opacity: 0.9;
    position: relative;
    padding-left: 1.2rem;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 8px;
      height: 8px;
      background-color: rgba(255, 216, 191, 0.8);
      border-radius: 50%;
    }
  }
`;

const CtaContainer = styled.div`
  text-align: center;
  margin-top: 4rem;
  position: relative;
  z-index: 2;
`;

const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    #7b68ee 0%,
    #9370db 100%
  ); /* Gradiente de lavanda */
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(123, 104, 238, 0.2);
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 60%
    );
    opacity: 0;
    transition: opacity 0.6s ease;
  }

  &:hover {
    background: linear-gradient(
      135deg,
      #6a5acd 0%,
      #7b68ee 100%
    ); /* Gradiente mais intenso no hover */
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(123, 104, 238, 0.3);

    &::after {
      opacity: 1;
    }
  }
`;

export default function Testimonials() {
  const testimonials = [
    {
      text: "Iniciei a terapia em um momento muito difícil da minha vida. Com o apoio do Rafael, pude entender padrões que se repetiam e fazer escolhas mais conscientes. Hoje me sinto mais leve e confiante.",
      name: "Mariana S.",
      role: "Paciente há 2 anos",
    },
    {
      text: "O processo terapêutico me ajudou a enxergar além das minhas questões imediatas. Aprendi a lidar melhor com a ansiedade e a estabelecer limites saudáveis nos meus relacionamentos.",
      name: "Carlos D.",
      role: "Paciente há 1 ano",
    },
    {
      text: "Sempre fui resistente à ideia de terapia, mas após algumas sessões com o Rafael, percebi o quanto estava precisando desse espaço de escuta. A abordagem dele é acolhedora e profissional.",
      name: "Patrícia M.",
      role: "Paciente há 8 meses",
    },
    {
      text: "O atendimento online foi uma surpresa positiva. Mesmo a distância, consigo me sentir acolhido e compreendido. O Rafael tem uma escuta atenta e respeitosa que faz toda diferença.",
      name: "Pedro L.",
      role: "Paciente há 6 meses",
    },
  ];

  return (
    <TestimonialsContainer id="depoimentos">
      <SectionTitle>O que os pacientes dizem</SectionTitle>

      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            {" "}
            <QuoteIcon>
              <FaQuoteLeft size={20} />
            </QuoteIcon>
            <TestimonialText>{testimonial.text}</TestimonialText>
            <TestimonialAuthor>
              <AuthorImage>{testimonial.name.charAt(0)}</AuthorImage>
              <AuthorInfo>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>

      <CtaContainer>
        <WhatsAppButton
          href="https://wa.me/5511999999999?text=Olá!%20Vim%20pelo%20site%20e%20quero%20saber%20mais."
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={20} style={{ marginRight: "10px" }} /> CONVERSAR
          PELO WHATSAPP
        </WhatsAppButton>
      </CtaContainer>
    </TestimonialsContainer>
  );
}
