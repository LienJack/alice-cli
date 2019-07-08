const dowload = require('../lib/download')
var clone = require('git-clone');
const url = 'http://gitlab.61info.com:8190/61tech-live-fe/generator-61tpl.git'
dowload(`direct:${url}`,'./download-temp')
.then(res => {
  console.log('成功')
})
.catch(err => {
  console.log(err)
})
// clone()