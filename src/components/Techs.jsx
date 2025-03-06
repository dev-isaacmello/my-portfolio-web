import gitHubLogo from "../assets/github.svg";
import cssLogo from "../assets/css.svg";
import HtmlLogo from "../assets/html.svg";
import javaScriptLogo from "../assets/javascript.svg";
import reactLogo from "../assets/react.svg";
import tailwindLogo from "../assets/Tailwind.svg";

export function Techs() {
  return (
    <>
      <ul className="flex items-center gap-6">
        <li className="flex flex-col items-center">
          <img className="w-10" src={gitHubLogo} alt="Github Logotipo" />
          <span>GitHub</span>
        </li>
        <li className="flex flex-col items-center">
          <img
            className="w-10 fill-amber-50"
            src={HtmlLogo}
            alt="Css Logotipo"
          />
          <span>Html</span>
        </li>
        <li className="flex flex-col items-center">
          <img className="w-10" src={cssLogo} alt="Css Logotipo" />
          <span>Css</span>
        </li>
        <li className="flex flex-col items-center">
          <img
            className="w-10"
            src={javaScriptLogo}
            alt="Javascript Logotipo"
          />
          <span>JavaScript</span>
        </li>
        <li className="flex flex-col items-center">
          <img className="w-10" src={reactLogo} alt="React Logotipo" />
          <span>React</span>
        </li>
        <li className="flex flex-col items-center">
          <img className="w-10" src={tailwindLogo} alt="TailwindCSS Logotipo" />
          <span>Tailwind CSS</span>
        </li>
      </ul>
    </>
  );
}
