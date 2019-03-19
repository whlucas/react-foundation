import React, { Component } from 'react';

// 引入路由
import { NavLink } from 'react-router-dom'

import './style.css'

class ActivitiesNav extends Component {

	render() {
		return (
			<div className="activities-nav">
				{/* 这里注意我前面必须要有一个/,要不然我多点几下就都会给我拼接上url */}
				<NavLink to="/activities/recommended">推荐</NavLink>
				<NavLink to="/activities/all">全部</NavLink>
				<NavLink to="/activities/articles">文章</NavLink>
				<NavLink to="/activities/pins">沸点</NavLink>
			</div>
		)
	}

}

export default ActivitiesNav;