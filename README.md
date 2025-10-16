# Isaac Mello - Portfolio Web

Portfolio pessoal desenvolvido com Astro e Tailwind CSS v4, apresentando um design espacial moderno, toggle dark/light mode e suporte multilíngue.

## ✨ Características

- **🎨 Design Espacial Moderno**: Tema com animações de estrelas e efeitos de brilho
- **🌓 Dark/Light Mode**: Toggle suave entre temas escuro e claro com preferência salva
- **🌍 Multilíngue**: Suporte completo para Português, Inglês e Espanhol
- **⚡ Performance**: Construído com Astro para máxima performance e SEO
- **📱 Responsivo**: Design adaptável para todos os dispositivos
- **✨ Animações**: Efeitos suaves e modernos usando CSS puro
- **🎯 Glassmorphism**: Elementos com efeito de vidro fosco
- **🌈 Gradientes Animados**: Bordas e elementos com gradientes coloridos

## 🛠 Tecnologias

- [Astro](https://astro.build) v5.0 - Framework web all-in-one
- [Tailwind CSS](https://tailwindcss.com) v4.1 - Framework CSS utilitário de última geração
- [TypeScript](https://www.typescriptlang.org) - JavaScript com tipos estáticos

## 📁 Estrutura do Projeto

```
/
├── public/              # Assets estáticos (imagens, ícones)
├── src/
│   ├── components/      # Componentes Astro reutilizáveis
│   │   ├── ContactLink.astro
│   │   ├── ContactSection.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── LanguagePicker.astro
│   │   ├── ProjectCard.astro
│   │   ├── ProjectsSection.astro
│   │   ├── SkillCard.astro
│   │   ├── SkillsSection.astro
│   │   ├── TechStack.astro
│   │   └── ThemeToggle.astro
│   ├── i18n/           # Configuração de internacionalização
│   │   ├── languages.ts
│   │   └── utils.ts
│   ├── layouts/        # Layouts principais
│   │   └── Layout.astro
│   ├── pages/          # Páginas do site (pt, en, es)
│   │   ├── en/
│   │   ├── es/
│   │   └── index.astro
│   └── styles/         # Estilos globais
│       └── global.css
├── astro.config.mjs    # Configuração do Astro
└── package.json
```

## 🚀 Comandos

| Comando           | Ação                                       |
| :---------------- | :----------------------------------------- |
| `npm install`     | Instala as dependências                    |
| `npm run dev`     | Inicia servidor local em `localhost:4321`  |
| `npm run build`   | Cria build de produção em `./dist/`        |
| `npm run preview` | Preview da build localmente                |

## 💻 Iniciar Projeto

1. Clone o repositório
   ```bash
   git clone https://github.com/dzordii/my-portfolio-web.git
   ```

2. Entre na pasta do projeto
   ```bash
   cd my-portfolio-web
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Acesse `http://localhost:4321`

## 🌐 Idiomas Disponíveis

- **Português** (padrão): `/`
- **Inglês**: `/en`
- **Espanhol**: `/es`

## 🎨 Temas

O portfólio conta com dois temas:
- **Dark Mode**: Tema espacial escuro com estrelas animadas
- **Light Mode**: Tema claro e moderno com gradientes suaves

O tema é salvo automaticamente e persiste entre as sessões.

## 📦 Build e Deploy

Para criar uma build de produção:

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/` prontos para deploy em qualquer serviço de hospedagem estática:
- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

## 🎯 Features Implementadas

### Componentes Principais
- ✅ Header com navegação flutuante
- ✅ Toggle dark/light mode animado
- ✅ Seletor de idiomas com dropdown
- ✅ Seção Hero com foto e apresentação
- ✅ Stack de tecnologias com hover effects
- ✅ Cards de projetos com glassmorphism
- ✅ Cards de habilidades com animações
- ✅ Links de contato interativos
- ✅ Footer com redes sociais

### Efeitos Visuais
- ✅ Animação de estrelas no background (dark mode)
- ✅ Gradientes animados em bordas
- ✅ Efeito glassmorphism em cards
- ✅ Transições suaves entre temas
- ✅ Hover effects em todos os elementos
- ✅ Animações de entrada (fade in up)
- ✅ Glow effects em textos e elementos

## 📞 Contato

- **GitHub**: [dzordii](https://github.com/dzordii)
- **LinkedIn**: [Isaac Mello](https://www.linkedin.com/in/isaac-mello-168404281/)
- **WhatsApp**: [+55 51 99589-4049](https://api.whatsapp.com/send?phone=5551995894049)
- **Email**: isaacmello@rede.ulbra.br

---

Desenvolvido com ❤️ usando Astro + Tailwind CSS v4 por Isaac Mello - 2025
