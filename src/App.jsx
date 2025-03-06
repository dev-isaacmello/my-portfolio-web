import { Nav } from "./components/Nav";
import { Techs } from "./components/Techs";
import perfilImg from "./assets/perfil.png";

export default function App() {
  return (
    <>
      <div className="bg-background text-text h-full">
        <header className="container mx-auto py-2">
          <Nav />
        </header>
        <section className="flex py-12">
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
              <span className="max-w-200 text-gray-500">
                Crio aplicações funcionais e envolventes que transformam
                necessidades em soluções reais. Minha paixão pela tecnologia me
                impulsiona a desenvolver sistemas inovadores e eficientes,
                entregando respostas inteligentes para desafios complexos.
              </span>
            </div>
            <div className="align-center flex gap-6">
              <Techs />
            </div>
          </div>
        </section>
      </div>
      <div></div>
    </>
  );
}
