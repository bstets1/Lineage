import { mockRecipe } from "./mockData";
import { SystemType } from "../../types/systems";

export const systems = [
  {
    id: "salesforce",
    systemData: mockRecipe.systems.salesforce,
    type: "source" as SystemType,
    connectionType: "incoming" as const,
    position: null,
  },
  {
    id: "workato",
    systemData: mockRecipe.systems.workato,
    type: "platform" as SystemType,
    connectionType: null,
    position: "mt-8",
  },
  {
    id: "hubspot",
    systemData: mockRecipe.systems.hubspot,
    type: "target" as SystemType,
    connectionType: "outgoing" as const,
    position: null,
  },
];
