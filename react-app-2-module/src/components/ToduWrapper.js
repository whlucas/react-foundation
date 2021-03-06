// 这个大的组件是由上面的input框,和下面的ToduWrapperList这个组件组成,下面的ToduList组件又是由一条条的小ToduWrapperItem组件组成

import React from 'react';

// 导入我这个组件所需要引入的组件
import ToduWrapperList from './ToduWrapperList'

// 引入夸组件的工具
import {Provider} from './context'

class ToduWrapper extends React.Component {
	task = React.createRef()

	// 我需要ToduWrapper给ToduWrapperList传值,所以ToduWrapper里面的有状态来储存这个值
	state = {
		list: []
	}

	render() {
		return (
			// 使用provider的时候只要把需要传的东西用Provider组件标签包裹一下就可以了
			// 我需要把要传的函数Provider里面的value属性里面,value里面是一个对象,对象里面放我需要传的东西
			// 用了这个就不用再子组件标签上面传值了
			<Provider value={{deleteTask: this.deleteTask}}>
				<div>
					{/* 这里使用非受控组件ref的方式来操作dom,这种方式尽量少用 */}
					<input type="text" ref={this.task} />
					<button onClick = {this.handleClick}>添加</button>
				</div>
				{/* 把这个组件里面的值传给TuduWrapperList */}
				{/* 把爷爷组件里面的删除数据的函数传父亲,用传值的方式传 */}
				<ToduWrapperList list = {this.state.list} fn = {this.deleteTask}></ToduWrapperList>
			</Provider>
		)
	}

	handleClick = () => {
		this.setState({
			list: [...this.state.list, this.task.current.value]
		})
		this.task.current.value = ''
	}

	// 写一个删除list里面数据的方法,让孙子去调用
	deleteTask = (index) => {
		const list = [...this.state.list]
		list.splice(index, 1);

		// 然后再修改一下我state里面的list
		this.setState({
			list
		})
	}
}

export default ToduWrapper

