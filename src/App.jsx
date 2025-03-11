import { Techs } from "./components/Techs";
import { ProjectCard } from "./components/ProjectCard";
import { Skills } from "./components/Skills";
import { Links } from "./components/Links";
import perfilImg from "./assets/perfil.png";
import arrowDown from "./assets/CaretDoubleDown.png";
import ProjectOne from "./assets/Project-01.png";
import ProjectTwo from "./assets/Project-02.png";
import ProjectThree from "./assets/Project-03.png";
import Github from "./assets/GitHub.svg";
import Linkedin from "./assets/Linkedin.svg";
import Whatsapp from "./assets/Whatsapp.svg";
import Email from "./assets/email.svg";
import Paint from "./assets/paint.svg";
import Lamp from "./assets/lamp.svg";
import Project from "./assets/project.svg";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Travelgram Perfil de Viagens",
    description:
      "Um dos meus primeiros projetos desenvolvidos, sem funcionalidades, apenas o layout utilizando HTML, CSS e Javascript para realizar animações.",
    image: ProjectOne,
    link: "https://github.com/dzordii/travelgram-project.git",
    action: "Ver Repositório",
    techs: "HTML, CSS & Javascript",
  },
  {
    title: "Website de Barbearia",
    description:
      "Projeto real para uma barbearia, utilizando HTML, CSS e Javascript para realizar animações e interações com o usuário.",
    image: ProjectTwo,
    link: "https://barbeariaurbancut.com.br/",
    action: "Ver Website",
    techs: "Html, CSS & Javascript",
  },
  {
    title: "Este Portfólio",
    description: "Portfólio sobre mim, com projetos e informações pessoais.",
    image: ProjectThree,
    link: "https://github.com/dzordii/my-portfolio-web",
    action: "Ver Repositório",
    techs: "React, Tailwind CSS & Framer Motion",
  },
];

const skills = [
  {
    image: Lamp,
    title: "Aprendizado Contínuo e Compartilhamento",
    description:
      "Sou apaixonado por tecnologia e estou sempre buscando aprender e evoluir. Pretendo compartilhar meus conhecimentos por meio de tutoriais e desafios resolvidos, pois acredito que ensinar também é uma forma poderosa de aprendizado.",
  },
  {
    image: Project,
    title: "Projetos Práticos e Criativos",
    description:
      "Minha abordagem vai além da teoria: desenvolvo projetos que resolvem problemas reais e agregam valor. Utilizo tecnologias como React, TypeScript e Python para criar aplicações interativas, sempre priorizando boas práticas de código.",
  },
  {
    image: Paint,
    title: "Design Moderno e Experiência Fluida",
    description:
      "Acredito que um bom design faz toda a diferença. Utilizo Tailwind CSS para criar interfaces modernas e responsivas, focando na experiência do usuário e na performance para garantir aplicações rápidas e eficientes.",
  },
];

const links = [
  {
    title: "GitHub",
    link: "https://github.com/dzordii",
    image: Github,
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/isaac-mello-168404281/",
    image: Linkedin,
  },
  {
    title: "Whatsapp",
    link: "https://api.whatsapp.com/send?phone=5551995894049",
    image: Whatsapp,
  },
  {
    title: "isaacmello@rede.ulbra.br",
    image: Email,
  },
];

export function App() {
  return (
    <>
      <div className="text-text bg-[url(./assets/background.jpg)] bg-cover bg-center bg-no-repeat">
        <section className="text-text h-screnn flex py-12">
          <div className="container mx-auto flex h-full max-w-300 flex-col items-center justify-center p-6 text-center">
            <img
              className="w-40 rounded-full border-2 border-white"
              src={perfilImg}
              alt="Imagem de Perfil"
            />
            <div className="flex flex-col items-center justify-center gap-2 p-6">
              <span>
                Bem vindos ao meu Portfólio Web! Meu nome é{" "}
                <span className="text-secondary">Isaac Mello</span> e eu sou
              </span>
              <h1 className="text-7xl font-bold">Desenvolvedor Web</h1>
              <span className="text-third max-w-200">
                Crio aplicações funcionais e envolventes que transformam
                necessidades em soluções reais. Minha paixão pela tecnologia me
                impulsiona a desenvolver sistemas inovadores e eficientes,
                entregando respostas inteligentes para desafios complexos.
              </span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <Techs />
              <motion.button
                onClick={() => {
                  window.scrollTo(0, 600, { behavior: "smooth" });
                }}
                className="cursor-pointer"
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
              >
                <img className="w-8" src={arrowDown} />
              </motion.button>
            </div>
          </div>
        </section>
        <section className="text-text h-screnn flex py-12">
          <div className="container mx-auto flex h-full max-w-300 flex-col items-center justify-center gap-10 text-center">
            <div className="mx-auto flex flex-col gap-2 text-center">
              <h1 className="text-text">Meus Projetos</h1>
              <span className="text-secondary text-6xl font-bold">
                Projetos em Destaque
              </span>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  action={project.action}
                  techs={project.techs}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="text-text flex h-full py-12">
          <div className="container mx-auto flex h-full max-w-270 flex-col items-center justify-center gap-10 text-center">
            <div>
              <h1 className="text-third text-2xl">Meus Diferenciais</h1>
              <span className="text-text text-4xl font-bold">
                Como eu posso ajuda no seu negócio.
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <Skills
                  key={index}
                  title={skill.title}
                  description={skill.description}
                  image={skill.image}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="text-text flex h-screen py-12">
          <div className="container mx-auto flex h-full max-w-300 flex-col items-center justify-center gap-10 text-center">
            <div className="flex flex-col text-center">
              <span className="text-text">Contato</span>
              <h1 className="text-secondary text-4xl font-bold">
                Gostou do meu trabalho?
              </h1>
              <span className="text-third">
                Entre em contato comigo ou acompanhe minhas redes sociais!
              </span>
            </div>
            <div className="flex flex-col gap-6">
              {links.map((link, index) => (
                <Links
                  key={index}
                  title={link.title}
                  link={link.link}
                  image={link.image}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
