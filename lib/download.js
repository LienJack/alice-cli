const download = require('download-git-repo')
const path = require('path')

module.exports = function (target) {
  target = path.join(target || '.', '.downloader-temp')
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
}