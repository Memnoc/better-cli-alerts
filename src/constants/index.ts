import logSymbols from "log-symbols";
import chalk from "chalk";

// NOTE: Lovely taken from: https://catppuccin.com/palette
export const colors = {
  green: chalk.hex("#179299"),
  red: chalk.hex("#e64553"),
  blue: chalk.hex("#7287fd"),
  yellow: chalk.hex("#df8e1d"),
};

export const symbols = {
  info: logSymbols.info,
  success: logSymbols.success,
  warning: logSymbols.warning,
  error: logSymbols.error,
};

export const log = console.log;
