export default function Nav() {
  return (
    <>
      <header>
        <nav className="flex text-gray-900 justify-between items-center p-4 max-w-300 mx-auto">
          <h1> Isaac Mello </h1>
          <ul className="flex gap-6">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Projetos</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
