// 这里我们使用react-redux,来调用store

import React, { Component } from 'react';

import {bindActionCreators} from 'redux';

// 用react-redux就不用引入store
// import store from '../store'

// import {getCountAddAction} from '../store/actions/counter'
import * as actions from '../store/actions/counter'

// 引入connect
import {connect} from 'react-redux'

class Counter extends Component {

	// 这个也不用取数据了
	// state = store.getState().counter

	render() {
		return (
			<div>
				{/* {this.state.count} */}
				{/* 这里渲染的东西要改成props里面的东西了 */}
				{this.props.count}
				<button onClick={this.handleClick}>add</button>
			</div>
		)
	}


	handleClick = () => {
		// 这个派发任务也不用了
		// const action = getCountAddAction(3)
		// store.dispatch(action)

		// 直接调用我下面定义的props里面的函数来进行派发
		this.props.getCountAddAction(6)
	}

	// 也不用订阅了
	// componentDidMount () {
	// 	store.subscribe(() => {
	// 		this.setState({
	// 			count: store.getState().counter.count
	// 		}) 
	// 	})
	// }

}

// 使用connet,这个connect执行它会返回一个函数,在这个返回的函数中我们把这个组件传过去执行
// 这样就利用connect对我们的这个组件进行了一个包装

// 这个connect方法接收了两个参数,
// 第一个读他的意思是,遍历store里面的state里面的值放到属性里面去
// 第二个遍历DisPatch,放到props里面去,Dispatch就是我传action的那个函数,也就是遍历出来很多个派发任务的函数

// 也就是说我这两个参数最后放到这里的是一个对象,那么我把它们定义成两个函数,这两个函数返回的是一个对象

// 这个store里面的东西一变,他就给你执行一下这个函数
// const mapStateToProps = (state) => ({
// 	// 以后直接返回一个东西就都这样写了
// 	// 我这里传了一个参数state,这个state其实就是store里面的state
// 	// 也就是state = store.state

// 	// 我在里设置的count就直接设置到props上面了
// 	count: state.counter.count
// })


// 这里我再稍微化简一下上面的mapStateToProps
// const mapStateToProps = (state) => {
// 	return state.counter
// }

// 也就是可以这样,但是这样的话,就只能是我counter里面的所有的值都需要的话才能这么写
const mapStateToProps = (state) => state.counter

// 这个组件一被挂载,他就给你执行一下这个函数
// const mapDispatchToProps = (dispatch) => ({
// 	// 这个里面要往props里面放的是一个函数,这个函数来派发任务
// 	add: (val) => {
// 		// 可以直接用我这个参数里面dispatch
// 		dispatch(getCountAddAction(val))
// 	}
// })

// 我可以利用一个redux提供的bindActionCreators函数来对mapDispatchToProps进行简化
// 首先引入这个方法
// const mapDispatchToProps = () => {
// 	// 在这个里面调用这个方法bindActionCreators,并且把它的执行结果返回
// 	return bindActionCreators()
// }

// 就相当于这么写
// 他的里面可以接两个参数,第一个参数是我们所有动作的集合,把所有的动作都放到一个对象里面,把这个对象传入到第一个参数中,第二个参数就是mapDispatchToProps这个里面的dispatch
// 第一个参数中所有的动作的集合我都放到了store/actions文件夹下面的对应文件里面了

// 注意现在props里面的函数名不是我之前起的add了,是我写在store/actions中对应文件的函数名
// const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// 再简化一点,当我在connect下面的第二个参数中填入actions的时候,也就是填入的是我导入进来对应的函数集合的时候,他就自动的给我们进行一个mapDispatchToProps的一个创建以及填入
export default connect(mapStateToProps, actions)(Counter);