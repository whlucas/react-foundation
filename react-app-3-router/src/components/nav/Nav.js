import React, { Component } from 'react';

import {NavLink} from 'react-router-dom'

import './style.css'
class Nav extends Component {

	render() {
		return (
			// 我希望我这个组件的样式我自己管理,那就把index.css里面关于这个Nav的样式截取出来,新建一个文件夹来放我的这个组件和这个组件的样式
			// 在文件夹nav里面新建一个style.css,把这个组件的样式放到这个css文件里面去,然后再把这个css文件引入
			<div className="nav">
				<NavLink to="/" exact>首页</NavLink>
				<NavLink to="/activities">动态</NavLink>
				<NavLink to="/topics">话题</NavLink>
				<NavLink to="/login">登录</NavLink>
			</div>
		)
	}

}

export default Nav;