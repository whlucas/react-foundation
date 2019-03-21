import React, { Component } from 'react';

import './style.css';
class Login extends Component {
    // 写一个状态来控制文字的显示
    state = {
        // 如果cookie有值那他就是true
        isLogin: document.cookie.includes('login=true')
    }

    render() {
        return (
            <div className="login">
                <button className="login-btn" onClick={this.handleClick}>{this.state.isLogin ? '退出' : '登录'}</button>
            </div>
        )
    }

    handleClick = () => {
        // 先拿到值,然后再设置值
        const isLogin = this.state.isLogin;

        // 正常来讲我们要登录的话,会给后台发送请求,后台会给我们设置一个cookie,
        // 我们这里也来模拟一下

        // 如果是true就删掉,false就设置
        if (isLogin) {
            this.setCookie('login', '', -1);
        } else {
            this.setCookie('login', true, 300)
            // 这里我在登录的时候,再让他跳回我来的时候的那个地址
            this.jumpBack()
        }

        this.setState({
            isLogin: !isLogin
        })


    }

    setCookie = (key, value, day) => {
        // 我这里拿一个时间,这个要记一下
        const expires = day * 24 * 60 * 1000;
        const date = new Date(+new Date() + expires)
        document.cookie = `${key}=${value};expires=${date.toUTCString()}`
    }

    jumpBack = () => {
        // 拿到我传过来的地址
        const {location, history} = this.props
        // 这里加一个无值的保护
        const from = location.state && location.state.from

        if(from) {
            alert('回到上一级页面')
        }

        // 判断一下如果我这个from是一个根路径的话,那就返回根路径,并且还要携带从根路径传过来的信息
        if (from === '/'){
            history.push({
                pathname: from,
                state: {
                    article: location.state.article
                }
            })
        } else{
            history.push(from);
        }
    }

}

export default Login;