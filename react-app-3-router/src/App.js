import React, { Component } from 'react';

import Nav from './components/nav/Nav'

import './styles/app.css'
class App extends Component {

	render() {
		return (
			// 因为可能不光我们这个组件要用content这个类名,其他的组件也要用,所以最好在最外面给他套一个div起一个class类名
			<div className='app'>

				{/* this.props.history 我还想要用这个来渲染,但是发现没有,因为我的这个Nav组件不是写在我Route里面的conponent里面的,所以找不到我的这个这个history,不能用它进行跳转 */}
				{/* 如果这个Nav被Route包裹了,比如 */}
				{/* <Route path="/" component={Nav}></Route> */}
				{/* 这样的话就可以了取到我的这个history了 */}
				{/* 这样的话这个组件就被称为高阶组件,可以在Nav里面实现js操作的跳转功能 */}
				{/* 但是上面那种方式是不合理的,容易让人不理解 */}
				<Nav></Nav>
				{/* 解决办法是,取到我的nav.js组件下面,写一个函数对nav组件进行一下处理,导出的时候导出我处理过得Nav组件 */}

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