const readFile = require("fs").readFileSync;
const input = readFile("input", "utf-8").split(",").map(_ => _.match(/<(.*)>/)[1]).sort();

console.log(input, input.length);
