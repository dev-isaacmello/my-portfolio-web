import gitHubLogo from "../assets/github.svg";
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import javaScriptLogo from "../assets/javascript.svg";
import reactLogo from "../assets/react.svg";
import tailwindLogo from "../assets/tailwindcss.svg";

// Falta arrumar a largura de cada imagem para que fiquem fixas

export function Techs() {
  return (
    <>
      <ul className="flex items-center gap-6">
        <li className="flex flex-col items-center">
          <img className="w-10" src={gitHubLogo} alt="Github Logotipo" />
          <span>GitHub</span>
        </li>
        <li className="flex flex-col items-center">
          <img className="w-10" src={htmlLogo} alt="Html Logotipo" />
          <span>Html</span>
        </li>
        <li className="flex flex-col items-center">
          <img className="w-10" src={cssLogo} alt="Css Logotipo" />
          <span>GitHub</span>
        </li>
        <li className="flex flex-col items-center">
          <img
            className="w-10"
            src={javaScriptLogo}
            alt="Javascript Logotipo"
          />
          <span>GitHub</span>
        </li>
        <li className="flex flex-col items-center">
          <img className="w-10" src={reactLogo} alt="React Logotipo" />
          <span>GitHub</span>
        </li>
        <li className="flex flex-col items-center">
          <img className="w-10" src={tailwindLogo} alt="TailwindCSS Logotipo" />
          <span>GitHub</span>
        </li>
      </ul>
    </>
  );
}
