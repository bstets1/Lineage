import { motion } from "framer-motion";

interface DataParticleProps {
  direction: "left" | "right";
  color: string;
  delay: number;
}

export const DataParticle: React.FC<DataParticleProps> = ({
  direction,
  color,
  delay,
}) => (
  <motion.div
    className={`absolute h-2 w-2 rounded-full ${color}`}
    initial={{ x: direction === "right" ? "-10%" : "110%" }}
    animate={{
      x: direction === "right" ? "110%" : "-10%",
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration: 1.5,
      delay,
      repeat: Infinity,
      ease: "linear",
      repeatDelay: 0,
    }}
  />
);
