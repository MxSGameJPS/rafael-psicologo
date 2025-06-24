import { useState, useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaWhatsapp, FaCheck } from "react-icons/fa";

const CtaContainer = styled.section`
  padding: 5rem 4rem;
  background-color: #f9f6ff;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #7b68ee; /* Lavanda mais intenso */
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SectionText = styled.p`
  font-size: 1.2rem;
  color: #6d5580; /* Tom de lavanda mais escuro */
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  text-align: center;
`;

const FormContainer = styled.div`
  background-color: white;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(107, 85, 148, 0.1);
  width: 100%;
  max-width: 600px;
  margin: 0 auto 3rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Label = styled.label`
  color: #6d5580;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #e0d5f9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #b19cd9;
    box-shadow: 0 0 0 2px rgba(177, 156, 217, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid #e0d5f9;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #b19cd9;
    box-shadow: 0 0 0 2px rgba(177, 156, 217, 0.2);
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #c2b6dd; /* Lavanda médio */
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #b19cd9; /* Lavanda mais intenso no hover */
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(123, 104, 238, 0.2);
  }

  &:disabled {
    background-color: #e0d5f9;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const OrDivider = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  color: #6d5580;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px dashed #e0d5f9;
  }

  span {
    padding: 0 1rem;
    font-size: 0.9rem;
  }
`;

const WhatsappButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #25d366;
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #128c7e;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(37, 211, 102, 0.2);
  }
`;

const StatusMessage = styled.div`
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &.success {
    background-color: rgba(37, 211, 102, 0.1);
    color: #128c7e;
  }

  &.error {
    background-color: rgba(255, 87, 87, 0.1);
    color: #ff5757;
  }
`;

export default function Cta() {
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    status: null, // 'success' | 'error' | null
  });
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, status: null });

    // Substitua estes IDs pelos seus IDs do EmailJS
    const serviceId = "service_emailjs";
    const templateId = "template_contato";
    const publicKey = "sua_chave_publica";

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        console.log("Email enviado com sucesso:", result.text);
        setFormStatus({ submitting: false, status: "success" });
        // Limpar o formulário
        setFormData({
          nome: "",
          email: "",
          mensagem: "",
        });

        // Resetar a mensagem de sucesso após 5 segundos
        setTimeout(() => {
          setFormStatus({ submitting: false, status: null });
        }, 5000);
      })
      .catch((error) => {
        console.error("Erro ao enviar email:", error);
        setFormStatus({ submitting: false, status: "error" });
      });
  };

  return (
    <CtaContainer id="contato">
      <ContentWrapper>
        <SectionTitle>
          Há algo que insiste, que retorna, que pede escuta.
        </SectionTitle>
        <SectionText>
          Se for o tempo de falar sobre isso, podemos começar. Preencha o
          formulário abaixo ou entre em contato diretamente pelo WhatsApp.
        </SectionText>

        <FormContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="nome">Nome</Label>
              <Input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                placeholder="Seu nome completo"
                required
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="seu.email@exemplo.com"
                required
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="mensagem">Mensagem</Label>
              <TextArea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleInputChange}
                placeholder="Como posso ajudar? Conte um pouco sobre o que está buscando..."
                required
              />
            </InputGroup>

            <SubmitButton type="submit" disabled={formStatus.submitting}>
              {formStatus.submitting ? (
                "Enviando..."
              ) : (
                <>
                  Enviar mensagem <FaPaperPlane />
                </>
              )}
            </SubmitButton>

            {formStatus.status === "success" && (
              <StatusMessage className="success">
                <FaCheck /> Mensagem enviada com sucesso!
              </StatusMessage>
            )}

            {formStatus.status === "error" && (
              <StatusMessage className="error">
                Erro ao enviar. Por favor, tente novamente ou use o WhatsApp.
              </StatusMessage>
            )}
          </Form>

          <OrDivider>
            <span>ou</span>
          </OrDivider>

          <WhatsappButton
            href="https://wa.me/+5534992913300?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> Fale pelo WhatsApp
          </WhatsappButton>
        </FormContainer>
      </ContentWrapper>
    </CtaContainer>
  );
}
