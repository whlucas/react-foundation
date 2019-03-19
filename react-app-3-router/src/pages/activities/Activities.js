// 我要在这个里面设置二级路由
// 把这个二级路由也得导航栏也设置成为一个公共组件
import React, { Component } from 'react';
import ActivitiesNav from '../../components/activitiesNav/ActivitiesNav';

// 引入组件
import Recommended from './recommended/Recommended';
import All from './all/All';
import Articles from './articles/Articles';
import Pins from './pins/Pins';

import { Switch, Route, Redirect } from 'react-router-dom'

import './style.css'

class Activities extends Component {

    render() {
        return (
            <div className="activities">
                {/* 上面写导航 */}
                <ActivitiesNav></ActivitiesNav>

                {/* 下面写路由 */}
                {/* 我这个路由这么一大块,就是放我路由跳转显示的页面 */}
                <div className="content">
                    <Switch>
                        {/* 我现在想要我一点击动态,他就给我显示一个子路由,所以这里我再配置一个路由 */}
                        {/* 当我在activities这个下面的时候,他也给我跳转到这个子路由,但是光这样写,我点别的子路由,他也是显示我这个Recommened组件,因为它包含了并且我设置了Switch标签,他只匹配一个,所以我的写一个exact */}
                        {/* 但是,我这么招不能实现,一切过来activities,我的recommended就实现样式变化,因为我只有路径是activities/recommended他才给添加class类 */}
                        {/* <Route path="/activities" exact component={Recommended}></Route> */}

                        {/* 所以换种方式,用重定向 */}

                        <Route path="/activities/recommended" component={Recommended}></Route>
                        <Route path="/activities/all" component={All}></Route>
                        <Route path="/activities/articles" component={Articles}></Route>
                        <Route path="/activities/pins" component={Pins}></Route>

                        {/* 写一个重定向,他一进来就跳转到我这个重定向的页面了 */}
                        <Redirect to="/activities/recommended"></Redirect>
                    </Switch>
                </div>
            </div>
        )
    }

}

export default Activities;