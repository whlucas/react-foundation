// 这个里面的功能是吧counter的reducer和toduList里面的reducer混成一个reducer,然后导出

// 利用rudux给我们提供的函数来进行合并
import { combineReducers } from 'redux'

import toduList from './todoList'

import counter from './counter'

// 这个函数有一个返回值,返回的就是和在一起的reducer
// 传的时候要传一个对象
export default combineReducers({
	toduList,
	counter
}
)

