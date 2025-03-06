import { Techs } from "./components/Techs";
import { ProjectCard } from "./components/ProjectCard";
import perfilImg from "./assets/perfil.png";
import arrowDown from "./assets/CaretDoubleDown.png";
import ProjectOne from "./assets/Project-01.png";
import ProjectTwo from "./assets/Project-02.png";
import ProjectThree from "./assets/Project-03.png";
import { link } from "framer-motion/client";

const projects = [
  {
    title: "Travelgram",
    description:
      "Uma plataforma de compras online com pagamentos integrados e catálogo interativo.",
    image: ProjectOne,
    link: "http://github.com",
  },
  {
    title: "App de Música",
    description:
      "Ferramenta para gerenciar finanças pessoais e acompanhar gastos em tempo real.",
    image: ProjectTwo,
    link: "http://github.com",
  },
  {
    title: "Site de Barbearia",
    description:
      "Sistema EAD para cursos interativos, avaliações e emissão de certificados.",
    image: ProjectThree,
    link: "http://github.com",
  },
];

export default function App() {
  return (
    <>
      <div className="bg-background text-text">
        <section className="bg-background text-text flex h-full py-12">
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
              <h1 className="text-6xl font-bold">
                Desenvolvedor Web Fullstack
              </h1>
              <span className="text-third max-w-200">
                Crio aplicações funcionais e envolventes que transformam
                necessidades em soluções reais. Minha paixão pela tecnologia me
                impulsiona a desenvolver sistemas inovadores e eficientes,
                entregando respostas inteligentes para desafios complexos.
              </span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <Techs />
              <img className="w-8" src={arrowDown} />
            </div>
          </div>
        </section>
        <section className="bg-background text-text flex h-screen py-12">
          <div className="container mx-auto flex h-full max-w-300 flex-col items-center justify-center gap-20 text-center">
            <div className="mx-auto flex flex-col gap-4 text-center">
              <h1 className="text-secondary text-6xl font-bold">
                Meus Projetos
              </h1>
              <span className="text-third">Projetos em Destaque</span>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <div></div>
    </>
  );
}
