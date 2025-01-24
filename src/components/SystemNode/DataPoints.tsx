import { motion } from "framer-motion";

interface DataPointsProps {
  points: string[];
}

export const DataPoints: React.FC<DataPointsProps> = ({ points }) => (
  <div className="data-points-container">
    <div className="text-xs font-medium text-gray-500 mb-2">
      Available Data Points
    </div>
    <div className="space-y-1">
      {points.map((point) => (
        <motion.div
          key={point}
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-sm px-2 py-1 bg-gray-50 rounded flex items-center gap-2"
        >
          <div className="w-1 h-1 rounded-full bg-gray-400" />
          {point}
        </motion.div>
      ))}
    </div>
  </div>
);
