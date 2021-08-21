const { readFileSync, writeFileSync } = require("fs");
console.log("start");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

//create new file with file name result, if exists it will overwrite.
writeFileSync(
  "./content/result.txt",
  `Here is the result: ${first}, ${second}`
);

//append result with text
writeFileSync("./content/result.txt", `append file text`, { flag: "a" });
console.log("done with task");
console.log("starting the next one");
