import React from 'react';
class ToduWrapperItem extends React.Component {
	render() {
		// 拿到我传过来的task
		const {task, index } = this.props;
		return(
			<li>
				{/* li里面一部分是显示我传过来的值,一部分是有一个button */}
				{task}  
				{/* 我这里这个onClick里面绑定的函数涉及到传参了,所以的用匿名函数自执行的方式 */}
				<button onClick={ () => {this.handleDelete(index)} }>X</button>
			</li>
		)
	}
	handleDelete = (index) => {
		// 我现在想通过我这个孙子组件来删除爷爷组件里面的list数组里面的数据
		// 我在爷爷里面定义一个修改我自己状态数据的函数,然后把它传给父亲,然后父亲在传给孙子
		this.props.deleteTask(index);
	}
}

export default ToduWrapperItem