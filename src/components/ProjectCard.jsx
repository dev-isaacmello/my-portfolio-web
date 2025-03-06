import { motion } from "framer-motion";

export function ProjectCard({ title, description, image, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
      className="border-text flex max-w-sm flex-col items-center gap-2 rounded-lg border-1 p-4 shadow-lg"
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
      <button className="cursor-pointer rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
        <a href={link} target="_blank">
          Repositório
        </a>
      </button>
    </motion.div>
  );
}
