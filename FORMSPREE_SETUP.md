# Configuração do Formspree para o Formulário de Contato

O formulário de contato deste site utiliza o Formspree, uma solução simples e eficaz para processamento de formulários sem necessidade de backend próprio. Esta documentação explica como o formulário foi configurado e como você pode modificá-lo se necessário.

## O que é o Formspree?

[Formspree](https://formspree.io/) é um serviço que permite criar formulários HTML e receber submissões por e-mail sem precisar escrever qualquer código de backend. O plano gratuito permite até 50 submissões por mês.

## Como está configurado atualmente

O formulário já está configurado e funcionando com o Formspree. O ID do formulário `manjpgdk` está definido no componente `Cta` e aponta para uma conta específica onde os e-mails serão recebidos.

## Como modificar a configuração (se necessário)

Se você precisar alterar o destinatário dos e-mails ou outras configurações, siga estas etapas:

1. Crie uma conta no [Formspree](https://formspree.io/).
2. Crie um novo formulário na dashboard do Formspree.
3. Configure o e-mail onde deseja receber as mensagens.
4. Obtenha o ID do formulário (formato: `xxxxxxxyz`).
5. Abra o arquivo `src/Components/cta/index.jsx` e atualize a seguinte linha:

```javascript
const [state, handleSubmit] = useForm("manjpgdk"); // Substitua com seu novo ID
```

## Recursos do formulário atual

O formulário atual inclui:

- Validação de campos (nome, e-mail e mensagem são obrigatórios)
- Feedback visual durante o envio (spinner de carregamento)
- Mensagem de sucesso após o envio
- Mensagem de erro em caso de falha
- Redefinição automática do formulário após envio bem-sucedido

## Limitações do plano gratuito

O plano gratuito do Formspree permite:

- Até 50 submissões por mês
- E-mails entregues com o branding do Formspree
- Sem recursos anti-spam avançados

Para mais submissões ou recursos adicionais, é possível fazer upgrade para um plano pago diretamente no site do Formspree.

## Suporte

Se encontrar problemas com o formulário:

1. Verifique se o ID do formulário está correto
2. Certifique-se de que não excedeu o limite mensal de submissões
3. Verifique se o e-mail associado à sua conta Formspree está correto
4. Consulte a [documentação oficial do Formspree](https://help.formspree.io/)
