console.log("Hello from Node.js!");
console.log(process.argv);
console.log(process.argv[2]);

console.log("Start");
console.log("End");

import { sum, mul } from "./math1.js";

console.log(sum(10, 20));
console.log(mul(10, 20));

process.exit();