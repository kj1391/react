//管理ajax请求
import ajax from './ajax'

//请求登录
export const reqLogin = (loginObj) 
=> ajax.post('/login',loginObj)
