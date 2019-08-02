const download = require('download-git-repo')
const path = require('path')
const ora = require('ora')
const logSymbols = require("log-symbols");
const chalk = require("chalk");
const CONST = require('../conf/const')
module.exports = function (target, url) {
  const spinner = ora(`正在下载项目模板，源地址：${url}`)
  target = path.join(CONST.TEMPLATE_NAME)
  spinner.start()
  return new Promise((resolve,reject) => {
    download(`direct:${url}`,
    target, { clone: true }, (err) => {
      if (err) {
        spinner.fail()
        console.log(logSymbols.fail, chalk.red("模板下载失败:("));
        reject(err)
      } else {
        spinner.succeed()
        console.log(logSymbols.success, chalk.green("模板下载完毕:)"));
        resolve(target)
      }
    })
  })
}
