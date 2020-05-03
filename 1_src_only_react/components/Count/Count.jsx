import React, { Component } from 'react'

export default class Count extends Component {
	state = {
		count:0
	}

//加一
	increment = ()=>{
		//用户的输入
		const {value} = this.refs.user_selected
		//原来的和
		let {count} = this.state
		count += value*1
		this.setState({count})
	}

	//减一
	decrement = ()=>{
		//1.获取用户的输入
		const {value} = this.refs.user_selected
		let {count} = this.state
		count -= value*
		this.setState({count})
	}

	//如果当前和是奇数再加一
	incrementIfOdd = ()=>{
		//获取用户的输入
		const {value} = this.refs.user_selected	//获取原来的和
		let {count} = this.state
		//判断是单数还是双数
		if(count % 2 === 1){
			count += value*1
			this.setState({count})
		}
	}
	
	//等1秒再加
	incrementAsync = ()=>{
		const {value} = this.refs.user_selected
		let {count} = this.state
		count += value*1
		setTimeout(()=>{
			this.setState({count})
		},1000)
	}

	render() {
		return (
			<div>
				<h1>当前求和为：{this.state.count}</h1>
				<select ref="user_selected">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
				<button onClick={this.incrementAsync}>increment async</button>
			</div>
		)
	}
}
