import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import './style.css'
class Topics extends Component {

    // 从缓存里面拿到我准备的数据
    state = {
        articleList: JSON.parse(localStorage.getItem('articleList')) || []
    }

    render() {
        return (
            <div>
                <ul className="topics">
                    {
                        // 我想让他渲染的时候,最新的信息出现在最上方,在遍历之前先给他反转一下
                        this.state.articleList.reverse().map(item => {
                            return (
                                
                                <li key={ item.Id } className="topic-box">
                                    <span>{item.author}</span>
                                    {/* 因为我们需要点击跳转,所以最好用link标签,不用添加class就需要用NavLink */}
                                    {/* 让他跳转到article,要去index里面配置一下这个路由 */}
                                    {/* 这里由于我需要跳转的是动态路由,我在路由那里设置的值的名字叫id,我这里用一个字符串拼接的方式来设置这个to */}
                                    {/* 我在这个to里面不光可以写一个字符串,还可以传一个state,这个时候就要用对象的形式来写,第一个名字必须要是pathname,第二个要是state */}
                                    {/* 这个state可以用来传参,传过去的参数可以在跳转到的界面里面了props取到,这个传参只发生在跳转的那一刻,不跳转就找不到这个 */}
                                    <Link to={ {
                                        pathname: `/article/${item.Id}`,
                                        state : {
                                            author: item.author,
                                            title: item.title
                                        }
                                    } }>{item.title}</Link>
                                </li>
                            )
                        })                        
                    }
                </ul>
            </div>
        )
    }

}

export default Topics;