import { Recipe } from "../../types";

export const mockRecipe: Recipe = {
  name: "Customer Data Sync",
  systems: {
    salesforce: {
      name: "Salesforce",
      type: "CRM",
      dataPoints: ["customer_id", "email", "name", "account_status"],
    },
    workato: {
      name: "workato",
      type: "iPaaS",
      actions: [
        {
          type: "trigger",
          name: "On Customer Update",
          system: "salesforce",
        },
        {
          type: "transformation",
          name: "Form Data",
          details: {
            customer_id: "string -> int",
            email: "lowercase",
            name: "titlecase",
            account_status: "enum mapping",
          },
        },
        {
          type: "action",
          name: "Update Contact",
          system: "hubspot",
        },
      ],
    },
    hubspot: {
      name: "hubspot",
      type: "Marketing",
      dataPoints: ["sf_id", "email", "full_name", "status"],
    },
  },
};
