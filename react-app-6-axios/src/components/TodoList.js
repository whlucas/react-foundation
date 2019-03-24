import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../store/actions/todoList';
import axios from 'axios'

// 这里我写一个axios的拦截器interceptors,针对请求回来的值response进行拦截,在use函数里面传递一个函数,这个函数接收一个参数res,在这个函数里面要对这个res进行处理
axios.interceptors.response.use(res => {
    // 这个函数的返回值就是我axios.get().then()里面的res,这个函数的返回值会作为.then的参数返回进来
    // 也就是说如我我写了这个方法,我里面什么都不返回,那么我下面的axios请求请求回来的就是一个undefined
    
    // 也就是说我我这里如果返回的是res.data.data,下面请求回来的就直接是那个我们想要的数组了,就不用再res.data.data了

    // 但是还是的判断一下,如果我请求成功了,再返回这个里面的数据
    if(res.data.code === 0){
        return res.data.data;
    }else{
        // 如果请求失败了就给他返回一个失败的Promise对象
        return Promise.reject('请求出错');
    }
})

// 他不光可以对我们请求回来的数据进行拦截,还可以对我们发送的请求进行拦截
// 比如我们可以往我们的没一个请求都放一个标识信息
axios.interceptors.request.use(config => {
    // 这个config就是我们在请求的时候携带的信息
    // console.log(config)

    // 我们在这里可以往我么你的config里面的请求头添加一些个属性
    config.headers.token = 'sdafasdftoken'  // 注意这里加中文就
    return config;
})

class TodoList extends Component {

    // 我现在需要在一开始的是时候发送一次请求,把请求回来了的数据放到redux里面,然后再通过redux里面的数据来进行渲染

    // axios
    // npm install axios --save

    // 在生命周期函数里面发送请求
    // 我们这个路径localHost 3000指的是我们public文件夹
    // 所以我们可以把我们的这个需要请求的文件写在public文件夹里面,起名叫list.json
    componentDidMount() {
        // 请求的是本地文件,直接写/list.json也可以
        axios.get('http://localhost:3000/list.json').then(res => {
            // 成功了之后,给他放到redux里面去
            // 所以我们要再添加一个action和reduster

            // 拿到我请求回来的数据
            // const list = res.data.data;

            // 在actions里面添加好了以后,执行了react-redux那一套之后这个函数就会被放到this.props里面去
            // 在这里执行这个函数,并且给他传值

            // 这里仅仅是派发了任务,相当与执行了dispatch
            // this.props.getInitList(list)

            // 由于上面使用了拦截器,我就传res就可以了
            this.props.getInitList(res)
        }, res => {
            // 如果没请求回来就打印一个错误信息
            console.log(res);
        })
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