const Metalsmith = require('metalsmith')
const Handlebars = require('handlebars')
const rm = require('rimraf').sync

// module.exports = function (metadata = {}, src, dest = '.') {
module.exports = function (config) {
  let { metadata, src, dest } = config
  if (!src) {
    return Promise.reject(new Error(`无效的source：${src}`))
  }
  // 官方模板
  return new Promise((resolve, reject) => {
    console.log('src', src, 'dest', dest)
    Metalsmith(process.cwd())
      .metadata(metadata)
      .clean(false)
      .source(src)
      .destination(dest)
      .use((files, metalsmith, done) => {
        const meta = metalsmith.metadata()
        Object.keys(files).forEach(fileName => {
          try {
            const t = files[fileName].contents.toString()
            files[fileName].contents = new Buffer.from(Handlebars.compile(t)(meta))
          } catch (err) {
            console.log('fileName------------',fileName)
            console.log('er -------------',err)
          }
          })
          done()
        // Object.keys(files).forEach(fileName => {
        //   const t = files[fileName].contents.toString()
        //   // files[fileName].contents = new Buffer(Handlebars.compile(t)(meta))
        //   files[fileName].contents = new Buffer.from(Handlebars.compile(t)(meta))
        // })
        // done()
      }).build(err => {
        console.log('build')
        rm(src)
        err ? reject(err) : resolve()
      })
  })
}
