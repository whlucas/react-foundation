// 我这里导出一个函数,这个函数返回一个状态

// 引入所有的action的Type的名字
// 引入所有东西命名为types
import * as types from './actionTypes'

const initState = {
	inpVal: '',
	list: [],

	count: 10
}

// 如果给他传了就用传的,没有传就用初始的, 第二个参数就是我传过来的action
export default (state = initState, action) => {
	// 我这个里面要通过我传进来的action,依据里面的type值来来对state来进行修改

	// 这个reducer里面不能直接对state进行修改,他只能生成一个新的state,来对原来的进行覆盖
	// 这里先对原来的state进行深度克隆,复制给newstate,用JSON的两个方法倒一遍就深度克隆了
	const newState = JSON.parse(JSON.stringify(state));

	switch (action.type) {
		// 我这里需要把这个里面的所有的这个action.type里面的值放到一个文件夹里面去处理
		// 因为如果直接用字符串的话,如果匹配不到,就直接走最下面的那个return,你不知道你写错了,且不方便管理
		// 我把这个些个字符串都放到actionType.js里面,并且把他们导出,在这里引入

		// case 'CHANGE_INPUT_VAL':
		// 	// 改变一下我新的state里面的值
		// 	newState.inpVal = action.value;
		// 	// 然后返回我这个newState
		// 	return newState;
		// case 'ADD_TODO_ITEM':
		// 	newState.list.push(action.value)
		// 	newState.inpVal = '';
		// 	return newState;
		// case 'DELETE_TODO_ITEM':
		// 	newState.list.splice(action.index, 1);
		// 	return newState

		// 这样就可以不用字符串来写了,写错了也会报错
		case types.CHANGE_INPUT_VAL:
			// 改变一下我新的state里面的值
			newState.inpVal = action.value;
			// 然后返回我这个newState
			return newState;
		case types.ADD_TODO_ITEM:
			newState.list.push(action.value)
			newState.inpVal = '';
			return newState;
		case types.DELETE_TODO_ITEM:
			newState.list.splice(action.index, 1);
			return newState;
		case types.COUNT_ADD:
			newState.count = newState.count + action.n
			return newState;
	}

	return state;
}