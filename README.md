# 🐹 Hamster Guide

> Um guia completo e interativo para cuidados essenciais de hamsters, desenvolvido com Next.js

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![CSS Modules](https://img.shields.io/badge/CSS-Modules-green)](https://github.com/css-modules/css-modules)
[![Formspree](https://img.shields.io/badge/Forms-Formspree-orange)](https://formspree.io/)

## 📋 Sobre o Projeto

O **Hamster Guide** é uma aplicação web educativa que oferece informações detalhadas sobre cuidados essenciais para hamsters. O projeto foi desenvolvido com foco em experiência do usuário, design responsivo e conteúdo de qualidade para tutores de hamsters.

### ✨ Características Principais

- 🎨 **Design Responsivo** - Interface adaptável para todos os dispositivos
- 🌈 **Paleta de Cores Harmoniosa** - Tons de marrom que remetem ao ambiente natural
- 📱 **Mobile First** - Otimizado para dispositivos móveis
- 🔄 **Navegação Fluida** - Scroll suave e transições elegantes
- 📝 **Formulário Funcional** - Integração com Formspree para contato
- 🎯 **Conteúdo Estruturado** - Informações organizadas por categorias

## 🚀 Tecnologias Utilizadas

- **Frontend:**

  - [Next.js 14](https://nextjs.org/) - Framework React para produção
  - [React 18](https://reactjs.org/) - Biblioteca JavaScript para interfaces
  - CSS Modules - Estilização modular e isolada
  - CSS Variables - Sistema de cores consistente

- **Formulários:**

  - [@formspree/react](https://formspree.io/react) - Gerenciamento de formulários

- **Desenvolvimento:**
  - ESLint - Linting e qualidade de código
  - Git - Controle de versão

## 📦 Estrutura do Projeto

```
hamsterGuide/
├── public/                    # Arquivos estáticos
│   ├── next.svg
│   ├── vercel.svg
│   └── ...
├── src/
│   ├── app/                   # App Router (Next.js 13+)
│   │   ├── cuidados/         # Página de cuidados
│   │   │   ├── page.jsx
│   │   │   └── cuidados.module.css
│   │   ├── globals.css       # Estilos globais
│   │   ├── layout.js         # Layout principal
│   │   ├── page.jsx          # Página inicial
│   │   └── page.module.css   # Estilos da home
│   └── components/           # Componentes reutilizáveis
│       ├── header/
│       ├── footer/
│       └── navigation/
├── package.json
└── README.md
```

## 🎯 Funcionalidades

### 🏠 Página Inicial

- Hero section com apresentação do projeto
- Cards informativos sobre tópicos principais
- Formulário de contato integrado
- Links de navegação para seções específicas

### 🩺 Página de Cuidados

- **4 Pilares dos Cuidados:**

  - 🍎 Alimentação Adequada
  - 🛁 Higiene
  - ❤️ Cuidados de Saúde
  - ⏰ Rotina de Cuidados

- **Seções Detalhadas:**

  - Informações específicas sobre cada tópico
  - Listas de recomendações práticas
  - Alimentos proibidos destacados
  - Timeline de rotina diária

- **Sinais de Alerta:**
  - Identificação de problemas de saúde
  - Descrições detalhadas de sintomas
  - Orientações para busca de ajuda veterinária

## 🎨 Design System

### Paleta de Cores

```css
:root {
  --brown-dark: #5d4037; /* Textos principais */
  --brown-medium: #8d6e63; /* Botões e destaques */
  --brown-light: #d7ccc8; /* Fundos suaves */
  --off-white: #f5f3f0; /* Fundo principal */
  --cream: #efebe9; /* Seções alternadas */
}
```

### Tipografia

- **Títulos:** Font-weight bold, tamanhos responsivos
- **Corpo:** Line-height 1.6 para melhor legibilidade
- **Font Stack:** Sistema nativo para performance otimizada

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/gabriela-fernanda14/hamsterGuide.git

# Entre no diretório
cd hamsterGuide

# Instale as dependências
npm install
# ou
yarn install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build para Produção

```bash
# Gere a build otimizada
npm run build
# ou
yarn build

# Inicie o servidor de produção
npm start
# ou
yarn start
```

## 📱 Responsividade

O projeto foi desenvolvido com abordagem **Mobile First**, garantindo uma experiência otimizada em:

- 📱 **Mobile** (< 480px)
- 📱 **Tablet** (481px - 768px)
- 💻 **Desktop** (> 768px)

### Breakpoints Principais

```css
@media (max-width: 768px) {
  /* Tablet e mobile */
}
@media (max-width: 480px) {
  /* Mobile */
}
```

## 🔗 Navegação

- **Header** - Logo e informações principais
- **Navigation** - Menu com links para todas as seções
- **Footer** - Informações de contato e links úteis
- **Scroll Suave** - Navegação entre seções da mesma página
- **Botão Voltar ao Topo** - Disponível em páginas longas

## 📧 Formulário de Contato

Integração com **Formspree** para processamento seguro de formulários:

- ✅ Validação client-side
- 📧 Envio por email automático
- 🎯 Feedback visual para o usuário
- 🔒 Proteção contra spam

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 👨‍💻 Desenvolvedor

**Gabriela Fernanda**

- GitHub: [@gabriela-fernanda14](https://github.com/gabriela-fernanda14)

<div align="center">

**Feito com ❤️ para os amantes de hamsters**

[⬆ Voltar ao topo](#-hamster-guide)

</div>
