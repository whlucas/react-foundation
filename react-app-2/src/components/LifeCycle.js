// 这个里面来写生命周期函数
import React from 'react'

import LifeCycleChild from './LifeCycleChild'
import AnotherChild from './LifeCycleAnotherChild'
// 在React 16.3之后移除了三个生命周期的函数, 带will的都移除了,这三个在16版本都是可以使用的,但是在17版本及以上就不能用了
// componentWillMount / componentWillUpdate / componentWillReceiveProps



class LifeCycle extends React.Component {
	// 首先看一下有没有默认的属性,就是没传过来值的话设置的默认属性
	static defaultProps = {}
	// 看一下有没有属性校验
	static PropType = {}

	// 然后执行这个constructor函数
	constructor() {
		console.log(`1.constructor`)
		super();
		this.state = {
			count: 0
		}
	}

	// 组件将要被挂载
	componentWillMount() {
		// 有的人会在里面进行ajax请求,拿到数据以后然后setState一下,把数据存起来
		// 但是官方是不建议的,可能会在将来造成冲突,并且在16.3版本以后直接把这个函数移除了
		// 这个里面能干的事在constructor里面也能干
		console.log(`1. willMount`)
	}

	render() {
		// 这个里面是不能发ajax的,因为发ajax的目的是请求到数据然后存起来,存起来要用this.setState
		// 但是用了这个他就会问你要不要更新,更新就要渲染,渲染就又调用setState,就无限循环
		// 所以这个里面不能发ajax
		
		// 这个里面就只用来渲染就可以了

		console.log('1. render')
		return (
			<>
				<div>
					count的值: {this.state.count}
					<button onClick={this.handleClick}>增加count的值</button>
				</div>
				{/* {
					// 判断一下我这个count值是不是等于0,等于0的话就让他出现,不等于的话就没有,没有就相当于移除了
					this.state.count === 0 
						?<LifeCycleChild n = {this.state.count}></LifeCycleChild> 
						: ''
				} */}

				{/* 我往这个子组件里面传一个父级里面的值,然后在父级里面改变一下这个值,看看会发生什么 */}
				<AnotherChild n = {this.state.count}></AnotherChild>
			</>
		)
	}

	// 组件已经被挂载
	// 发送ajax就在这个DidMount里面发送
	componentDidMount() {
		// 在这个里面可以愉快的进行ajax和setState,因为这个函数只执行一次
		console.log('1. didMount')
	}

	// 改变状态了要先问一下,要不要更新组件
	// 它里面可以传两个参数,一个是nextProps将要改变的属性的值,一个是nextState将要改变的状态的值
	shouldComponentUpdate(nextProps, nextState) {
		// 作用:优化性能

		// 我在这里可以判断一下我当前的状态和我将要改变的状态是不是一样的,如果是一样的就不用更新了
		// 如果说我setState里面让我的count + 0,那么他还是会渲染页面,还会调用这么一套函数
		// 所以我这里需要做一个判断
		console.log('1. shouldUpdate')
		// 如果相等就别渲染了
		// return !(nextState.count === this.state.count);
		return true;
		// return false; // 如果return false 就不走更新那一套, 但是状态里面的值是会更改的
	}

	// 如果回答true,就执行更新那一套,先是将要更新组件
	componentWillUpdate() {
		// 我这个里面同样不能改变状态,原因和那个render是一样的,都是在那一套循环里面的
		// 不能设置状态, 一般没啥用
		console.log('1. willUpdate')
	}
	// 然后走render

	// 然后跟新完毕
	componentDidUpdate() {
		// 同理不能设置状态, 不能设置状态,一般没啥用
		console.log('1. didUpdate')
	}



	// 更改状态
	handleClick = () => {
		this.setState({
			count: this.state.count + 1
		})
	}


}

export default LifeCycle;