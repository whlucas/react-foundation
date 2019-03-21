// 这个高阶组件负责改变我link标签的类型,他默认是a标签,比如我想把它改成span
// 给他写成一个函数组件
import React from 'react';

import {Route} from 'react-router-dom'

// 我需要拿到我传进来的属性,我想把传进来的to单拎出来
const MenuLink = ({to, ...props}) => {
	return (
		// 拿到我写在MenuLink标签下面的子元素

		// 我这个要达到Route标签的效果,我点击这个span标签还的进行跳转
		// 我想用route标签下面的三个属性来进行跳转操作,但是这个MenuLink标签和Route标签没什么关系,我们可以让他返回一个Route标签,
		// <span onClick={() => {}}>{ props.children }</span>
		// 这里不用component,他一般里面放组件,用render

		// 我用Route来渲染了span标签,就可用render里面的参数p来取到那三个属性了
		// 我这个Route里面必须设置了path,在我的p.match里面才能拿到我要路径,才能方便在span标签面的设置对应的className名
		// 但是我设置了path之后,他只有匹配到了路径才会给我返回一个span拿去渲染,也就是不能一下渲染四个了,这个是用render去渲染的一个弊端
		// <Route path={to} render={(p) => {
		// 	return (
		// 		// 这个传进来的to就是我要去到的地址
		// 		<span onClick={() => { p.history.push(to) }}>{ props.children }</span>
		// 	)
		// }}></Route>

		// 所以这里用children去渲染
		// 他和render唯一的区别就是什么样的路径都能给你返回
		// 给route里面设置了to, 在里面就可以通过p.match,拿到这个路径,然后方便设置className值
		// 这里还要设置严格匹配,把剩下的参数拿过来放在这

		// 总结:path里面设置上值,代表需要进行路径的匹配,匹配到了,会在match中设置值,但是当我设置上children了以后,他不管匹没匹配到都会给我返回里面的东西
		<Route path={to} {...props} children={(p) => {
			return (
				// 这个传进来的to就是我要去到的地址

				// 这里匹配到的标签,他的match里面会有他的路径,没有匹配到的标签,他的match里面就没有东西,所以可以根据我这个p.match里面有没有值来设置这个class值
				<span 
					onClick={() => { p.history.push(to) }}
					className={ p.match ? 'active' : ''}
				>{ props.children }</span>
			)
		}}></Route>
	)
}

export default MenuLink;