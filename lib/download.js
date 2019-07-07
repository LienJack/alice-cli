const download = require('download-git-repo')
const path = require('path')

module.exports = function (target) {
  // target = path.join(target || '.', 'template')

  // target = path.join(target || '.', './download-temp')
  target = path.join('./download-temp')
  // console.log("target",target)
  return new Promise((resolve,reject) => {
    download('LienJack/vue-template-cli',
    target, { clone: true }, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve(target)
      }
    })
  })

  // return new Promise(resolve => {
  //   resolve(target)
  // })
}