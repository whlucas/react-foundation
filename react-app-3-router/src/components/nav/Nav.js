import React, { Component } from 'react';

import {NavLink, Route, withRouter} from 'react-router-dom'

import './style.css'



class Nav extends Component {

	render() {
		return (
			// 我希望我这个组件的样式我自己管理,那就把index.css里面关于这个Nav的样式截取出来,新建一个文件夹来放我的这个组件和这个组件的样式
			// 在文件夹nav里面新建一个style.css,把这个组件的样式放到这个css文件里面去,然后再把这个css文件引入
			<div className="nav">
				{/* 我在这里实现一个点击span或者别的非link标签跳转,我先用onClick来实现 */}
				<span className='logo' onClick={ this.handleClick }>跳个转~</span>
				<NavLink to="/" exact>首页</NavLink>
				<NavLink to="/activities">动态</NavLink>
				<NavLink to="/topics">话题</NavLink>
				<NavLink to="/login">登录</NavLink>
			</div>
		)
	}

	handleClick = () => {
		// this.props.history 我还想要用这个来渲染,但是发现没有,因为我的这个Nav组件不是写在我Route里面的conponent里面的,所以找不到我的这个这个history,不能用它进行跳转
		// 如果这个Nav被Route包裹了,比如
		// <Route path="/" component={Nav}></Route>
		// 这样的话就可以了取到我的这个history了
		// 但是直接在App里面用Route包裹Nav不合理,我们需要在Nav组件里面去处理,返回一个包裹好的Nav组件
		
		// 我这里利用的是react给我们准备好的withRouter
		// 就可以调用我的hidtory里面的方法进行跳转了
		this.props.history.push('/')
	}

}

// 当我一个非页面及的组件想要使用我Route里面的方法的时候,调用我这个函数,传进去我想要处理的组件就行
// 这个这个函数执行返回的就是可以使用route里面方法的组件

// const withRouter = (Component) => {
// 	// 这个里面要返回一个函数组件
// 	// 这个返回的函数组件里面还要再返回一个组件
// 	return () => {
// 		// 在这个返回的组件里面用Route来包裹一下Nav
// 		return <Route component ={Component}></Route>
// 	}
// }

// 上面那一串可以简化成下面这个,就是不写返回值的箭头函数
// const withRouter = (Component) => () => <Route component ={Component}></Route>

// 这个withRouter方法人家其实已经给我提供了,我在上面引入一下withRouter
// 然后导出的时候还是一样,导出withRouter(Nav)这个就行

// 我导出的时候导出我这个withRouter函数执行
export default withRouter(Nav);