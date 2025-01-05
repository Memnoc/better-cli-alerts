import logSymbols from "log-symbols";
import chalk from "chalk";

export const colors = {
  green: chalk.greenBright,
  red: chalk.redBright,
  blue: chalk.blueBright,
  yellow: chalk.yellowBright,
};

export const symbols = {
  info: logSymbols.info,
  success: logSymbols.success,
  warning: logSymbols.warning,
  error: logSymbols.error,
};

export const log = console.log;
