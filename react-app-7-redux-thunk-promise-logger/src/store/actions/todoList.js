import * as Types from '../actionTypes';

import axios from 'axios'
export const changeVal = (value) => {
    return {
        type: Types.CHANGE_INPUT_VAL,
        value
    }
}

export const addItem = (value) => {
    return {
        type: Types.ADD_TODO_ITEM,
        value
    }
}

export const deleteItem = (index) => {
    return {
        type: Types.DELETE_TODO_ITEM,
        index
    }
}

// 加一个给redux添加数据的action
export const getInitList = () => {
    // 我现在不要在组件里面请求数据再放到redux里面了,这样很麻烦,我直接在这里的请求数据,然后把它存到他自己的value里面,然后reducers找到这个方法去存到store里面就可以了,

    // 在组件里面只要去执行(dispatch)这个方法就可以了

    // 因为redux和raact本来就是分开的

    // 但是这么做是拿不到数据的,因为axios是异步的,还没请求到数据就放到list里面了
    // 又不能把return放到axios里面去,因为这样的话是ruturn不出来的

    // let data;
    // axios.get('list.json').then(res => {
    //     data = res;
    // })



    // return {
    //     type: Types.GET_INIT_LIST,
    //     // 把这个请求回来的data放到list里面去,
    //     list: data
    // }


    // 这样都不行,我让这个函数return一个函数
    // return dispatch => {
    //     // 在这个函数里面进行一次请求
    //     axios.get('list.json').then(res => {
    //         // 我既然ruturn了一个函数就说明我没有进行dispatch的派发,所以就在我的这个里面进行dispatch的派发,我们这个thunk中间键用了以后,他就可以把我们return的这个函数的第一个参数变成dispatch,这样就不用引入dispatch了
    //         // 这样就可以在这个函数里面进行dispatch任务派发,传给他一个对象,对象里面就是我要更改的数据
            // dispatch({
            //     type: Types.GET_INIT_LIST,
            //     list: res.data.data
            // })
    //     })
    // }

    // 但是这里返回的是一个函数,但是我们dispatch能接收一个对象,不能接收函数,所以我们可以用一个中间件来进行操作dispatch,使得我们的dispatch可以接收函数
    // 首先需要对中间键进行引入,在store里面的index.js里面进行操作



    // 用了thunk之后可以返回函数,但是不能返回一个返回一个promise
    // 如果想返回Promise,那就用redux-promise
    return new Promise ( (resolve, reject) => {
        axios.get('list.json').then(res => {
            // 同理我这里的用dispatch去派发任务,但是这里没有,那么这个redux-promise就会把这个resolve给我变成dispatch
            resolve({
                type: Types.GET_INIT_LIST,
                list: res.data.data
            })
        })
    })
}