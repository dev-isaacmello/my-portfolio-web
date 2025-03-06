import ArrowUp from "../assets/arrow-up.svg";

export function Links({ title, link, image }) {
  return (
    <>
      <a
        className="bg-background text-text border-text flex w-100 rounded-full border-1 p-4 items-center gap-2"
        href="#"
        onClick={() => window.open(link)}
      >
        <img src={image} />
        <span>{title}</span>
      <img className="w-8 ml-auto" src={ArrowUp} />
      </a>
    </>
  );
}
