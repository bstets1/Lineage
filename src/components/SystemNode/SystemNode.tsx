// src/components/SystemNode/SystemNode.tsx
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Settings,
  ChevronDown,
  ChevronUp,
  Workflow,
} from "lucide-react";
import { SystemType, System } from "../../types";
import { ActionItem } from "./ActionItem";
import { DataPoints } from "./DataPoints";

interface SystemNodeProps {
  system: System;
  type: SystemType;
  isExpanded: boolean;
  isActive: boolean;
  onClick: () => void;
}

const systemColors: Record<SystemType, { bg: string; ring: string }> = {
  source: { bg: "from-blue-500 to-blue-600", ring: "ring-blue-500" },
  target: { bg: "from-green-500 to-green-600", ring: "ring-green-500" },
  platform: { bg: "from-purple-500 to-purple-600", ring: "ring-purple-500" },
};

export const SystemNode: React.FC<SystemNodeProps> = ({
  system,
  type,
  isExpanded,
  isActive,
  onClick,
}) => {
  const { bg, ring } = systemColors[type];

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      className={`p-4 rounded-lg bg-red shadow-lg w-64 cursor-pointer relative
        ${isActive ? "ring-2 ring-offset-2" : "border"} 
        ${isActive ? ring : ""}`}
      onClick={onClick}
    >
      <div
        className={`absolute top-0 left-0 h-1 w-full rounded-t-lg bg-gradient-to-r ${bg}`}
      />
      <div className="flex items-center justify-between mb-2 mt-1">
        <div className="flex items-center gap-2">
          {type === "platform" ? (
            <Workflow className="w-4 h-4 text-purple-500" />
          ) : (
            <Database
              className={`w-4 h-4 ${type === "source" ? "text-blue-500" : "text-green-500"}`}
            />
          )}
          <span className="font-bold">{system.name}</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </div>
      <div className="text-sm text-gray-600">{system.type}</div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-3 pt-3 border-t overflow-hidden"
          >
            {system.dataPoints && <DataPoints points={system.dataPoints} />}
            {system.actions && (
              <div>
                <div className="text-xs font-medium text-gray-500 mb-2">
                  Recipe Steps
                </div>
                <div className="space-y-2">
                  {system.actions.map((action, idx) => (
                    <ActionItem key={idx} action={action} index={idx} />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
