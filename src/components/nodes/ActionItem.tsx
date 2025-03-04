import { motion } from "framer-motion";
import { Settings } from "lucide-react";
import { Action } from "../../types";

interface ActionItemProps {
  action: Action;
  index: number;
}

export const ActionItem: React.FC<ActionItemProps> = ({ action, index }) => (
  <>
    <div className="action-item-container">
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: index * 0.1 }}
        className="text-sm p-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg"
      >
        <div className="font-medium flex items-center gap-2">
          <Settings className="w-3 h-3" />
          {action.name}
        </div>
        <div className="text-xs text-gray-500 mt-1">{action.type}</div>
        {action.details && (
          <div className="mt-2 space-y-1">
            {Object.entries(action.details).map(([field, transform]) => (
              <div
                key={field}
                className="text-xs bg-white p-1.5 rounded-md border border-gray-100 flex justify-between"
              >
                <span className="text-gray-600">{field}</span>
                <span className="text-purple-600">{transform}</span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  </>
);
