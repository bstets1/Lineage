export type Provider = "clock" | "google_sheets" | string;
export type Keyword = "trigger" | "action" | "transformation" | "application";
export type ControlType = "integer" | "select" | "date_time" | "text" | string;

export interface Action {
  type?: "trigger" | "transformation" | "action";
  name: string;
  system?: string;
  details?: Record<string, string>;
}

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
export interface Manifest {
  name: string;
  description: string;
  version: number;
  private?: boolean;
  concurrency?: number;
  code: CodeBlock & Record<string, unknown>;
  config: Array<ConfigItem>;
  systems?: Record<string, unknown>;
}

export interface Recipe {
  name: string;
  description: string;
  systems?: {
    [key: string]: System;
  };
}

export interface AccountId {
  zip_name: string;
  name: string;
  folder: string;
}

export interface ConfigItem {
  keyword: Keyword;
  provider: Provider;
  skip_validation: boolean;
  account_id: AccountId | null;
}

export interface SchemaField {
  control_type: ControlType;
  default?: string;
  enforce_template_mode?: boolean;
  extends_schema?: boolean;
  hint?: string;
  label: string;
  name: string;
  optional?: boolean;
  suffix?: {
    text: string;
  };
  type: string;
  pick_list?: string | Array<[string, string]>;
  pick_list_connection_less?: boolean;
  since_field?: boolean;
  parse_output?: string;
  ignore_timezone?: boolean;
  render_input?: string;
  toggle_field?: {
    control_type: string;
    label: string;
    toggle_hint: string;
    extends_schema?: boolean;
    change_on_blur?: boolean;
    toggle_to_secondary_hint?: string;
    toggle_to_primary_hint?: string;
    hint?: string;
    type: string;
    name: string;
  };
  toggle_hint?: string;
  properties?: Array<SchemaField>;
  sticky?: boolean;
}

export interface CodeBlock {
  number: number;
  provider: Provider;
  name: string;
  as: string;
  title: string | null;
  description: string | null;
  keyword: Keyword;
  dynamicPickListSelection?: Record<string, string>;
  toggleCfg?: {
    is_top_left: boolean;
  };
  input: Record<string, unknown>;
  extended_input_schema?: Array<SchemaField>;
  visible_config_fields?: Array<string>;
  block?: Array<CodeBlock>;
  uuid?: string;
  unfinished?: boolean;
}
