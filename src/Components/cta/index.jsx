import { useState } from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
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
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &.success {
    background-color: rgba(37, 211, 102, 0.1);
    color: #128c7e;
  }

  &.error {
    background-color: rgba(255, 87, 87, 0.1);
    color: #ff5757;
  }
`;

const FormValidationMessage = styled.span`
  color: #ff5757;
  font-size: 0.8rem;
  margin-top: 0.3rem;
  display: block;
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default function Cta() {
  const [state, handleSubmit] = useForm("manjpgdk"); // Use o ID do seu formulário do Formspree aqui
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData({
      nome: "",
      email: "",
      mensagem: "",
    });
  };

  // Se o formulário for enviado com sucesso e não está em estado de submissão
  if (state.succeeded && !state.submitting) {
    // Resetar o formulário após o envio bem-sucedido
    setTimeout(() => {
      resetForm();
    }, 3000);
  }

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
          <Form onSubmit={handleSubmit}>
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
              <ValidationError
                prefix="Nome"
                field="nome"
                errors={state.errors}
                component={FormValidationMessage}
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
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                component={FormValidationMessage}
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
              <ValidationError
                prefix="Mensagem"
                field="mensagem"
                errors={state.errors}
                component={FormValidationMessage}
              />
            </InputGroup>

            <SubmitButton type="submit" disabled={state.submitting}>
              {state.submitting ? (
                <>
                  <LoadingSpinner /> Enviando...
                </>
              ) : (
                <>
                  Enviar mensagem <FaPaperPlane />
                </>
              )}
            </SubmitButton>

            {state.succeeded && (
              <StatusMessage className="success">
                <FaCheck /> Mensagem enviada com sucesso!
              </StatusMessage>
            )}

            {state.errors && state.errors.length > 0 && (
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
