const download = require('download-git-repo')
const path = require('path')
const Git = require("nodegit")
const ora = require('ora')

module.exports = function (target) {
  // target = path.join(target || '.', 'template')

  // target = path.join(target || '.', './download-temp')
  // const url = 'http://gitlab.61info.com:8190/61tech-live-fe/generator-61tpl.git'
  const url = 'https://github.com/LienJack/vue-template-cli.git'
  const spinner = ora(`正在下载项目模板，源地址：${url}`)
  target = path.join('./download-temp')
  // console.log("target",target)
  spinner.start()
  return new Promise((resolve,reject) => {
    // download('LienJack/vue-template-cli',
    // download('github:LienJack/vue-template-cli#master',
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

// module.exports = function (target) {
//   // const url = 'http://gitlab.61info.com:8190/61tech-live-fe/generator-61tpl.git'
//   const url = 'https://github.com/LienJack/vue-template-cli.git'
//   const spinner = ora(`正在下载项目模板，源地址：${url}`)
//   target = path.join('./download-temp')
//   spinner.start()
//   return new Promise((resolve,reject) => {
//     Git.Clone(url, target)
//       .then(res => {
//         spinner.succeed()
//         resolve(target)
//       })
//       .catch(err => {
//         spinner.fail()
//         reject(err)
//       })
//   })
// }