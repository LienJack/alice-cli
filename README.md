# alice-cli
由于公司使用框架种类繁多，框架官方提供脚手架配置差异巨大和打包速度较慢，需要一套统一的脚手架
## 使用截图
![image](./doc/alice.gif)
## 安装
```
npm i alice-cli -g
cnpm i alice-cli -g
yarn add alice-cli -g
```
## 功能
### 项目初始化
```
alice init <you project name>
```
### 帮助
```
alice help
```
### 查看版本
```
alice -V
```
## 提供模板
### 1. vue 2.0
#### 自定义配置
1. 是否使用移动端适配
2. 是否兼容安卓4.4.0版本
3. 是否配置微信sdk
4. 是否使用vux
5. 环境选择： 本地、开发、测试、生产、灰度、预发布  

### 2. react 16.0
#### 自定义配置
1. 是否使用移动端适配
2. 是否兼容安卓4.4.0版本
3. 是否配置微信sdk
4. 是否使用redux
5. 环境选择： 本地、开发、测试、生产、灰度、预发布

### 3. 基于electron + react项目(todo)
TODO

### 4. 基于electron + vue(todo)
TODO

### 5. 使用rollup做构建工具，适用于编写组件或库
rollup是一款专业打包js的打包工具，比起webpack打包速度更快，体积更小。适用于组件和库的开发打包。   
#### 自定义配置
-  es – 将软件包保存为ES模块文件
- cjs – CommonJS，适用于 Node 和 Browserify/Webpack
- amd 异步模块定义，用于像RequireJS这样的模块加载器
- umd – 通用模块定义，以amd，cjs 和 iife 为一体 

#### 插件选择： 
- rollup-plugin-node-resolve  插件可以告诉 Rollup 如何查找外部模块。 安装它
- rollup-plugin-commonjs 们需要将CommonJS模块转换为 ES2015 供 Rollup 处理
- rollup-plugin-babel 使用babel编译
- rollup-plugin-uglify 压缩代码 

### 6. 快速生成typscript环境
typscript是未来趋势，此模板快速生成typscript环境，用于各种实验

### 7. 快速生成es6+环境，用于做实验
使用ES6会出现兼容问题，此模板不仅能使用es6语法，甚至es7装饰器等草案都能使用。