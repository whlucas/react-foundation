// 这个里面我来使一下新的生命周期函数
// 在这个里面走一下生命周期的流程
import React from 'react'

class AnotherChild extends React.Component{

	// 首先还是看一下有没有什么默认的属性,就是没传过来值的话所设置的默认值
	static defaultProps = {}
	// 然后走属性校验
	static propsType = {}

	// 然后走constructor
	constructor() {
		console.log('3. constructor')
		super();
		this.state = {
			childCount: 0,
			
		}
	}

	// 然后因为他把那个改变props值的时候的那个willReceive的函数去除了,改成了这个
	// 因为之前那个官方不建议往state里面挂载值,但是这个函数就可以了
	// 但是有一个区别是,之前的那个必须改变了传进来的值才会执行,但是这个在一被挂载的时候就会执行一次这个函数
	// 写了这个组件里面就必须要有状态
	// 这个必须有返回值
	static getDerivedStateFromProps(props, state) { // 这个里面接收了两个参数,props代表当前属性的值,state代表当前状态的值 
		// 这个里面第一次是取不到this的,不是很好使
		console.log('3. getDerivedStateFromProps')
		// 我在这个返回值里面就可以直接,往state上面挂载值了

		// 我现在想在这个setState里面修改一下我的这个w值,但是发现修改不了,因为我一旦修改,他就会先走一个getDerivedStateFromProps,走了这个这个里面就会有一个返回值,返回值设置了我的这个w,所以w就被设置成了我的这个返回值里面设置的东西
		// 也就是说虽然我这个里面可以往state里面设置值,但是这个里面设置了之后再setState里面就不好改了,所以最好不要在这个里面设置

		// 还是像之前那样state = { name: this.props.name } 这样把属性直接设置上去就可以了
		return {
			w: props.n
		}
	}

	// 走完上面那个就开始渲染了
	render() {
		console.log('3. render')
		return(
			<div>
				另一个组件的count值 {this.state.w}
				<button onClick={this.handleClick}>改</button>
			</div>
		)
	}

	// 渲染完事执行一个已经挂载上了
	componentDidMount () {
		console.log('3. didMount')
	}

	// 然后组件运行,在属性更改前会先执行一下getDerivedStateFromProps
	// 执行完了问一下这个,要不要更新
	shouldComponentUpdate() {
		console.log('3. shouldUpdate')
		return true;
	}
	// 如果要跟新,执行render
	// 如果返回false,就再去先执行getDerivedStateFromProps,然后再问一遍shouldComponentUpdate

	// 执行完事了之后执行一下
	// 这个必须有返回值 并且这个函数是和下面的那个函数是成对出现的,不能只写一个
	// 这个函数的返回值是给下面那个didUpdate函数用的
	getSnapshotBeforeUpdate(){
		console.log('3. getgetSnapshotBeforeUpdate')
		return {  // 我这里返回一个值,在下面可以接收到
			a: 10
		};
	}

	// 然后执行didUpdate
	componentDidUpdate(prevProps, prevState, snapshot) { // 这个里面可以有三个参数,前一个的属性值,前一个的状态值,上一个Snapshot里面返回的值
		console.log('3.didUpdate')
	}

	handleClick = () => {
		this.setState({
			childCount: this.state.childCount + 1,
			// 我现在想在这个setState里面修改一下我的这个w值,但是发现修改不了,因为我一旦修改,他就会先走一个getDerivedStateFromProps,走了这个这个里面就会有一个返回值,返回值设置了我的这个w,所以w就被设置成了我的这个返回值里面设置的东西
			w: 100
		})
	}
}
export default AnotherChild;