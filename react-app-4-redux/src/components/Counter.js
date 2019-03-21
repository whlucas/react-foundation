// 这里写一个计数器的组件,这个组件也要用到redux

import React, { Component } from 'react';

import store from '../store'

import {getCountAddAction} from '../store/actionCreators'
class c extends Component {

	// 在store里面有一个count值,我要拿到这个count值,点击这个button去改变他

	state = {
		count: store.getState().count
	}

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
				count: store.getState().count
			}) 
		})
	}

}

export default c;