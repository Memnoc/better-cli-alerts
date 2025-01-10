import { intro, outro, note, log, spinner } from "@clack/prompts";
import chalk from "chalk";
import {
  AlertOptions,
  CustomStyle,
  AlertType,
  AlertConfig,
} from "./types/index.js";
import { defaultSymbols, defaultColors } from "./constants/default.js";

let config: AlertConfig = {
  symbols: defaultSymbols,
  colors: defaultColors,
  useClack: true,
};

export const configure = (newConfig: AlertConfig) => {
  config = { ...config, ...newConfig };
};

const alert = async (options?: AlertOptions) => {
  const defaultOptions = {
    type: "error" as AlertType,
    message: "DEFAULT MESSAGE",
    description: "Please define some options",
    style: {} as CustomStyle,
  };

  const opts = { ...defaultOptions, ...options };
  const { type, message, description, style } = opts;

  const symbol = style.symbol || config.symbols?.[type] || defaultSymbols[type];
  const color = style.color || config.colors?.[type] || defaultColors[type];

  const printDescription = description ? description : type.toUpperCase();
  const handleMessage = message || defaultOptions.message;

  if (config.useClack) {
    switch (type) {
      case "success":
        intro(color(`${symbol} ${printDescription}`));
        log.success(handleMessage);
        break;
      case "info":
        note(handleMessage, printDescription);
        break;
      case "warning":
      case "error":
        const spin = spinner();
        spin.start(printDescription);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        spin.stop(color(`${symbol} ${handleMessage}`));
        break;
    }
    outro("");
  } else {
    // Original style output
    console.log(
      `\n${symbol} ${color(chalk.inverse(` ${printDescription} `))} ${color(
        handleMessage,
      )}\n`,
    );
  }
};

if (import.meta.url === `file://${process.argv[1]}`) {
  // Custom styling example
  configure({
    symbols: {
      success: "🎉",
      info: "📝",
      warning: "⚡",
      error: "💥",
    },
    colors: {
      success: chalk.hex("#00ff00"),
      info: chalk.hex("#0099ff"),
    },
  });

  alert();
  alert({ type: "success", message: "Test success message" });
  alert({
    type: "info",
    message: "Test info message",
    style: { symbol: "🔍" },
  });
  alert({ type: "warning", message: "Test warning message" });
  alert({ type: "error", message: "Test error message" });
}
export { alert as default };
