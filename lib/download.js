const download = require('download-git-repo')
const path = require('path')
const ora = require('ora')

module.exports = function (target, url) {
  const spinner = ora(`正在下载项目模板，源地址：${url}`)
  target = path.join('./download-temp')
  spinner.start()
  return new Promise((resolve,reject) => {
    download(`direct:${url}`,
    target, { clone: true }, (err) => {
      if (err) {
        spinner.fail()
        reject(err)
      } else {
        spinner.succeed()
        resolve(target)
      }
    })
  })
}
