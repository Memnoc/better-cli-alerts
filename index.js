import chalk from "chalk";
import logSymbols from "log-symbols";

const alert = options => {
  const defaultOptions = {
    type: `error`,
    msg: `Missing some options`
  };
  const opts = { ...defaultOptions, ...options };
  const { type, msg } = opts;

  switch (type) {
    case `success`:
      console.log(`${logSymbols.success} ${chalk.green(msg)}`);
      break;
    case `info`:
      console.log(`${logSymbols.info} ${chalk.blue(msg)}`);
      break;
    case `warning`:
      console.log(`${logSymbols.warning} ${chalk.yellow(msg)}`);
      break;
    case `error`:
      console.log(`${logSymbols.error} ${chalk.red(msg)}`);
      break;
    default:
      console.log("no options");
  }
};

export default alert;
