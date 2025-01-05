import alert from "../src/index.js";

console.clear();

alert({
  type: `success`,
  message: ` All is good! `,
  description: `YAY :)`,
});
alert({
  type: `info`,
  message: ` Some useful info `,
  description: `FYI...`,
});
alert({
  type: `warning`,
  message: ` Careful! `,
  description: `CAREFUL :|`,
});
alert({
  type: `error`,
  message: ` Something is wrong! `,
  description: `OOPS :(`,
});

alert({
  type: `error`,
  message: ` Something is wrong! `,
  description: `YOUR CUSTOM MESSAGE`,
});

alert();
