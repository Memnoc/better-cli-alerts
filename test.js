import alert from "./index.js";

alert({
  type: `success`,
  msg: `All good!`
});
alert({
  type: `info`,
  msg: `Some useful info`
});
alert({
  type: `warning`,
  msg: `Careful!`
});
alert({
  type: `error`,
  msg: `Something is wrong!`
});

alert();
