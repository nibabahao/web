const path = require("path");
//引入html模板引擎
const HtmlWebpackPlugin = require('html-webpack-plugin');
//引入清理插件
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
	// entry: "./hello.js",
	//数组方式
	// entry: ["hello.js","a.js"],
	//多个入口文件根据key值输出
	entry: {
		app: './hello.js',
		print: './src/print.js'
	},
	//开发工具
	devtool: 'inline-source-map',//追踪错误警告信息，方便查找到某个模块	
	//插件
	plugins: [
	  //清理dist文件//清理dist其余不必要的文件
	  new CleanWebpackPlugin(['dist']),
	  new HtmlWebpackPlugin({
	  	//更改模板的title 默认路径index.html
	  	title: 'Output Management'
	  })
	],
	output: {
		// filename: 'bundle.js', 单文件
		filename: '[name].bundle.js',//根据name输出多个文件
		path: path.resolve(__dirname,"dist")
	},
	//模块
	module: {
		rules: [
		  {
		  	test: /\.css$/,
		  	use: [
		  	  'style-loader',
		  	  'css-loader'
		  	]
		  },
		  {
		  	test: /\.(png|svg|jpg|gif)$/,
		  	use: ['file-loader']
		  }
		]
	}
}
//开启监控模块需要在package.json的script中加入"watch": "webpack --watch" 然后在控制台上输入
//npm run watch 之后所有更改都会直接修改打包