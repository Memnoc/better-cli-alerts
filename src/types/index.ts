export interface DefaultSymbols {
  success: string;
  info: string;
  warning: string;
  error: string;
}

export type AlertType = "success" | "info" | "warning" | "error";

export interface CustomStyle {
  symbol?: string;
  color?: (text: string) => string;
}

export interface AlertOptions {
  type?: AlertType;
  message?: string;
  description?: string;
  style?: CustomStyle;
}

export interface AlertConfig {
  symbols?: Partial<DefaultSymbols>;
  colors?: {
    [K in AlertType]?: (text: string) => string;
  };
  useClack?: boolean;
}
