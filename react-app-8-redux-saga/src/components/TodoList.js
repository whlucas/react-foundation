import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../store/actions/todoList';
import axios from 'axios'


axios.interceptors.response.use(res => {
    
    if(res.data.code === 0){
        return res.data.data;
    }else{
        return Promise.reject('请求出错');
    }
})

axios.interceptors.request.use(config => {
    config.headers.token = 'sdafasdftoken'  
    return config;
})

class TodoList extends Component {

    // 这里使用redux-saga来在redux里面发送请求
    // 也是先在store -> index.js里面引入redux-saga

    componentDidMount() {
        // 这个组件在componentDidMount的时候执行一个actions里面自己定义的函数,进行一次任务的派发,在sagas.js监听到这次任务的派发,让他执行某一个函数,然后在这个函数里面去执行一次异步的请求
        this.props.getTodoData();
    }

    render() {
        const { inpVal, list } = this.props;
        return (
            <>
                <div>
                    <input value={inpVal} onChange={this.handleChange}></input>
                    <button onClick={this.handleAdd}>添加</button>
                </div>
                <ul>
                    {
                        list.map((item, index) => (
                            <li key={item + index}>
                                {item}
                                <button onClick={() => { this.handleDelete(index) }}>X</button>
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    }

    handleChange = (e) => {
        this.props.changeVal(e.target.value);
    }

    handleAdd = () => {
        this.props.addItem(this.props.inpVal);
    }

    handleDelete = (index) => {
        this.props.deleteItem(index)
    }
}

const mapStateToProps = (state) => ({
    inpVal: state.todoList.inpVal,
    list: state.todoList.list
})


export default connect(mapStateToProps, actions)(TodoList);