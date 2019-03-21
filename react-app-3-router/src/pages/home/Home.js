import React, { Component } from 'react';

import './style.css';

class Home extends Component {
    authorInput = React.createRef()
    articleInput = React.createRef()



    render() {
        return (
            <div className="home">
                <h4>
                    发表话题
                </h4>
                {/* 可以选择监听button的点击事件,或者监听form的提交事件,这里选择监听form */}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-box">
                        <label htmlFor="author">作者姓名: </label>
                        {/* 加一个required,提交时如果没有东西,能提示我一下 */}
                        {/* 拿到我这个input的内容 */}
                        <input id="author" required ref={this.authorInput}></input>
                    </div>
                    <div className="form-box">
                        <label htmlFor="article">文章标题: </label>
                        <input id="article" required ref={this.articleInput}></input>
                    </div>
                    <button className="confirm-btn">提交</button>
                </form>
            </div>
        )
    }

    handleSubmit = (e) => {
        // 因为表单有一个默认点击跳转的事件,我们要把它阻止一下
        // 在react里面阻止默认事件只能用这个函数,不能用return false

        // 提交的时候需要拿到cookie,验证一下,判断登录了再进行存储
        const isLogin = document.cookie.includes('login')

        e.preventDefault();
        const author = this.authorInput.current.value
        const title = this.articleInput.current.value
        // 生成一个15位的随机数给Id
        const Id = Math.floor(Math.random() * 1000000000000000);
        // 把这三个存到对象里面,最后再把这个对象存到数组里面
        const article = {
            author,
            title,
            Id
        }

        // 存储之前看看登录了没有,登录了存储,没有登录跳转到登录页面 
        if (isLogin) {
            alert('没有登录,不能发表话题,跳转到登录页面')
            this.setArticleStorage(article);
        } else {
            // 我这里没有登录跳转的话,希望我回来的时候我的输入框还是会有值,那么我跳转的时候可以用state给他传到login页面,login页面跳回来的时候我再给他传回来
            this.props.history.push({
                pathname: '/login',
                state: {
                    article,
                    // 我再给他加一个我当前的地址,方便他跳回来
                    from: this.props.location.pathname
                }
            });
        }
    }

    // 在这个组件一进来的时候,我需要拿到我跳转回来的时候传过来的值,然后渲染到input标签上面
    // 在生命周期函数里面进行操作
    // getDerivedStateFromProps这个函数第一次执行的时候是拿不到this的,不太好使
    // 用conponentDidMount来写
    componentDidMount() {
        const { location } = this.props;
        // 为了不报错,需要加一个&&运算
        const articleInfo = location.state && location.state.article;

        console.log(articleInfo);

        // 如果我这个articleInfo存在的话再设置这个value的值
        if (articleInfo) {
            this.authorInput.current.value = articleInfo.author;
            this.articleInput.current.value = articleInfo.title;
        }

    }

    // 为了方便组件之间的通信,这里用缓存来进行通信,写一个把数据存到缓存里面的函数
    setArticleStorage = (article) => {
        // 往缓存里面放入数据的流程,拿到缓存内的数据(字符串),拿到之后变成数组,把数据放到数组里面去,再把这个数组放到缓存中去

        // 首先取出来,没有就给他一个空数组
        const articleList = JSON.parse(localStorage.getItem('articleList')) || [];
        articleList.push(article);
        localStorage.setItem('articleList', JSON.stringify(articleList));

        // 进行一个路由的跳转
        this.jumpToTopics()
    }

    // 这里要实现一个跳转
    jumpToTopics = () => {
        // 我这个组件是写在我的Route组件里面component里面的,我这个Route组件里面有一些个属性,Route相当于一个provider,在这个组件内部可以取到这些个属性方法进行使用,这个组件内部的组件相当于一个consumer

        // 这个传过来的东西就放在this.props里面

        // 路由跳转
        this.props.history.push('/topics')
    }
}

export default Home;