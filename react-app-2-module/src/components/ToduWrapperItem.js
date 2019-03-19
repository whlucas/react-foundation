import React from 'react';

import {Consumer} from './context'
class ToduWrapperItem extends React.Component {
	render() {
		// 拿到我传过来的task
		const { task, index } = this.props;
		return (
			// 我这里接收爷爷传过来的东西,要包一个Consumer组件,组件里面写一个函数
			<Consumer>
				{
					// 函数的参数是一个对象,对象里面放要接收的值deleteTask
					// 返回的结果是要渲染的结果
					({ deleteTask }) => {
						return (
							<li>
								{/* li里面一部分是显示我传过来的值,一部分是有一个button */}
								{task}
								{/* 我这里这个onClick里面绑定的函数涉及到传参了,所以的用匿名函数自执行的方式 */}
								{/* <button onClick={() => { this.handleDelete(index) }}>X</button> */}

								{/* 这里如果用Consumer的方式来接收爷爷传过来的函数,就不用再执行自己定义的函数了,直接执行传过来的函数就行了 */}
								<button onClick={() => { deleteTask(index) }}>X</button>
							</li>
						)
					}
				}
			</Consumer>

		)
	}
	handleDelete = (index) => {
		// 我现在想通过我这个孙子组件来删除爷爷组件里面的list数组里面的数据
		// 我在爷爷里面定义一个修改我自己状态数据的函数,然后把它传给父亲,然后父亲在传给孙子
		this.props.deleteTask(index);
	}
}

export default ToduWrapperItem