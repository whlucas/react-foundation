// 对上节课的代码进行整理

import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/home/Home';
import Activities from './pages/activities/Activities';
import Topics from './pages/topics/Topics';
import Login from './pages/login/Login';

// import Nav from './components/nav/Nav'
// 因为要都放到App里面去,所以引入App就可以了
import App from './App';

// 有的人会把组件的名字写成index.js
// 这样引入的时候就不用写文件名了,他会自动的下到文件夹里面去找里面的index文件


import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
	// Link,
	// NavLink
} from 'react-router-dom'

// 引入样式
import './styles/index.css'
// 我在index.css文件当中引入一个reset.css,这样这理就只需要引入一个css文件就好了
// import './styles/reset.css'



// 我这个nav应该是一个组件应该把它放到公共组件里面去
// src下面新建一个文件夹components,里面放我这个Nav组件
ReactDOM.render(
	<Router>
		{/* 我的这个router只能有一个子节点,所以我要在外面包一个根节点 */}
		<>
			{/* 我现在想要在这个里面引入我的这个Nav组件 */}

			{/* 但是我Nav组件下面这个也是一大块,我现在想要,把Nav组件和下面的一大块都放到一个根组件App里面,然后这里就引入根组件App就行了 */}

			{/* 因为放到App里面了,所以这里就不用写了 */}
			{/* <Nav></Nav> */}

			<App>
				<Switch >

					{/* 我的这个每一个组件都应该放到一个文件夹里面去 */}

					<Route path='/' exact component={Home}></Route>

					<Route path='/activities' component={Activities}></Route>
					<Route path='/topics' component={Topics}></Route>
					<Route path='/login' component={Login}></Route>

					<Redirect to='/'></Redirect>
				</Switch>
			</App>

			{/* 我现在也想把我这个下面的东西都到app里面去,但是又想在我的这个主index.js文件里面来显示我主路由的配置,就是不能把这一套复制粘贴到App组件里面去,可以把我这个Switch标签下面的东西都放到App里面去,然后在App组件里面与拿到他App标签下面的字元素 */}

			{/* 然后把样式去写到App标签里面去 */}

			{/* <div className="content">

				
				<Switch >
				
					<Route path='/' exact component={Home}></Route>

					<Route path='/activities' component={Activities}></Route>
					<Route path='/topics' component={Topics}></Route>
					<Route path='/login' component={Login}></Route>

					<Redirect to='/'></Redirect>
				</Switch>
			</div> */}

		</>


	</Router>,
	document.getElementById('root'));


