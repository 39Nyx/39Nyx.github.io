---
title: webpack 基础
order: 2
---

## 名词解释

`entry`: 项目的入口

`module`: 每一个文件都可以看做`module`,模块不局限于`js`,也包含`css`

`chunk`: 一个`chunk`由多个模块组成

`loader`: 模块转换器,对模块进行转换处理

`plugin`: 扩展插件,可以处理`chunk`,也可以对最后的打包结果进行处理,可以完成`loader`完不成的任务

`bundle`: 打包最终完成的文件,一般就是和chunk一一对象的关系

## mode模式

分为`开发环境`(development)和`生产环境`(production)

默认是`生产环境`(production)

```javascript
module.exports = {
    mode: 'development'
};
```

## 入口

通过`entry`指定入口文件,可以设置为字符串、数组、对象

### 单个入口

使用字符串

```javascript
module.exports = {
    mode: 'development',
    entry: './src/index.js'
};
```

使用对象

```javascript
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    }
};
```

为数组的时候会合并输出

```javascript
module.exports = {
    mode: 'development',
    entry: ['./src/index.js', './src/home.js']
};
```

### 多个入口

使用对象

```javascript
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        home: './src/home.js'
    }
};
```

## 出口

`output`指定`entry`对应文件编译打包后的输出`bundle`

output的常用三个属性:

- `path`: 指定`bundle`的存放路径,也就是编译后文件的存放路径

- `filename`: `bundle`文件的名称,即编译后文件的名称

- `publicPath`: 在浏览器中被引用的 URL 地址，

::: tip
可以有多个`entry`,但只能有一个`output`
:::

```javascript
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        home: './src/home.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    }
};
```

## 占位符

`[hash]`: 模块标识符的hash,每次编译后都会生成新的`hash`,修改任何文件都会导致所有文件的`hash`发生改变,无法实现静态资源在浏览器上的长缓存,需要使用`chunkhash`

`[chunkhash]`: chunk内容的hash,组成`entry`的模块文件没有变化,对应的hash也是不变的,可以发挥最长缓存的作用

`[name]`: 模块的名称,值为`entry`对象的键值

`[id]`: 模块对象的标识

`[query]`: 模块的query,例如文件名?后面的字符串

`[function]`: 一个 return 出一个 string 作为 filename 的函数

## rules

- 匹配条件: 通过`test`、`include`、`exclude`

- 应用规则: 使用`use`来使用相应的`loder`

- 加载顺序: 从后往前加安装

```javascript
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        home: './src/home.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: '/\.less$/',
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            }
        ]
    }
};
```

需要解析`.less`的文件,需要`less-loader`将`.less`文件解析为`.css`文件,在`js`中需要解析`css`需要`css-loader`和`style-loader`,加载顺序是从后完前加载的

## 简单入门

- 创建一个项目并本地安装`webpack`和`webpack-cli`,非全局安装

```bash
mkdir es6Module && cd es6Module
npm init -y
npm install webpack webpack-cli --save-dev
```

- 在`package.json`中移除`"main": "index.js",`并添加`"private": true,`

```json
{
  "name": "es6Module",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "directories": {
    "lib": "lib"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.40.2",
    "webpack-cli": "^3.3.9",
  },
  "dependencies": {
  }
}
```

- 本地安装`html-webpack-plugin`,`webpack-dev-server`,`clean-webpack-plugin`

```bash
npm install --save-dev html-webpack-plugin webpack-dev-server clean-webpack-plugin
```

- 创建`webpack.config.js`文件,并配置设置配置选项

```javascript
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //入口文件
    entry: {
        //键表示编译后的文件的前缀,值表示文件的地址(相对地址)
        module: './src/module/module.js',
        module2: './src/module/module2.js'
    },
    //出口文件
    output: {
        //编译文件后的名称,[name]是entry的键值,便是编译后文件的前缀
        filename: '[name].bundle.js',
        //编译后文件的目录
        path: path.resolve(__dirname, 'dist')
    },
    //将编译后的代码映射回原始源代码,即会指出具体错在那个文件的那个地方
    devtool: 'inline-source-map',
    // webpack-dev-server的配置信息
    devServer: {
        //从什么位置进行查找
        contentBase: './dist',
        //热加载
        hot: true
    },
    //插件
    plugins: [
        //编译时清除/dist文件下的所有文件插件
        new CleanWebpackPlugin(),
        //生产index.html文件并添加js的引用
        new HtmlWebpackPlugin(),
        //webpack自带的热加载模块
        new webpack.HotModuleReplacementPlugin()
    ]
};
```

- 设置快捷方式,在`package.json`的`scripts`中添加`npm`命令

watch命令: `webpack --watch`,表示将js编译后会继续观察,如果文件更改,无需重新输入命令,会自动编译,页面不会自动刷新

start命令: `webpack-dev-server`,供了一个简单的 web server，并且具有 live reloading(实时重新加载) 功能

```json
{
  "name": "es6Module",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "directories": {
    "lib": "lib"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "watch": "webpack --watch",
    "start": "webpack-dev-server"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "clean-webpack-plugin": "^3.0.0",
    "html-webpack-plugin": "^3.2.0",
    "webpack": "^4.40.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.1"
  },
  "dependencies": {
  }
}
```
