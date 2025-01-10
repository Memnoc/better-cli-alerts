import chalk from "chalk";
import { ColorPalette } from "../types";

export const defaultSymbols = {
  success: "✔",
  info: "ℹ",
  warning: "⚠",
  error: "✖",
};

// NOTE: Lovely taken from: https://catppuccin.com/palette
export const defaultColors: ColorPalette = {
  success: chalk.hex("#179299"),
  error: chalk.hex("#e64553"),
  info: chalk.hex("#7287fd"),
  warning: chalk.hex("#df8e1d"),
};
