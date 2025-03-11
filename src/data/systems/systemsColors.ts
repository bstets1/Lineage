import { SystemType } from "../../types/systems";

export const systemColors: Record<SystemType, { bg: string; ring: string }> = {
  source: { bg: "from-blue-500 to-blue-600", ring: "ring-blue-500" },
  target: { bg: "from-green-500 to-green-600", ring: "ring-green-500" },
  platform: { bg: "from-purple-500 to-purple-600", ring: "ring-purple-500" },
};
