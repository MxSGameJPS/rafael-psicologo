# Site Institucional para Psicólogo

Este projeto é um site institucional moderno para psicólogo, desenvolvido com React e Vite, apresentando um design elegante e responsivo utilizando as cores lavanda, pêssego claro e branco.

## 🚀 Tecnologias

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Styled Components](https://styled-components.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [EmailJS](https://www.emailjs.com/) para integração de formulário de contato

## ✨ Características

- Design responsivo para dispositivos móveis e desktop
- Paleta de cores harmonizada (lavanda, pêssego claro e branco)
- Header com menu hambúrguer para dispositivos móveis
- Seções organizadas: Hero, Sobre, Atuação, Depoimentos, Benefícios e Contato
- Formulário de contato integrado com EmailJS
- SEO otimizado

## 🔧 Instalação e Uso

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/rafael-psicologo.git
cd rafael-psicologo
```

1. Instale as dependências:

```bash
npm install
```

1. Configure o EmailJS (seguindo as instruções no arquivo EMAILJS_SETUP.md)

   - Renomeie o arquivo `.env.example` para `.env.local`
   - Preencha com suas credenciais do EmailJS

1. Execute o projeto em desenvolvimento:

```bash
npm run dev
```

1. Para build de produção:

```bash
npm run build
```

## 📋 Estrutura do Projeto

```text
src/
  ├── Components/           # Componentes reutilizáveis
  │   ├── about/            # Seção Sobre
  │   ├── atuacao/          # Seção de Atuação profissional
  │   ├── benefits/         # Seção de Benefícios
  │   ├── cta/              # Seção de Call-to-Action com formulário
  │   ├── footer/           # Rodapé do site
  │   ├── header/           # Cabeçalho com navegação responsiva
  │   ├── hero/             # Seção Hero principal
  │   ├── logo/             # Componente de logo
  │   └── testimonials/     # Seção de Depoimentos
  ├── assets/               # Recursos estáticos
  ├── App.jsx               # Componente principal
  ├── index.css             # Estilos globais
  └── main.jsx              # Ponto de entrada
```

## 📱 Responsividade

O site é totalmente responsivo, adaptando-se a diferentes tamanhos de tela:

- Layout mobile: Menu colapsável (hambúrguer)
- Layout tablet: Ajustes de grid e espaçamento
- Layout desktop: Experiência completa

## 📧 Configuração do EmailJS

Para configurar o formulário de contato com EmailJS, siga as instruções detalhadas no arquivo [EMAILJS_SETUP.md](./EMAILJS_SETUP.md).

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorar este projeto.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
