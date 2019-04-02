const chalk = require("chalk");
const yargs = require("yargs");
const fs = require("fs");
const log = console.log;
const helperMethods = require("./utils");

const file = "1-json.json";
const dataBuffer = fs.readFileSync(file);
let dataJson = JSON.parse(dataBuffer.toString());

// change name & age
yargs.command({
  command: "change",
  describe: "Changing name and age!!!",
  builder: {
    name: {
      demandOption: true,
      type: "string"
    },
    age: {
      demandOption: true,
      type: "number"
    }
  },
  handler: argv => {
    const change = helperMethods.changeInfo(dataJson, argv);
    const result = helperMethods.writeFile(file, change);

    result ? log(chalk.green(`Success`)) : log(chalk.red(`Fail`));
  }
});

yargs.parse();
