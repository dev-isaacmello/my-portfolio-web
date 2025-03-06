export function ProjectCard({ title, description, image, link }) {
  return (
    <div className="max-w-sm rounded-lg bg-gray-600 p-4 shadow-lg">
      <img
        src={image}
        alt={title}
        className="h-40 w-full rounded-lg object-cover"
      />
      <h2 className="mt-2 text-xl font-bold">{title}</h2>
      <p className="text-text">{description}</p>
      <button>
        <a href={link}>Repositório</a>
      </button>
    </div>
  );
}
