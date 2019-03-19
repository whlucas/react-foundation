import React, { Component } from 'react';

import Nav from './components/nav/Nav'

import './styles/app.css'
class App extends Component {

	render() {
		return (
			// 因为可能不光我们这个组件要用content这个类名,其他的组件也要用,所以最好在最外面给他套一个div起一个class类名
			<div className='app'>
				<Nav></Nav>

				{/* 拿到App标签下面放的子元素,让他显示出来 */}
				{/* 并且给他加上样式,把App的样式放到styles文件夹里面,也可以放到src文件夹里面 */}
				{/* 把样式给他在这个文件夹下面引入 */}
				<div className="content">
					{
						this.props.children
					}
				</div>
			</div>
		)
	}

}

export default App;