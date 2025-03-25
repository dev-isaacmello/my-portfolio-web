import { motion } from "framer-motion";

export function ProjectCard({
  title,
  description,
  image,
  link,
  techs,
  action,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="border-text flex max-w-sm flex-col items-center gap-2 rounded-4xl border-1 p-4 shadow-lg"
    >
      <img
        src={image}
        alt={title}
        className="h-40 w-full rounded-2xl object-cover"
      />
      <div className="mt-auto flex flex-col gap-2">
        <h2 className="mt-2 text-xl font-bold">{title}</h2>
        <p className="text-third font-sans">{description}</p>
        <span className="text-secondary">{techs}</span>
      </div>

      <button className="border-text text-text hover:bg-secondary mt-auto cursor-pointer rounded-3xl border bg-transparent px-4 py-2 font-semibold transition-colors hover:border-transparent hover:text-white">
        <a href={link} target="_blank">
          {action}
        </a>
      </button>
    </motion.div>
  );
}
