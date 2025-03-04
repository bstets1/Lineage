import { useState } from "react";
import { motion } from "framer-motion";
import { SystemNode } from "../nodes/SystemNode";
import { mockRecipe } from "../../data/systems/mockData";
import { systems } from "../../data/systems/systemsData";

const RecipeVisualizer = () => {
  const [expandedSystems, setExpandedSystems] = useState<Set<string>>(
    new Set(),
  );
  const [activeConnection] = useState<"incoming" | "outgoing" | null>(null);

  const toggleSystem = (systemId: string) => {
    setExpandedSystems((prevExpanded) => {
      const newExpanded = new Set(prevExpanded);
      if (newExpanded.has(systemId)) {
        newExpanded.delete(systemId);
      } else {
        newExpanded.add(systemId);
      }
      return newExpanded;
    });
  };

  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-bold mb-12 text-center"
        >
          {mockRecipe.name}
        </motion.h2>

        <div className="flex items-start justify-between gap-8">
          {systems.map((system) => (
            <motion.div key={system.id} className={system.position ?? ""}>
              <SystemNode
                system={system.systemData}
                type={system.type}
                isExpanded={expandedSystems.has(system.id)}
                isActive={activeConnection === system.connectionType}
                onClick={() => toggleSystem(system.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeVisualizer;
