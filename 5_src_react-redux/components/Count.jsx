/* 
	该文件是Count的UI组件
		1.UI的外侧应该包裹一个容器组件，他们是父子关系。
		2.UI组件中不能使用任何redux的api。
		3.会通过props接到容器组件传过来的：状态、操作状态的方法。
*/
import React, { Component } from 'react'

export default class Count extends Component {

	//加
	increment = ()=>{
		const {value} = this.refs.user_selected
		this.props.increment(value*1)
	}

	//减
	decrement = ()=>{
		const {value} = this.refs.user_selected
		this.props.decrement(value*1)
	}

	//当前的和是奇数
	incrementIfOdd = ()=>{
		const {value} = this.refs.user_selected
		const {count} = this.props
		if(count%2 === 1){
			this.props.increment(value*1)
		}
	}

	
	incrementAsync = ()=>{	
		const {value} = this.refs.user_selected
		setTimeout(()=>{
			this.props.increment(value*1)
		},1000)
	}

	render() {
		//console.log('UI-Count接收到的props：',this.props);
		return (
			<div>
				 <h1>当前求和为：{store.getState()}</h1>
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
