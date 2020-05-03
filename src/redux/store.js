//引入createStore，用于创建store
import {createStore} from 'redux' 
//引入为count服务的reducer
import countReducer from './reducers/count'

//创建store，同时指定好为store所服务的reducer,随后暴露
export default createStore(countReducer)

