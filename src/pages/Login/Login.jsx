import React, { Component } from 'react'
import logo from './imgies/logo.png'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './css/login.less'


const {Item} =Form

export default class Login extends Component {

	onFinish = values => {
	
		console.log('Received values of form :',values);
	};

	
	pwdValidator = (_,value="")=>{
		let errMsgArr = []
		if(!value.trim()) return Promise.reject('不输入密码你怎么登录！')
		if(value.length < 4) errMsgArr.push('想啥呢，大于四位')
		if(value.length > 12)errMsgArr.push('又想啥呢，都超过12位了')
		if(!(/^\w+$/).test(value)) errMsgArr.push('密码必须是英文、数字、下划线组成！')
		if(errMsgArr.length !== 0) return Promise.reject(errMsgArr)
		else return Promise.resolve()
	}
	
  
  render() {
    return (
      <div className='login'>
        <header>
      <img src={logo} alt="logo"/>
      <h1>商品管理系统</h1>
        </header>
        <section>
         <span>用户登录</span>
    <Form
      
      className="login-form"
      onFinish={this.onFinish}
    >
      <Item
      	name="username"
       rules={[
       {required:true,message:'你不输入等着我给你输呢？头给你打歪'},
       {min:4,message:'大于四位数，记住没？！！！'},
       {max:12,message:'你还想大于12位呢，起那么多名干嘛'},
       {pattern:/^\w+$/,message:'用户必须是英文，数字，下划线组成！'}
       ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} 
        placeholder="用户名" />
      </Item>
      <Item
      	name="password"
        rules={[{validator:this.pwdValidator}]}
     
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
         type='password'
          placeholder="登录密码"
        />
      </Item>
      <Item>
       
      </Item>

      <Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
         登录
        </Button>
       
      </Item>
      </Form> 
    </section> 
    </div>
    
    )
   
  }
 
  }
  
