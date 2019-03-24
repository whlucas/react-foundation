// 在这个里面去处理一些异步的东西

// 由于我这个里的东西是要传到saga的run方法里面的,而run方法需要接收的是一个生成器函数

// 这个sagas他能监听的到我们每一次派发的任务,我们可以根据每一次派发的任务类型进行处理

// 引入saga里面的一个函数
import { takeEvery, put } from 'redux-saga/effects'

import * as Types from './actionTypes'

import axios from 'axios';

// 拿到数据了之后我们的派发任务去修改我们redux里面的数据,所以这里拿到我写的派发数据的action
import * as actions from './actions/todoList'

function* mySaga() {
	// 这个函数里面第一个参数是actions里面的任务名(Type类型),需要对哪一个任务做处理就把哪一个任务名放到哪个里面去
	// 第二个参数是他要执行的函数
	// 这样的话当我们出发了这个ADD_TODU_ITEM这个方法的时候,他不但能添加li,还能出发我addItem这个函数
	yield takeEvery(Types.ADD_TODO_ITEM, addItem)

	// 那也就是说我们可以让我么这个组件在componentDidMount的时候执行一个actions里面的函数,进行一次任务的派发,在这里监听到这次任务的派发,让他执行某一个函数,然后在这个函数里面去执行一次异步的请求
	yield takeEvery(Types.GET_TODO_DATA, getTodoData)
}
// 这个需要执行的函数可以是正常的函数也可以是生成器函数,这里最好是生成器函
function* addItem() {
	console.log('add')
}

function* getTodoData() {
	// 这里加一个异常拦截
	// 当我们请求成功的时候,加载数据,失败的时候
	try {
		// 在这个里面进行一次异步的请求
		const data = yield axios.get('list.json'); // 这个的意思是等到yield后面的执行完了,赋值给前面的data

		// 这里这个data就拿到了他axios返回的数据, 为什么?
		// 然后我们拿到我需要派发的action对象
		const action = actions.getInitList(data);
		// 然后再把这个任务派发出去
		// 需要用到dispatch方法,但是我们这里没有引入store,用不到store里面的dispatch
		// 但是saga给我们提供一个一个函数put,他的功能和dispatch是一样的,在redux-saga里面引入就可以了
		// 派发的时候前面写一个yield让他等待前面一个函数的执行
		yield put(action);
	}catch(err) {
		// 由于我在拦截器里面写了当请求不会来的时候返回一个promise.reject('请求出错')
		// 这里合格err就能接收到我这个'请求出错', 为什么?
		console.log(err)
	}
}

export default mySaga;