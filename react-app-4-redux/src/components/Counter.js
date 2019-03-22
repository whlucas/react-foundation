// 这里写一个计数器的组件,这个组件也要用到redux

import React, { Component } from 'react';

import store from '../store'

import {getCountAddAction} from '../store/actions/counter'
class c extends Component {

	// 在store里面有一个count值,我要拿到这个count值,点击这个button去改变他

	// state = {
	// 	// count: store.getState().count

	// 	// 当我把store里面的数据分开成两个文件的时候,获取数据就不能直接在上面进行获取了,就得再加一层
	// 	count: store.getState().counter.count
	// }

	// 也可以这么写
	state = store.getState().counter

	render() {
		return (
			<div>
				{this.state.count}
				<button onClick={this.handleClick}>add</button>
			</div>
		)
	}

	handleClick = () => {
		const action = getCountAddAction(3)
		store.dispatch(action)
	}

	// 订阅一下store里的值的变化 
	componentDidMount () {
		store.subscribe(() => {
			this.setState({
				count: store.getState().counter.count
			}) 
		})
	}

}

export default c;