# 🐹 Hamster Guide

> Um guia completo e interativo para cuidados essenciais de hamsters, desenvolvido com Next.js e React

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Formspree](https://img.shields.io/badge/Forms-Formspree-orange)](https://formspree.io/)

## 📋 Sobre o Projeto

O **Hamster Guide** é uma aplicação web educativa que oferece informações detalhadas sobre cuidados essenciais para hamsters. O projeto foi desenvolvido com foco na experiência do usuário, design responsivo e conteúdo de qualidade para tutores de hamsters.

### ✨ Características Principais

- 🎨 **Design Responsivo** - Interface adaptável para todos os dispositivos
- 🌈 **Paleta de Cores Harmoniosa** - Tons de marrom que remetem ao ambiente natural
- 📱 **Mobile** - Otimizado para dispositivos móveis
- 🔄 **Navegação Fluida** - Scroll suave e transições elegantes
- 📝 **Formulário Funcional** - Integração com Formspree para contato
- 🎯 **Conteúdo Estruturado** - Informações organizadas por categorias
- 🐹 **Espécies Dinâmicas** - Integração com API backend para informações de espécies
- ❓ **FAQ Interativo** - Sistema de perguntas e respostas expansível

## 🚀 Tecnologias Utilizadas

### Frontend

- [Next.js 14](https://nextjs.org/) - Framework React com App Router
- [React 18](https://reactjs.org/) - Biblioteca JavaScript para interfaces
- CSS Modules - Estilização modular e isolada
- CSS Variables - Sistema de cores consistente

### Backend

- **API REST** - [HamsterGuide-Back](https://github.com/gabriela-fernanda14/HamsterGuide-Back.git)
- Fornece dados das espécies de hamsters
- Necessário para funcionamento da seção "Espécies"

### Integrações

- [@formspree/react](https://formspree.io/react) - Gerenciamento de formulários

### Ferramentas de Desenvolvimento

- Git - Controle de versão
- Vercel - Hospedagem e deploy contínuo
## 📦 Estrutura do Projeto

```
hamsterGuide/
├── public/                    # Arquivos estáticos
├── src/
│   ├── app/                   # App Router (Next.js 14)
│   │   ├── cuidados/         # Página de cuidados básicos
│   │   │   ├── page.jsx
│   │   │   └── cuidados.module.css
│   │   ├── especies/         # Página de espécies
│   │   │   ├── [id]/         # Páginas dinâmicas de detalhes
│   │   │   │   ├── page.jsx
│   │   │   │   └── hamster-detail.module.css
│   │   │   ├── page.jsx
│   │   │   └── especies.module.css
│   │   ├── habitat/          # Página sobre habitat ideal
│   │   │   ├── page.jsx
│   │   │   └── habitat.module.css
│   │   ├── dicas/            # Página de dicas e FAQ
│   │   │   ├── page.jsx
│   │   │   └── dicas.module.css
│   │   ├── not-found.jsx     # Página 404 personalizada
│   │   ├── globals.css       # Estilos globais
│   │   ├── layout.js         # Layout principal
│   │   ├── page.jsx          # Página inicial (Home)
│   │   └── page.module.css   # Estilos da home
│   └── components/           # Componentes reutilizáveis
│       ├── header/
│       │   ├── index.jsx
│       │   └── header.module.css
│       └── footer/
│           ├── index.jsx
│           └── footer.module.css
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
└── README.md
```

## 🎯 Funcionalidades

### 🏠 Página Inicial (Home)

- Hero section com apresentação do projeto
- Cards informativos com direcionamento para habitat e dicas
- Formulário de contato integrado com Formspree
- Links de navegação para todas as seções
- Design responsivo com animações suaves

### 🩺 Página de Cuidados Básicos

- **4 Pilares dos Cuidados:**
  - 🍎 Alimentação Adequada
  - 🛁 Higiene e Limpeza
  - ❤️ Cuidados de Saúde
  - ⏰ Rotina de Cuidados Diários

- **Seções Detalhadas:**
  - Informações específicas sobre cada tópico
  - Listas de recomendações práticas
  - Alimentos proibidos destacados
  - Timeline de rotina diária
  - Sinais de alerta e quando procurar veterinário
  - Botão "Voltar ao topo" em scroll

### 🐹 Página de Espécies

- **Listagem de Espécies:**
  - Cards visuais com informações básicas
  - Hamster Sírio, Anão Russo, Roborovski, etc.
  - Links para páginas de detalhes individuais
  - Design em grid responsivo (2 cards por linha)

- **Páginas de Detalhes (Dinâmicas):**
  - Layout: Imagem à esquerda, informações à direita
  - Nome científico em destaque
  - Cards organizados por categoria:
    - Origem e Habitat (linha 1)
    - Tamanho e Peso (linha 2)
    - Alimentação e Características (linha 3)
    - Curiosidades (linha 4)
    - Longevidade (destaque final)
  - Roteamento dinâmico por nome do hamster
  - Design com gradientes e animações hover

### 🏠 Página de Habitat

- **Tipos de Gaiolas:**
  - Tamanhos mínimos recomendados
  - Aquários vs. Gaiolas de arame
  - O que evitar

- **Brinquedos e Enriquecimento:**
  - Roda de exercício (especificações)
  - Casa e esconderijos
  - Túneis, plataformas e brinquedos
  - Banheira de areia

- **Temperatura e Iluminação:**
  - Faixa ideal de temperatura (18-24°C)
  - Localização adequada da gaiola
  - Ciclo de luz/escuridão

- **Organização do Espaço:**
  - Substrato adequado
  - Distribuição de itens
  - Checklist completo

- **Navegação:**
  - Cards clicáveis para scroll direto às seções
  - Botão "Voltar ao topo"

### 💡 Página de Dicas/FAQ

- **Dicas Práticas (6 cards):**
  - Domesticação gradual
  - Redução de odor
  - Viagens e férias
  - Enriquecimento barato
  - Sinais de felicidade
  - Quando procurar veterinário

- **FAQ Interativo:**
  - 25+ perguntas organizadas em 5 categorias:
    - Comportamento (5 perguntas)
    - Saúde (5 perguntas)
    - Alimentação (5 perguntas)
    - Convivência (5 perguntas)
    - Emergências (5 perguntas)
  - Sistema expansível com `<details>` HTML nativo
  - Sem JavaScript complexo, apenas CSS
  - Ícones + e − automáticos

- **Caixa de Emergência:**
  - Informações sobre situações graves
  - Orientações rápidas

- **Call-to-Action:**
  - Botão para formulário de contato
  - Link direto para seção de contato na home

### 🚫 Página 404 Personalizada

- Design consistente com o resto do site
- Mensagem amigável
- Botão para voltar à página inicial
- Estilização em tons marrons

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- **Backend rodando** (obrigatório para a página de Espécies)

### 1️⃣ Configurar o Backend

⚠️ **Importante:** O projeto depende da API backend para a funcionalidade de espécies. Primeiro, configure o backend:

```bash
# Clone o repositório do backend
git clone https://github.com/gabriela-fernanda14/HamsterGuide-Back.git

# Entre no diretório do backend
cd HamsterGuide-Back

# Siga as instruções de instalação do README do backend
# O backend deve estar rodando em http://localhost:4000
```

### 2️⃣ Configurar o Frontend

```bash
# Clone este repositório
git clone https://github.com/gabriela-fernanda14/hamsterGuide.git

# Entre no diretório
cd hamsterGuide

# Instale as dependências
npm install
# ou
yarn install
```

### 3️⃣ Executar em Desenvolvimento

```bash
# Certifique-se de que o backend está rodando em http://localhost:4000

# Inicie o servidor de desenvolvimento do frontend
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### 4️⃣ Build para Produção

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

### 📝 Observações

- A página de **Espécies** requer que o backend esteja rodando
- Se o backend não estiver disponível, a página de espécies mostrará estado de loading
- Todas as outras páginas funcionam independentemente do backend
- API endpoint padrão: `http://localhost:4000/hamsters/`

### P

### Tipografia

- **Títulos:** Font-weight 600-700, tamanhos responsivos (2rem - 3rem)
- **Corpo:** Line-height 1.6-1.8 para melhor legibilidade
- **Font Stack:** Sistema nativo para performance otimizada

### Componentes

- **Cards:** Border-radius 10-15px, hover com translateY
- **Botões:** Padding 1rem 2rem, transições suaves
- **Formulários:** Inputs com border-radius 8px, focus states
- **FAQ:** Sistema `<details>` HTML nativo, sem JavaScript

## � Links do Projeto

- **Frontend:** [https://github.com/gabriela-fernanda14/hamsterGuide](https://github.com/gabriela-fernanda14/hamsterGuide)
- **Backend:** [https://github.com/gabriela-fernanda14/HamsterGuide-Back](https://github.com/gabriela-fernanda14/HamsterGuide-Back)

O projeto foi desenvolvido garantindo uma experiência otimizada em:

- 📱 **Mobile** (< 480px)
- 📱 **Tablet** (481px - 768px)
- 💻 **Desktop** (> 768px)

## 🔗 Navegação

- **Header** - Logo e informações principais
- **Navigation** - Menu com links para todas as seções
- **Footer** - Informações de contato e links úteis
- **Scroll Suave** - Navegação entre seções da mesma página
- **Botão Voltar ao Topo** - Disponível em páginas longas

## 📧 Formulário de Contato

Integração com **Formspree** para processamento seguro de formulários:

- 📧 Envio por email automático
- 🎯 Feedback visual para o usuário


## 👨‍💻 Desenvolvedor

**Gabriela Fernanda**

- GitHub: [@gabriela-fernanda14](https://github.com/gabriela-fernanda14)

<div align="center">

**Feito com ❤️ para os amantes de hamsters**

[⬆ Voltar ao topo](#-hamster-guide)

</div>
