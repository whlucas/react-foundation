// 这个里面放toduList的action
import * as Types from '../actionTypes'

export const getTodoChangeInputValueAction = (value) => {
	// 在这个函数里面我们要导出一个action对象
	return {
		type: Types.CHANGE_INPUT_VAL,
		value
	}
}

export const getTodoAddItemAction = (value) => {
	return {
		type: Types.ADD_TODO_ITEM,
		value
	}
}

export const getTodoDeleteItemAction = (index) => {
	return {
		type: Types.DELETE_TODO_ITEM,
		index
	}
}