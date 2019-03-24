// 这个我用react-redux来实现传值,细节去看Counter.js
import React , { Component } from 'react';

// 用bindActionCreators来进行简化,细节去看Counter.js
import {bindActionCreators} from 'redux';


// 引入
import {connect} from 'react-redux';

// 引入不要了
// import store from '../store/index' 

// import * as Types from '../store/actionTypes'

import * as actions from '../store/actions/toduList'
class TodoList extends Component {

	// 取值不要了
	// state = store.getState().toduList

	render() {
		// 这个里面就用我props里面的值
		const {inpVal, list} = this.props;

		return (
			<>
				<div>
					<input type="text" value={inpVal} onChange={this.handleChange} />
					<button onClick={this.handleAdd}>添加</button>
				</div>
				<ul>
					{
						list.map((item, index) => {
							return (
								<li key={item + index}>
									{item}
									<button onClick={() => { this.handleDelete(index) }}>X</button>
								</li>
							)
						})
					}
				</ul>

			</>
		)
	}

	// 任务的派发进行更改
	handleChange = (e) => {
		// const action = Actions.getTodoChangeInputValueAction(e.target.value)
		// store.dispatch(action);
		this.props.getTodoChangeInputValueAction(e.target.value)
	}

	handleAdd = () => {
		// const action = Actions.getTodoAddItemAction(this.state.inpVal)
		// store.dispatch(action);
		this.props.getTodoAddItemAction(this.props.inpVal)
	}

	handleDelete = (index) => {
		// const action = Actions.getTodoDeleteItemAction(index);
		// store.dispatch(action);
		this.props.getTodoDeleteItemAction(index)
	}


	// 订阅不要了
	// componentDidMount() {
	// 	store.subscribe(this.handleStoreChange)
	// }

	// handleStoreChange = () => {
	// 	this.setState(store.getState().toduList);
	// }

}

const mapStateToProps =  (state) => ({
	inpVal: state.toduList.inpVal,
	list: state.toduList.list
})

// const mapDispatchToProps = (dispatch) => ({
// 	changeVal: (val) => {
// 		dispatch(Actions.getTodoChangeInputValueAction(val))
// 	},
// 	addItem: (val) => {
// 		dispatch(Actions.getTodoAddItemAction(val))
// 	},
// 	deleteItem: (index) => {
// 		dispatch(Actions.getTodoDeleteItemAction(index))
// 	}
// })

// const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

// 利用第二个参数写actions来进行化简
export default connect(mapStateToProps, actions)(TodoList);