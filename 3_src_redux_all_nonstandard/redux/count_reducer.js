import {INCREMENT,DECREMENT} from './action_types'



//定义初始状态
let initState = 0 
export default function (preState=initState,action){
	const {type,data} = action
	let newState
	switch (type) {
		case INCREMENT:
			//如果动作类型为加，返回新的
			console.log('加',preState,action);
			newState = preState + data
			return newState
		case DECREMENT:
			//如果动作类型为减，就返回新的
			console.log('减',preState,action);
			newState = preState - data
			return newState
		default:
			//如果动作类型不是加也不是减时，返回初始化的时。
			console.log('初始化',preState,action);
			return preState
	}
}