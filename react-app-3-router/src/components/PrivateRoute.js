// 在这个里面用一个高阶组件对这个跳转进行拦截

import React from 'react'

import { Route, Redirect } from 'react-router-dom'

// 我在使用的时候是把它当route标签来使用的,所以给这个标签里面传的值在这个函数组件的参数中可以取到
// 我这个在外面传的参数里面,component参数里面的topic组件我们可能用不到,因为只有登录了才跳转到那个组件去,没登录就跳转到登录页面,所以在接参数的时候把component这个属性单拎出来,并且重新命名成大写的,其他的放在一起
const PrivateRoute = ({component: Component, ...props}) =>{
	return (
		// 我这个组件的返回一个Route组件,把在route那设置的参数设置上
		// 所以我现在下面设置的这个route就是一个有path,没有component的route
		// component这个参数,跳转的时候没法加判断,要用render参数,他可以传一个函数
		<Route {...props} render={(p) => {
			// 判断一下登录了吗
			const isLogin = document.cookie.includes('login=true');
			// 我在传过来的时候就可以重新命名
			// const Component = component;
			// 如果我登录了就返回我的这个参数中的组件
			if(isLogin){
				return <Component></Component>
			}else{
				// 如果没有登录的话,返回一个重定向,读到那一行的时候就可以直接重定向到登录页面了

				// 给个提示
				alert('你还没有登录,需转至登录页面进行登录')
				
				// 这里跳转的时候也给他传一个值,方便跳转回来
				return <Redirect to={{
						pathname: "/login",
						state: {
							// 如何取当前的路径,我render函数里面有一个参数p这个p里面就有一些个属性和方法
							from: p.location.pathname
						}
					}
				}></Redirect>
			}
		}}></Route>
	)
}
export default PrivateRoute