import { Manifest, CodeBlock, AccountConfig, Schema } from "../../types";

export const test_manifest: Manifest = {
  name: "Add a contact to Customer Contact List",
  description: "",
  version: 2,
  private: true,
  concurrency: 1,

  code: {
    number: 0,
    provider: "clock",
    name: "scheduled_event",
    as: "2c2304a4",
    title: null,
    description: '<span class="provider">Trigger</span> every 5 minutes',
    keyword: "trigger",
    dynamicPickListSelection: {
      timezone: "Europe/London (+00:00)",
    },
    input: {
      time_unit: "minutes",
      trigger_every: "5",
      timezone: "Europe/London",
    },
    extended_input_schema: [
      {
        control_type: "integer",
        default: "5",
        enforce_template_mode: true,
        extends_schema: true,
        hint: "Define repeating schedule. Enter whole numbers only.\n                        This field can be set to a minimum of 5 minutes.",
        label: "Trigger every",
        name: "trigger_every",
        optional: false,
        suffix: {
          text: "minutes",
        },
        type: "string",
      } as Schema.BaseField,
    ],
    visible_config_fields: [
      "time_unit",
      "trigger_every",
      "timezone",
      "start_after",
    ],
    block: [
      {
        number: 1,
        provider: "google_sheets",
        name: "add_spreadsheet_row_v4",
        as: "c10be065",
        title: null,
        description: null,
        keyword: "action",
      } as CodeBlock,
    ],
    uuid: "f022df1b-aecb-4101-8788-aaae54d57373",
    unfinished: false,
  } as CodeBlock,

  config: [
    {
      keyword: "application",
      provider: "clock",
      skip_validation: false,
      account_id: null,
    } as AccountConfig,
    {
      keyword: "application",
      provider: "google_sheets",
      skip_validation: false,
      account_id: {
        zip_name: "my_google_sheets_account.connection.json",
        name: "My Google Sheets account",
        folder: "",
      },
    } as AccountConfig,
  ],
};
