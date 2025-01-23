import { motion } from "framer-motion";
import { DataParticle } from "./DataParticles";

interface ConnectionProps {
  type: "incoming" | "outgoing";
  isActive: boolean;
  onConnectionClick: () => void;
}

export const Connection: React.FC<ConnectionProps> = ({
  type,
  isActive,
  onConnectionClick,
}) => {
  const particles = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    delay: i * 0.4,
  }));

  return (
    <div
      className="flex-1 relative flex items-center cursor-pointer group"
      onClick={onConnectionClick}
    >
      <motion.div
        className="w-full h-8 relative"
        initial={false}
        animate={isActive ? { opacity: 1 } : { opacity: 0.3 }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 rounded-full 
          group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-green-500/20 transition-colors"
        />
        <div className="relative h-0.5 w-full bg-gray-200">
          {isActive && (
            <div className="absolute inset-0 overflow-hidden">
              {particles.map(({ id, delay }) => (
                <DataParticle
                  key={id}
                  direction={type === "incoming" ? "right" : "left"}
                  color={type === "incoming" ? "bg-blue-500" : "bg-green-500"}
                  delay={delay}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
