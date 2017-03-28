webpack演示项目说明：
 一、webpack如何安装：首先安装nodeJs
   1.npm install webpack –g   //全局安装
   2. npm init   创建一个package.json文件，这是一个标准的npm说明文件
   3. npm install webpack --save-dev  //安装到你的项目目录（项目依赖）

 二、简单的打包
    1. webpack命令打包
         webpack app/main.js public/bundle.js

    2.配置文件配置打包
      在webpack.config.js里面配置入口文件和输出文件（在根目录下）

    3.利用nodeJs命令打包
      配置package.json文件（在根目录下）

