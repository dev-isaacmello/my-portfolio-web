import ArrowUp from "../assets/arrow-up.svg";
import { motion } from "framer-motion";

export function Links({ title, link, image }) {
  return (
    <>
      <motion.a
        whileHover={{ scale: 1.02 }}
        className="text-text border-text flex w-100 items-center gap-4 rounded-full border-1 p-4"
        href={link}
        target="_self"
      >
        <img className="w-8" src={image} />
        <span>{title}</span>
        <img className="ml-auto w-5" src={ArrowUp} />
      </motion.a>
    </>
  );
}
