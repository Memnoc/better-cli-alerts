#!/usr/bin/env node
/**
 * Better CLI Alerts.
 *
 * Cross platform CLI Alerts with colors.
 * Moved to TypeScript since version 2.0.0
 * Works on macOS, Linux, and Windows.
 * Alerts: `yay!`, `FYI`, `careful!`, `oops!`.
 *
 * @author Matteo Stara <https://matechblog.com/>
 */

import { colors, symbols, log } from "./constants/index.js";
import { AlertOptions } from "./types/index.js";

const alert = (options?: AlertOptions) => {
  const defaultOptions = {
    type: "error",
    message: "DEFAULT MESSAGE",
    description: "Please define some options",
  };

  const opts = { ...defaultOptions, ...options };
  const { type, message, description } = opts;
  const printDescription = description
    ? ` ${description} `
    : type.toUpperCase();
  const handleMessage = message ? message : defaultOptions.message;

  switch (type) {
    case `success`:
      log(
        `\n${symbols.success} ${colors.green.inverse(
          `${printDescription}`,
        )} ${colors.green(handleMessage)}\n`,
      );
      break;
    case `info`:
      log(
        `\n${symbols.info} ${colors.blue.inverse(
          `${printDescription}`,
        )} ${colors.blue(handleMessage)}\n`,
      );
      break;
    case `warning`:
      log(
        `\n${symbols.warning} ${colors.yellow.inverse(
          `${printDescription}`,
        )} ${colors.yellow(handleMessage)}\n`,
      );
      break;
    case `error`:
      log(
        `\n${symbols.error} ${colors.red.inverse(
          `${printDescription}`,
        )} ${colors.red(handleMessage)}\n`,
      );
      break;
    default:
      log(
        `\n${symbols.error} ${colors.red.inverse(
          `${printDescription}`,
        )} ${colors.red(handleMessage)}\n`,
      );
      break;
  }
};

export { alert as default };

// NOTE: for debugging purposes

if (import.meta.url === `file://${process.argv[1]}`) {
  alert();
  alert({ type: "success", message: "Test success message" });
  alert({ type: "info", message: "Test info message" });
  alert({ type: "warning", message: "Test warning message" });
  alert({ type: "error", message: "Test error message" });
}
