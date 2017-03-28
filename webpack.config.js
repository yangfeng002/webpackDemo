/**
 * Created by fengyang on 2017/3/27.
 */
//注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
module.exports = {
      devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
      entry:__dirname+"/app/main.js",//已多次提及的唯一入口文件
      output:{
          path:__dirname+'/public',//输出文件的路径
          filename:'bundle.js'//输出文件的名称
      },
      devServer:{
        contentBase:'./public',//本地服务器所加载的页面所在的目录
        port:'8080',
        inline:true,//源文件改变时页面实时刷新
        colors:true,//终端中输出结果为彩色
        historyApiFallback: true//不跳转
      }

};