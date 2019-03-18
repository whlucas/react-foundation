// 这个里面用来测试在父组件里面改变传递给子组件的值,调用的生命周期函数

import React from 'react'

class ChildLifeCycle extends React.Component{
	render () {
		console.log('2. render')
		let {n} = this.props
		return (
			<div>我是子组件 {n}</div>
		)
	}

	// 首先走一下将要改变属性
	componentWillReceiveProps (nextProps) {
		// 可以进行ajax请求
		// 在这个里面一般可以进行一些状态的设置
		// 把我nextProps里面的值直接放到我的state里面
		// 注意这个是传过来的值发生变化了才会触发
		this.setState({
			a: nextProps.n
		})

		// 但是官方不建议这么写,在16.3之后也把这个函数给删掉了
		console.log('2. willReceive')
	}

	// 然后就是跟新组件那一套
	shouldComponentUpdate() {
		console.log('2. shouldUpdate')
		return true;
		// return false; // 如果return false 就不走更新那一套, 但是状态里面的值是会更改的
	}

	// 如果回答true,就执行更新那一套,先是将要更新组件
	componentWillUpdate() {
		console.log('2. willUpdate')
	}
	// 然后走render

	// 然后跟新完毕
	componentDidUpdate() {
		console.log('2. didUpdate')
	}


	// 把这个子组件移除的时候要先执行这个将要被卸载
	componentWillUnmount() {
		console.log('2. willUnMount');
	}
}

export default ChildLifeCycle;