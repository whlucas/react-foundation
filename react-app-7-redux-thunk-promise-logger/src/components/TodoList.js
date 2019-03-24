import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../store/actions/todoList';
import axios from 'axios'

// 我在这里写axios的拦截器依然好使! 为什么?
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

    

    componentDidMount() {

        // axios.get('http://localhost:3000/list.json').then(res => {
            
        //     this.props.getInitList(res)
        // }, res => {

        //     console.log(res);
        // })

        // 我现在不要在这个里面请求数据再放到redux里面了,这样很麻烦,我直接在redux里面的actions里面的方法里面请求数据,然后把它存到他自己的value里面,然后reducers找到这个方法去存到store里面就可以了,我在这个里面只需要执行这个方法,也就是dispatch这个方法就可以了
        this.props.getInitList();
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