export function Skills({ image, title, description }) {
  return (
    <div className="bg-background text-text border-text flex flex-col items-start rounded-xl border-1 p-6">
      <img src={image} />
      <h1 className="text-secondary text-2xl">{title}</h1>
      <span className="text-start text-xs text-gray-500">{description}</span>
    </div>
  );
}
