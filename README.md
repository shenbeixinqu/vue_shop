# vue-shop

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
### 接口地址
http://www.ysqorz.top:8888/api/private/v1/
### 重置 
http://www.ysqorz.top:8091/vueshop/reset
### 修改main.js
axios.defaults.baseURL = 'http://www.ysqorz.top:8888/api/private/v1/'

### 登录业务的相关技术点
```
通过cookie在客户端记录状态
通过session在服务器记录状态
通过token方式维持状态

跨域是协议，域名或者端口至少有一个不相同
```
### 安装less, less-loader
```
npm install less less-loader --save-dev
Syntax Error: TypeError: this.getOptions is not a function
因为less-loader安装的版本过高
// 卸载
npm uninstall --save less-loader
// 安装
npm install -D less-loader@7.x
```

