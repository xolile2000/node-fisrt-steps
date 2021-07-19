const chalk = require('chalk');
const figlet = require("figlet");
const greet = require('./greet');
const styledMessage = chalk.bgGreen.black(figlet.textSync (greet('Xola')));
console.log(styledMessage)


