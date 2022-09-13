
const chalk = require("chalk");
const val = require("validator");
if (val.isEmail('ayush@.com') == true) {
    console.log(chalk.green("Valid Email"));
    console.log(chalk.green('valid email'));
}
else {
    console.log(chalk.red('not valid'));
}
