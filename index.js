/**
 * Better CLI Alerts.
 *
 * Cross platform CLI Alerts with colors.
 * Works on macOS, Linux, and Windows.
 * Alerts: `success`, `info`, `warning`, `error`.
 *
 * @author Matteo Stara <https://matechblog.com/>
 */

import logSymbols from "log-symbols";
import chalk from "chalk";
const green = chalk.green;
const red = chalk.red;
const blue = chalk.blue;
const yellow = chalk.yellow;
const info = logSymbols.info;
const success = logSymbols.success;
const warning = logSymbols.warning;
const error = logSymbols.error;
const log = console.log;

const alert = options => {
  const defaultOptions = {
    type: ` error `,
    message: `DEFAULT MESSAGE`,
    description: `Please define some options`
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
        `\n${success} ${green.inverse(`${printDescription}`)} ${green(
          handleMessage
        )}\n`
      );
      break;
    case `info`:
      log(
        `\n${info} ${blue.inverse(`${printDescription}`)} ${blue(
          handleMessage
        )}\n`
      );
      break;
    case `warning`:
      log(
        `\n${warning} ${yellow.inverse(`${printDescription}`)} ${yellow(
          handleMessage
        )}\n`
      );
      break;
    case `error`:
      log(
        `\n${error} ${red.inverse(`${printDescription}`)} ${red(
          handleMessage
        )}\n`
      );
      break;
    default:
      log(
        `\n${error} ${red.inverse(`${printDescription}`)} ${red(
          handleMessage
        )}\n`
      );
      break;
  }
};

export default alert;
