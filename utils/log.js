const logSymbols = require('log-symbols');
const chalk = require('chalk')
const log = console.log;
module.exports = {
  info: (...str) => {
    log(logSymbols.info, chalk.blue(...str))
  },
  succes: (...str) => {
    log(logSymbols.success, chalk.green(...str))
  },
  warn: (...str) => {
    log(logSymbols.warning, chalk.yellow(...str))
  },
  error: (...str) => {
    log(logSymbols.error, chalk.red(...str))
  },
}