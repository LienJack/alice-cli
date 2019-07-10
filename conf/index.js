module.exports = {
  getDefaultPrompt: (context) => {
    return [
      {
        name: 'projectName',
        message: '项目的名称',
        default: context.name
      }, {
        name: 'projectVersion',
        message: '项目的版本号',
        default: '1.0.0'
      }, {
        name: 'projectDescription',
        message: '项目的简介',
        default: `A project named ${context.name}`
      }
    ]
  }
}