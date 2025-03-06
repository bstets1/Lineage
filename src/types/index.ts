import { System } from "./systems";

export interface Action {
  type: "trigger" | "transformation" | "action";
  name: string;
  system?: string;
  details?: Record<string, string>;
}

export interface Recipe {
  name: string;
  systems: {
    [key: string]: System;
  };
}
