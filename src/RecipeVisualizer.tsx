import { useState } from "react";
import { motion } from "framer-motion";
import { SystemNode } from "./components/SystemNode/SystemNode";
import { mockRecipe } from "./data/mockData";

const RecipeVisualizer = () => {
  const [expandedSystem, setExpandedSystem] = useState<string | null>(null);
  const [activeConnection] = useState<"incoming" | "outgoing" | null>(null);

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
          <SystemNode
            system={mockRecipe.systems.salesforce}
            type="source"
            isExpanded={expandedSystem === "salesforce"}
            isActive={activeConnection === "incoming"}
            onClick={() =>
              setExpandedSystem(
                expandedSystem === "salesforce" ? null : "salesforce",
              )
            }
          />

          <motion.div className="mt-8">
            <SystemNode
              system={mockRecipe.systems.workato}
              type="platform"
              isExpanded={expandedSystem === "workato"}
              isActive={expandedSystem === "workato"}
              onClick={() =>
                setExpandedSystem(
                  expandedSystem === "workato" ? null : "workato",
                )
              }
            />
          </motion.div>

          <SystemNode
            system={mockRecipe.systems.hubspot}
            type="target"
            isExpanded={expandedSystem === "hubspot"}
            isActive={activeConnection === "outgoing"}
            onClick={() =>
              setExpandedSystem(expandedSystem === "hubspot" ? null : "hubspot")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeVisualizer;
