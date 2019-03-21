// 我要在这个里面设置二级路由
// 把这个二级路由也得导航栏也设置成为一个公共组件
import React, { Component } from 'react';
import ActivitiesNav from '../../components/activitiesNav/ActivitiesNav';

// 引入组件
import Recommended from './recommended/Recommended';
import All from './all/All';
import Articles from './articles/Articles';
import Pins from './pins/Pins';

import { Switch, Route, Redirect, Prompt } from 'react-router-dom'

import './style.css'

class Activities extends Component {

    render() {
        return (
            <>
                {/* 我现在想要在离开这个组件的时候问一句你要不要离开 */}
                {/* 要用到一个组件Prompt,这个组件也是在react-router-dom这个里面引入 */}
                {/* message就是要询问你的内容 */}
                {/* <Prompt message='要离开吗' /> */}
                {/* 但是我这么写比较笨,在组件里面跳转他也是问你 */}
                {/* 这个message里面可以写一个函数 */}
                <Prompt message={(location) => {
                    // return true // 如果我直接返回一个true,那就是什么都能通过,返回false就哪都走不了了
                    // 它里面还有一个参数location,可以通过这个属性来进行判断
                    // 这个里面的pathname属性就是可以告诉我我要去哪
                    // 如果我这个路径里面不包含了我这个activities的话,就不是我这个子路由下的东西,就都让他透过
                    if(!location.pathname.includes('/activities')){
                        // 如果不是二级路由下的,就整个弹窗问问你,这个弹窗就会根据你的这个点击来给你一个返回值
                        return window.confirm('确定要离开吗')
                    }
                    return true;
                }} />
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
            </>
        )
    }

}

export default Activities;