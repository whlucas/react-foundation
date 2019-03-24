// 这里放的是Counter组件的数据
import * as types from '../actionTypes'

const initState = {
	count: 10
}

export default (state = initState, action) => {
	const newState = JSON.parse(JSON.stringify(state));

	switch (action.type) {
		case types.COUNT_ADD:
			newState.count = newState.count + action.n
			return newState;
	}

	return state;
}