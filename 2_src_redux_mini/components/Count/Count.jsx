import React, { Component } from 'react'
import store from '../../redux/store'


export default class Count extends Component {
	//加
	increment = ()=>{
		const {value} = this.refs.user_selected
		//通知redux 加 value
		store.dispatch({type:'increment',data:value*1})
	}

	//减
	decrement = ()=>{
		const {value} = this.refs.user_selected
		//通知redux 加 value
		store.dispatch({type:'decrement',data:value*1})
	}

	////如果当前和是奇数再加一
	incrementIfOdd = ()=>{
		const {value} = this.refs.user_selected
		//获取现在的和
		let count = store.getState()
		if(count%2 === 1){
			store.dispatch({type:'increment',data:value*1})
		}
	}

	//等1秒再加
	incrementAsync = ()=>{
		const {value} = this.refs.user_selected
	setTimeout(()=>{
			store.dispatch({type:'increment',data:value*1})
		},1000)
	}

	render() {
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
