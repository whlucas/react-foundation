import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home'
import Activities from './pages/Activities'
import Login from './pages/Login'
import Topics from './pages/Topics'

// 引入样式
import './styles/index.css'
// 百度搜索reset.css 把人家提供的初始样式放进来
import './styles/reset.css'
// 首先安装router 输入 npm install react-router-dom

// 引入路由, 我们这里使用浏览器路由
// 如果觉得这个名字太长了,可以在后面加as 后面跟一个名字
// 这个B大写了说明他是一个组件,可以被渲染

// 我引入了路由,还的引入路劲path,我这个路径也是一个组件

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
	// 引入link标签用于跳转
	Link,
	// 引入能提供标识的NavLink组件
	NavLink
} from 'react-router-dom'

// 路由要有一个路由的容器
// 有两种1. HashRouter (hash路由) 2. BrowserRouter (浏览器路由)

// 区别: Hash路由会在路径前面加一个#/ 浏览器路由前面没有

// 我有四个路由,就得有四个组件去显示他们
// 为了方便区分,组件分为页面及组件和公共组件
// 在src文件夹下面创建一个pages用来放页面级组件

ReactDOM.render(
	<Router>
		{/* 我的这个router只能有一个子节点,所以我要在外面包一个根节点 */}
		<>
			<div className="nav">
				{/* Link标签就相当于那个点击跳转,跳转的目录写在属性to里面 */}
				{/* 这个Link最后会被转化成a标签,在vue里面可以把他设置成别的标签,但是在这里不行 */}
				{/* 但是我还有一个需求是我希望我点击一下我的这个link,他的样式能变一下,提示我点击他了 */}
				{/* 所以要用到NavLink */}
				{/* <Link to="/">首页</Link> */}
				{/* <Link to="/activities">动态</Link> */}
				{/* <Link to="/topic">话题</Link> */}
				{/* <Link to="/login">登录</Link> */}

				{/* 这个标签当我选中它的时候他会在这个标签上面给我添加一个class="active"的类名,方便我们改样式 */}
				{/* 但是有个问题是,我选择了动态,发现首页也加上了我的这个class,说明他和下面的路由一样是一个包含的关系 */}
				{/* 所以也要用到完全匹配exact */}
				<NavLink to="/" exact>首页</NavLink>
				<NavLink to="/activities">动态</NavLink>
				<NavLink to="/topics">话题</NavLink>
				<NavLink to="/login">登录</NavLink>
			</div>
			<div className="content">
				<Switch >
					{/* 在这里添加路径,需要有几个路由就添加几个路径 */}
					{/* 每一个路径都对应我导入的一个组件, 利用component属性 */}

					{/* 但是我这样设置是有问题的, 当我跳转到/login路劲下的时候,会同时加载首页的内容*/}
					{/* 因为我的/login包含了home的路径,所以会同时显示 */}
					{/* 他的原理是这样的,从上到下一个一个读,读到第一个Route,发现匹配到了,显示,读到第四个路径的时候,发现又匹配到了,又显示 */}
					{/* 为了解决这个问题,再引入一个Switch组件 */}
					{/* 把他包在所有的Route标签外面, 效果就是匹配到一个就不会匹配到下一个了 */}
					{/* 但是这样也不太对,我发现我/Login页面显示的是Home组件,因为他找到第一个就不会再往下找了 */}
					{/* 那么怎么办,需要用到Route里面的另外一个属性,exact={true} 完全匹配, 可以简写为exact 只有一模一样了才匹配 */}
					<Route path='/' exact component={Home}></Route>

					<Route path='/activities' component={Activities}></Route>
					<Route path='/topics' component={Topics}></Route>
					<Route path='/login' component={Login}></Route>

					{/* 还有一个功能,重定向,如果我输入了一个我没有配置过得地址,那么给我重定向到首页去 */}
					{/* 重定向这个功能也需要引入 */}
					{/* 下面这一行的意思是上面四个路径都没有匹配到的话,就重定向到根路径,用to这个属性 */}
					<Redirect to='/'></Redirect>
				</Switch>
			</div>

		</>


	</Router>,
	document.getElementById('root'));


