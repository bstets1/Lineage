import { Action } from "..";

export interface SystemNodeProps {
  system: System;
  type: SystemType;
  isExpanded: boolean;
  isActive: boolean;
  onClick: () => void;
}

export type SystemType = "source" | "platform" | "target";

export interface System {
  name: string;
  type: string;
  dataPoints?: string[];
  actions?: Action[];
}
