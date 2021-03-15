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

### promise语法糖
```
如果某个方法的返回是promise
可以使用async await 简化操作
await 前面的方法加上async
```
### token相关
```
将登录成功的token，保存到客户端的sessionStorage中
    项目中出现了登录外的其他API接口,必须在登录之后才能访问
    token只应在当前网站打开期间有效，所以将token保存在sessionStorage中
通过编程式导航跳转到后台主页，路由地址是/home
```