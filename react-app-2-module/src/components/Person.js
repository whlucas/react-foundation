// 这个里面写了一些传值的问题

import React from 'react';

// 这里进行属性校验的先安装一个包 npm install --save prop-types
// 导入
import PropTypes from 'prop-types'

// 我们可以给这个组件设置默认的属性值,如果这些值没有传进来,那么就用我这里设置的默认值
// 如果不想写在外面,还可以写道class的里面去,但是要写在静态的方法里面
// Person.defaultProps = {
// 	name: 'duyi'
// }

class Person extends React.Component {
	// 函数组件接收参数可以直接在参数里面接收
	// 这个类组件传过来的参数就直接在this.props里面了,直接拿过来就用了

	// 如果我要改变我传过来的值要把他放到状态里面
	state = {
		name: this.props.name
	}

	// 这里设置默认的熟悉值
	static defaultProps = {
		name: 'wuhaolin'
	}

	// 这里对传进来的熟悉进行校验,还是要写静态的熟悉
	// 属性校验仅仅是给一个警告,但是不影响页面的渲染
	static propTypes = {
		// 我现在规定我传进来的name必须是字符串
		// 这些东西在github上面搜索prop-types就能找到
		name: PropTypes.string,
		age: PropTypes.number, // 传过来的age,必须是数字
		sex: PropTypes.oneOf(['男', '女']), // 传过来的sex必须是男/女
		figure: PropTypes.objectOf(PropTypes.number), // 传过来的figure必须是对象,且对象里面的属性值必须是数字
		hobby: PropTypes.arrayOf(PropTypes.string), // 传过来的必须是数组且数组里面必须是字符串
		salary (props, propsName, componentName) { // 他可以传一个函数,第一个参数是我传过来的数据的名字,第二个是我前面的这个salary,最后一个我在哪个组件进行组件的校验,它就显示是哪个组件
			// 如果我这个工资是小于10000的我就抛出一个错误
			if(props[propsName] < 10000){
				return new Error(
					`${componentName}组件传递过来的${propsName}属性的值太小了,应该大于10000`
				);
			}
		}
	}

	render() {
		// 把拿到的东西解构一下,方便使用
		const { name, age, sex, figure, hobby, salary } = this.props
		return (
			<>
				<div>{this.state.name}个人资料:</div>
				<div>年龄: {age}</div>
				<div>性别: {sex}</div>
				<div>身高: {figure.height}</div>
				<div>体重: {figure.weight / 2}</div>
				<div>兴趣: {hobby}</div>
				<div>薪资: {salary}</div>

				<button onClick={this.handleClick}>修改</button>
			</>
		)
	}
	handleClick = () => {
		// 注意我穿过来的值是不能修改的
		// this.props.name = 'duyi'
		// 如果我想修改我可以把传过来的值放到状态里面,修改状态里面的值
		this.setState({
			name: 'wuhaolin'
		})
	} 
}

export default Person;