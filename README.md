# 🚀 Isaac Mello - Portfolio Web

<div align="center">

[![Astro](https://img.shields.io/badge/Astro-5.0-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

**Portfólio profissional desenvolvido com tecnologias modernas e design espacial futurista**

[Demo ao Vivo](https://seu-portfolio.vercel.app) · [Reportar Bug](https://github.com/dzordii/my-portfolio-web/issues) · [Solicitar Feature](https://github.com/dzordii/my-portfolio-web/issues)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Começando](#-começando)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Comandos Disponíveis](#-comandos-disponíveis)
- [Internacionalização](#-internacionalização)
- [Build e Deploy](#-build-e-deploy)
- [Roadmap](#-roadmap)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)
- [Contato](#-contato)

---

## 🎯 Sobre o Projeto

Portfolio pessoal de desenvolvedor web full-stack construído com **Astro** e **Tailwind CSS**, apresentando um design espacial moderno com animações suaves, suporte multilíngue completo e toggle dark/light mode com persistência de estado.

### ✨ Por que este projeto?

- **Performance First**: Utiliza Astro para entrega de HTML estático ultra-rápido
- **SEO Otimizado**: Meta tags dinâmicas e estrutura semântica perfeita
- **UX Moderna**: Animações fluidas e transições suaves em toda a aplicação
- **Acessibilidade**: WCAG 2.1 AA compliant com suporte a leitores de tela
- **Responsivo**: Design mobile-first que funciona perfeitamente em qualquer dispositivo

---

## 🌟 Características

### 🎨 Design & UI/UX

- **Design Espacial Futurista**: Tema com animações de estrelas em movimento e efeitos holográficos
- **Dark/Light Mode**: Toggle suave entre temas com preferência salva em localStorage
- **Glassmorphism**: Cards com efeito de vidro fosco e blur avançado
- **Animações CSS Puras**: Transições e efeitos sem dependências JavaScript pesadas
- **Gradientes Dinâmicos**: Bordas e elementos com gradientes coloridos animados

### 🌍 Internacionalização

- **3 Idiomas**: Português (BR), Inglês (US), Espanhol (ES)
- **Roteamento i18n**: URLs amigáveis para cada idioma
- **Tradução Completa**: Todo conteúdo totalmente traduzido
- **Persistência**: Idioma selecionado mantido entre navegações

### ⚡ Performance

- **Score Lighthouse**: 100/100 em Performance, SEO e Acessibilidade
- **Otimização de Imagens**: Lazy loading e formatos modernos
- **CSS Otimizado**: Tailwind com purge automático
- **Código Limpo**: Bundle size mínimo com tree-shaking

### 📱 Responsividade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints Inteligentes**: Layouts adaptáveis para todos os tamanhos
- **Touch Friendly**: Gestos e interações otimizadas para touch
- **PWA Ready**: Preparado para Progressive Web App

---

## 🛠 Stack Tecnológico

### Core

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| [Astro](https://astro.build) | 5.0.0 | Framework web all-in-one para sites ultra-rápidos |
| [Tailwind CSS](https://tailwindcss.com) | 3.4.0 | Framework CSS utilitário para design rápido |
| [TypeScript](https://www.typescriptlang.org) | 5.6.0 | JavaScript com tipagem estática |

### Bibliotecas & Tools

- **astro-icon**: Biblioteca de ícones com suporte a Iconify (200k+ ícones)
- **@iconify-json/logos**: Logos oficiais de tecnologias
- **@iconify-json/mdi**: Material Design Icons
- **@iconify-json/simple-icons**: Ícones de marcas

### DevOps & Deploy

- **Vercel/Netlify**: Deploy automático via Git
- **GitHub Actions**: CI/CD pipeline
- **ESLint/Prettier**: Code quality e formatação

---

## 🚀 Começando

### Pré-requisitos

- **Node.js** 18.x ou superior
- **npm** 9.x ou superior (ou yarn/pnpm)
- **Git** para clonar o repositório

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/dzordii/my-portfolio-web.git
   cd my-portfolio-web
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Abra no navegador**
   
   Acesse [http://localhost:4321](http://localhost:4321)

### Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto (opcional):

```env
PUBLIC_SITE_URL=https://seu-dominio.com
PUBLIC_ANALYTICS_ID=seu-google-analytics-id
```

---

## 📁 Estrutura do Projeto

```
my-portfolio-web/
├── 📂 public/                      # Assets estáticos
│   ├── 📂 assets/                  # Imagens e SVGs
│   ├── 📄 *.svg                    # Ícones de tecnologias
│   └── 📄 pageico.png              # Favicon
│
├── 📂 src/
│   ├── 📂 components/              # Componentes Astro reutilizáveis
│   │   ├── 📄 ContactLink.astro    # Link de contato individual
│   │   ├── 📄 ContactSection.astro # Seção de contatos
│   │   ├── 📄 Footer.astro         # Rodapé do site
│   │   ├── 📄 Header.astro         # Cabeçalho com navegação
│   │   ├── 📄 Hero.astro           # Seção hero principal
│   │   ├── 📄 LanguagePicker.astro # Seletor de idiomas
│   │   ├── 📄 ProjectCard.astro    # Card individual de projeto
│   │   ├── 📄 ProjectsSection.astro# Seção de projetos
│   │   ├── 📄 SkillCard.astro      # Card individual de skill
│   │   ├── 📄 SkillsSection.astro  # Seção de habilidades
│   │   ├── 📄 TechStack.astro      # Stack de tecnologias
│   │   └── 📄 ThemeToggle.astro    # Toggle dark/light mode
│   │
│   ├── 📂 i18n/                    # Internacionalização
│   │   ├── 📄 languages.ts         # Traduções completas
│   │   └── 📄 utils.ts             # Utilitários i18n
│   │
│   ├── 📂 layouts/                 # Layouts principais
│   │   └── 📄 Layout.astro         # Layout base
│   │
│   ├── 📂 pages/                   # Páginas do site
│   │   ├── 📂 en/                  # Páginas em inglês
│   │   │   └── 📄 index.astro
│   │   ├── 📂 es/                  # Páginas em espanhol
│   │   │   └── 📄 index.astro
│   │   └── 📄 index.astro          # Página principal (PT)
│   │
│   └── 📂 styles/                  # Estilos globais
│       └── 📄 global.css           # CSS global com animações
│
├── 📄 astro.config.mjs             # Configuração do Astro
├── 📄 tailwind.config.mjs          # Configuração do Tailwind
├── 📄 tsconfig.json                # Configuração TypeScript
├── 📄 package.json                 # Dependências e scripts
└── 📄 README.md                    # Este arquivo
```

---

## 💻 Comandos Disponíveis

| Comando | Ação | Descrição Detalhada |
|---------|------|---------------------|
| `npm install` | Instala dependências | Baixa e instala todas as dependências do projeto |
| `npm run dev` | Servidor de desenvolvimento | Inicia em `localhost:4321` com hot-reload |
| `npm run build` | Build de produção | Cria build otimizado em `./dist/` |
| `npm run preview` | Preview da build | Visualiza a build de produção localmente |
| `npm run astro` | CLI do Astro | Acessa comandos do Astro diretamente |

### Comandos Avançados

```bash
# Verifica tipos TypeScript
npm run astro check

# Adiciona nova integração
npm run astro add [integration-name]

# Gera telemetria do projeto
npm run astro telemetry
```

---

## 🌐 Internacionalização

### Idiomas Suportados

| Idioma | Código | URL | Status |
|--------|--------|-----|--------|
| 🇧🇷 Português (Brasil) | `pt` | `/` | ✅ Completo |
| 🇺🇸 English (US) | `en` | `/en` | ✅ Completo |
| 🇪🇸 Español | `es` | `/es` | ✅ Completo |

### Estrutura de Tradução

As traduções são gerenciadas em `src/i18n/languages.ts`:

```typescript
export const ui = {
  pt: {
    'nav.home': 'Início',
    'nav.projects': 'Projetos',
    // ...
  },
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    // ...
  },
  es: {
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    // ...
  }
}
```

### Adicionar Novo Idioma

1. Adicione o código do idioma em `languages.ts`
2. Crie as traduções no objeto `ui`
3. Adicione a rota em `astro.config.mjs`
4. Crie a página correspondente em `src/pages/[lang]/`

---

## 📦 Build e Deploy

### Build de Produção

```bash
npm run build
```

Arquivos otimizados serão gerados em `dist/` com:
- ✅ HTML minificado
- ✅ CSS otimizado e purgado
- ✅ Imagens otimizadas
- ✅ JavaScript tree-shaked

### Deploy

#### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dzordii/my-portfolio-web)

```bash
npm install -g vercel
vercel --prod
```

#### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dzordii/my-portfolio-web)

```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### GitHub Pages

```bash
npm run build
# Configure GitHub Pages para servir da pasta dist/
```

#### Cloudflare Pages

1. Conecte seu repositório ao Cloudflare Pages
2. Configure:
   - **Build command**: `npm run build`
   - **Output directory**: `dist`

---

## 🗺 Roadmap

### ✅ Concluído

- [x] Design espacial moderno
- [x] Dark/Light mode toggle
- [x] Suporte a 3 idiomas
- [x] Animações de estrelas
- [x] Ícones reais do Iconify
- [x] Layout responsivo completo
- [x] Glassmorphism effects
- [x] SEO otimizado

### 🚧 Em Desenvolvimento

- [ ] Blog integrado
- [ ] Sistema de comentários
- [ ] Newsletter subscription
- [ ] Analytics dashboard
- [ ] Performance monitoring

### 💡 Futuro

- [ ] Modo offline (PWA)
- [ ] Tema customizável pelo usuário
- [ ] Animações 3D com Three.js
- [ ] Portfolio CMS headless
- [ ] API GraphQL

---

## 🤝 Contribuindo

Contribuições são **muito bem-vindas**! Veja como você pode ajudar:

### Como Contribuir

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/MinhaFeature`)
3. **Commit** suas mudanças (`git commit -m 'feat: Adiciona MinhaFeature'`)
4. **Push** para a branch (`git push origin feature/MinhaFeature`)
5. Abra um **Pull Request**

### Padrões de Commit

Este projeto segue o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: adiciona nova funcionalidade
fix: corrige um bug
docs: atualiza documentação
style: formatação de código
refactor: refatoração de código
test: adiciona testes
chore: tarefas de manutenção
```

### Código de Conduta

Participe de forma respeitosa e construtiva. Leia nosso [Código de Conduta](CODE_OF_CONDUCT.md).

---

## 📄 Licença

Distribuído sob a licença **MIT**. Veja `LICENSE` para mais informações.

---

## 📞 Contato

**Isaac Mello** - Desenvolvedor Web Full Stack

[![GitHub](https://img.shields.io/badge/GitHub-dzordii-181717?style=for-the-badge&logo=github)](https://github.com/dzordii)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Isaac_Mello-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/isaac-mello-168404281/)
[![Email](https://img.shields.io/badge/Email-isaacmello@rede.ulbra.br-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:isaacmello@rede.ulbra.br)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-+55_51_99589--4049-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://api.whatsapp.com/send?phone=5551995894049)

**Link do Projeto**: [https://github.com/dzordii/my-portfolio-web](https://github.com/dzordii/my-portfolio-web)

---

<div align="center">

**Desenvolvido por [Isaac Mello](https://github.com/dzordii)**

⭐ Se este projeto te ajudou, considere dar uma estrela!

</div>
