import React from 'react';

import ToduWrapperItem from './ToduWrapperItem'

class ToduWrapperList extends React.Component {
	render() {
		// 这里把this里面接收到的值解构一下
		const { list, fn } = this.props;
		return (
			<ul>
				{
					list.map((item, index) => {
						return (
							// <li key={item + index}>{item}</li>
							// 我这里要把这个li写到小组件里面,就不能循环遍历li了,就要循环遍历ToduWrapperItem
							// 把数组里面的每一项传过去让他显示
							// 还得把爷爷传过来的函数传给孙子
							// 给孙子传一个index,让孙子知道自己是第几个,好删除
							<ToduWrapperItem index = {index} key = {item + index} task = {item} deleteTask = {fn}></ToduWrapperItem>
						)
					})
				}
			</ul>
		)
	}
}

export default ToduWrapperList