import alert from "../src/index";
console.clear();
alert({
    type: `success`,
    message: ` All is good! `,
    description: `SUCCESS`,
});
alert({
    type: `info`,
    message: ` Some useful info `,
    description: `INFO`,
});
alert({
    type: `warning`,
    message: ` Careful! `,
    description: `WARNING`,
});
alert({
    type: `error`,
    message: ` Something is wrong! `,
    description: `ERROR`,
});
alert({
    type: `error`,
    message: ` Something is wrong! `,
    description: `YOUR CUSTOM MESSAGE`,
});
alert();
