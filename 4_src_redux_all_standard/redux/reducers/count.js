import {INCREMENT,DECREMENT} from '../action_types'


 //定义初始状态为零
let initState = 0
export default function (preState=initState,action){
	const {type,data} = action
	let newState
	switch (type) {
		case INCREMENT:
			//如果动作类型为加
			newState = preState + data
			return newState
		case DECREMENT:
			//如果动作类型为减
			newState = preState - data
			return newState
			
		default:
			return preState
	}
}