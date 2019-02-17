const chalk=require("chalk");
console.log(chalk.green("Hello !!"));

const error=chalk.bold.red;
const warning=chalk.keyword("yellow");

console.log(error("error !!"));
console.log(warning("warning !!"));