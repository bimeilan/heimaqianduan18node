// 1 导入express
const express = require('express')
const path = require('path')
// 2 创建路由对象
const accountRouter = express.Router()
// 交给对应的控制器的getLoginPage方法去处理
const accountCTRL = require(path.join(__dirname,'../controllers/accountController.js'))
accountRouter.get('/login',accountCTRL.getLoginPage)
// 获取图片验证码
accountRouter.get('/vcode',accountCTRL.getImageVcode)
// 获取注册页面
accountRouter.get('/register',accountCTRL.getRegisterPage)
// 处理注册请求
accountRouter.post('/register',accountCTRL.register)
// 处理注册请求
accountRouter.post('/login',accountCTRL.login)
//处理登出请求
accountRouter.get('/loginout',accountCTRL.loginOut)
// 导出路由模块
module.exports=accountRouter