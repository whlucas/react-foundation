// 这里放的是操作state里面值的action,但是这里不嫩写成对象,写成对象的话取不到我组件里面的值,要写城函数,来接收参数

// 我的action里面需要拿到type值,所以要引入我放type值的文件夹
import * as Types from './actionTypes'

// 我的这个actionCreaters也是把两个组件的任务都写在一起了,这样不好,还是要把不同组件的任务抽离出来
// 新建一个actions文件夹,里面不同组件的actions都放不同的文件里面

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

export const getCountAddAction = (n) => {
	return {
		type: Types.COUNT_ADD,
		n
	}
}

