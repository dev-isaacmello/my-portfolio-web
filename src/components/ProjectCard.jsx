import { motion } from "framer-motion";

export function ProjectCard({ title, description, image, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
      className="border-text flex max-w-sm flex-col items-center gap-2 rounded-4xl border-1 p-4 shadow-lg"
    >
      <img
        src={image}
        alt={title}
        className="h-40 w-full rounded-lg object-cover"
      />
      <div>
        <h2 className="mt-2 text-xl font-bold">{title}</h2>
        <p className="text-text">{description}</p>
      </div>
      <button className="border-text text-text hover:bg-secondary cursor-pointer rounded-4xl border bg-transparent px-4 py-2 font-semibold hover:border-transparent hover:text-white">
        <a href={link} target="_blank">
          Repositório
        </a>
      </button>
    </motion.div>
  );
}
