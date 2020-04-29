//对axios这个库的二次封装
import qs from 'querystring'
import axios from 'axios';
import {message as msg} from 'antd'


//配置请求的基础路径
axios.defaults.baseURL = 'http://localhost:3000'
//配置超超时时间
axios.defaults.timeout = 5000



axios.interceptors.request.use((config)=>{
  const {method,data} = config
  if(method.toLowerCase() === 'post' && data instanceof Object){
    config.data = qs.stringify(data)
  }
  return config
})

//响应拦截器
axios.interceptors.response.use(
  //成功回调
  response =>{
    return response.data
  },
  //失败回调
  err => {
		let errmsg = '未知错误，请联系管理员'
		const {message} = err
		if(message.indexOf('401') !== -1) errmsg = '未登录或身份过期，请重新登录！'
		else if(message.indexOf('Network Error') !== -1) errmsg = '网络不通，请检查网络连接！'
		else if(message.indexOf('timeout') !== -1) errmsg = '网络不稳定，连接超时！'
		msg.error(errmsg,1)
		return new Promise(()=>{})
	}
)

export default axios