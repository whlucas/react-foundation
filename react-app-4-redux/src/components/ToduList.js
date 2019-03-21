import React, { Component } from 'react';
import store from '../store/index' // 其实导入名字为index.js的文件直接写到文件夹名就可以了

import * as Types from '../store/actionTypes'

// 导入我更改state里面值的方法
import * as Actions from '../store/actionCreators'
class ToduList extends Component {

	// 我把这个里面的数据写到store里面,在这个里面直接掉store里面的数据

	// state = {
	// 	inpVal: '',
	// 	list: []
	// }

	// 从store里面拿数据
	// console.log(store.getState());

	// 通过redux里面的值来写一个自己的state
	// state = {
	// 	inpVal: store.getState().inpVal,
	// 	list: store.getState().list
	// }

	// 我上面那么写就相当于下面这一行

	state = store.getState()

	render() {



		return (
			<>
				<div>
					{/* 在onChange事件里面去改变我的redux里面的值 */}
					<input type="text" value={this.state.inpVal} onChange={this.handleChange} />
					<button onClick={this.handleAdd}>添加</button>
				</div>
				<ul>
					{
						this.state.list.map((item, index) => {
							return (
								<li key={item + index}>
									{item}
									{/* 用于要穿默认是,所以要用一个默认函数的形式传 */}
									<button onClick={() => { this.handleDelete(index) }}>X</button>
								</li>
							)
						})
					}
				</ul>

			</>
		)
	}

	// 我这里需要把这个里面的所有的这个action.type里面的值放到一个文件夹里面去处理
	// 因为如果直接用字符串的话,如果匹配不到,就直接走最下面的那个return,你不知道你写错了,且不方便管理
	// 我把这个些个字符串都放到actionType.js里面,并且把他们导出,在这里引入


	// handleChange = (e) => {
	// 	// 我想在这个函数里面去更改我的这个state里面的值

	// 	// 首先第一步要有一个action对象
	// 	const action = {
	// 		// 这个对象类型是更改INPUT_VAL的
	// 		type: Types.CHANGE_INPUT_VAL,
	// 		// 改变的值是什么
	// 		value: e.target.value
	// 	}
	// 	// 通过store.disPatch来传递这个action,传递到reducer
	// 	store.dispatch(action);
	// }

	// // 同理我用这个handleAdd来修改这个state里面的list值
	// handleAdd = () => {
	// 	const action = {
	// 		type: Types.ADD_TODO_ITEM,
	// 		value: this.state.inpVal
	// 	}
	// 	store.dispatch(action);
	// }

	// // 同理再写一个delete
	// handleDelete = (index) => {
	// 	const action = {
	// 		type: Types.DELETE_TODO_ITEM,
	// 		index
	// 	}
	// 	store.dispatch(action);
	// }

	// 这里的这些个修改state里面数据的函数我们也把他们都放到一个文件夹里面统一管理

	handleChange = (e) => {
		// 用我管理起来的函数来返回一个action
		const action = Actions.getTodoChangeInputValueAction(e.target.value)
		store.dispatch(action);
	}

	handleAdd = () => {
		const action = Actions.getTodoAddItemAction(this.state.inpVal)
		store.dispatch(action);
	}

	handleDelete = (index) => {
		const action = Actions.getTodoDeleteItemAction(index);
		store.dispatch(action);
	}


	// 我这个handleChange函数把这个state里面的值修改完成之后,这state里面的值没有办法跟新到组件里面
	// 我这里需要在生命周期函数里面来订阅一下我这个state里面的值,让他实现渲染
	// 也可以在constructor里面调用
	componentDidMount() {
		// 这个里面传一个函数,当我state里面的值变了就调用我这个函数
		store.subscribe(this.handleStoreChange)
	}

	handleStoreChange = () => {
		// 在这个里面实现的功能就是重新的渲染一下我的这个页面
		// 利用setState来跟新一下我的这个setState的值就可以了
		this.setState(store.getState())
	}

}

export default ToduList;