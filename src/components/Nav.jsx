export function Nav() {
  return (
    <header>
      <nav className="text-text mx-auto flex max-w-200 items-center justify-between p-4">
        <h1 className="font-bold uppercase"> Isaac Mello </h1>
        <ul className="flex gap-6 font-bold uppercase">
          <li className="hover:text-hover transition-all">
            <a href="#">Inicio</a>
          </li>
          <li className="hover:text-hover transition-all">
            <a href="#">Sobre</a>
          </li>
          <li className="hover:text-hover transition-all">
            <a href="#">Projetos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
