// 引入
import React from 'react';
import ReactDOM from 'react-dom';

// 引入css
import './index.css';

// 引入组件
import TagList from './components/TagList'
import ToduList from './components/ToduList'
import Control from './components/Control'
import UnControl from './components/UnControl'

function test () {
    return 'wuhaolin'
}

const topList = [
    {
        id: 0,
        title: '是大家发挥空间',
        new: true, // 要不要加"新"这个标签
        hot: '46万'
    },
    {
        id: 1,
        title: '打算看见你发',
        new: true,
        hot: '44万'
    },
    {
        id: 2,
        title: '大家看法你看上单',
        new: false,
        hot: '35万'
    },
    {
        id: 3,
        title: '发快递积分你是',
        new: false,
        hot: '33万'
    },
    {
        id: 4,
        title: '大房间爱上',
        new: true,
        hot: '32万'
    },
    {
        id: 5,
        title: '打款费那事',
        new: false,
        hot: '25万'
    },
    {
        id: 6,
        title: '瓦房店市进口奶粉',
        new: true,
        hot: '24万'
    },
    {
        id: 7,
        title: '是打飞机',
        new: false,
        hot: '24万'
    },
    {
        id: 8,
        title: '瓦房店就上课呢',
        new: false,
        hot: '22万'
    },
    {
        id: 9,
        title: '大家看法那块',
        new: false,
        hot: '20万'
    },
    {
        id: 10,
        title: '大家发生纠纷',
        new: true,
        hot: '20万'
    }
];

let element = (
    // 在jsx语法中我写{}代表我这个里面是js语法,<>里面的东西是html
    // <div style={  {width:'400px', backgroundColor: 'red'}  }> /!* 这里必须只有一个根标签 *!/
    // 我这里就不用行间样式了,直接给他个类名,然后直接引入css
    // 我这里设置class类名不能用class,class是一个关键字他是不合法的,要用className
    <div className="wrapper">
        {/*但是我这里不想看到这个没有用的div标签，react下面有一个组件Fragment可以帮我们实现这个需求*/}
        {/*这个Fragment是React下面的一个属性，所以在引入的时候可以用解构的方式引入，这样就可以直接Freagment这样用了*/}
        {/*import React, {Fragment} from 'react'*/}
        {/*如果我这个Fragment也不想写,就直接写<></>这个标签,这个标签也不会被渲染*/}
        {/*但是我这里的需求是,需要设置父级的宽度,确实要加一个父级的标签,所以这里直接包一个div就可以*/}
        <div className="search-title-box">
            {/*所以我这边第一个{}代表里面是js语法,第二个{}代表里面是一个对象*/}
            {/*花括号里面可以写表达式,可以写三目运算符,只要有返回值就行,比如我在里面写一个函数执行,这个函数结果是返回一个字符串*/}
            {/*{true ? '1' : ''}*/}
            {/*{test()}*/}
            {/*但是我这里不能写一个对象,对象作为一个子元素是不合法的*/}
            {/*我可以把他转化成字符串*/}
            {/*{JSON.stringify({width:'400px', backgroundColor: 'red'})}*/}
            {/*我这个{}里面可以写数组,数组里面的东西可以被直接渲染出来*/}
            {/*也就是说我在render函数里面的第一个参数里面直接放一个数组他也会被直接显示出来*/}
            {/*{[<span>111</span>,<p>222</p>,3]}*/}
            <h5 className="search-title">搜索热点</h5>
            <span className="refresh">换一换</span>
        </div>
        <ul className="top-list-container">
            {
                //[
                    // (<li className="top-list">
                    //     <div className="top-title">
                    //         <span className="hot-index">1</span>
                    //         <a className="topic-title">撒大大发</a>
                    //         <span className="topic-new">新</span>
                    //     </div>
                    //     <div className="hot-degree">
                    //         <span>47万</span>
                    //     </div>
                    // </li>),
                    // 这里为了不报错在最外面加一层括号
                    // 我这里可以写一个逗号,然后在写一套li,但是这要就很蠢,需要遍历数组
                    // 我现在想渲染很多个li,但是react里面没有v-for这里使用在{}里面写数组进行渲染
                    // 我这里需要遍历数组,而且我遍历数组的这个方法还的有返回值,用map
                //]
                // 我这个map就是返回一个数组,数组里面的,每一项就是我return的值
                topList.map((item, index) => {
                    // 通过索引值来试不同的标签有不同的样式
                    // 现在这里定义一个样式,然后写到行间里面去
                    const indexStyle = {};
                    switch (index) {
                        case 0:
                            indexStyle.backgroundColor = '#f54545';
                            break;
                        case 1:
                            indexStyle.backgroundColor = '#ff8547';
                            break;
                        case 2:
                            indexStyle.backgroundColor = '#ffac38';
                            break;
                        default:
                            break;
                    }
                    // 我这个需要迭代的标签里面必须要有一个key值,为了方便渲染
                    // 为什么key不用index? 当我渲染数组里面的几个标签的时候,渲染完成我改变这个数组的顺序,这个时候他会重新渲染,渲染的时候她会查看key值对应的标签变化了没有,如果没变就移动一下顺序,变了就重新渲染,这种情况如果用了id就只会移动位置,如果用了index就会重新渲染
                    return (<li className="top-list" key={item.id}>
                                <div className="top-title">
                                    {/*js操作放到{}里面*/}
                                    <span className="hot-index" style={indexStyle}>{index + 1}</span>
                                    <a className="topic-title">{item.title}</a>
                                    {/*我这里需要判断一下如果item.new是true就显示新*/}
                                    {
                                        item.new ? <span className="topic-new">新</span> : ''
                                    }
                                </div>
                                <div className="hot-degree">
                                    <span>47万</span>
                                </div>
                            </li>)
                })
            }
        </ul>
    </div>
)



// 还有一个for关键字需要注意
// for熟悉的作用是里面写一个input里面的id值,当我点这个label的时候就能够聚焦到我的input
// 这里要把我的for改成htmlFor
let label = (
    <>
        <label htmlFor='inp'>name</label>
        <input type="text" id='inp'/>
    </>
)

// 在vue里面有一个v-html 相当于interHTML
let str = "<span>shanshan</span>";
// 就是往div里面放一个span标签
let div1 = <div v-html={{str}}></div>;

// react里面也有一个这样类似的功能
// 要放一个对象,这个对象里面有一个__html属性
// 一样的把这个div放到渲染函数里面去渲染就渲染出来一个里面有span标签的div
// 但是需要注意一点一旦我这个标签需要使用我这个dangerouslySetInnerHTML这个属性了,我这个标签里面就不能有任何东西了
// 但是不建议用这个属性,可能会遭到XSS攻击
let div = <div dangerouslySetInnerHTML={ {__html: str} }></div>;



// 组件: 函数组件function 类组件class

// 函数组件:写一个函数,返回一个html结构,在渲染的时候让这个函数执行就好了
// 或者说我在渲染的时候直接写一个<Component></Component>标签,但是注意,命名的时候首字母一定要大写才行
// 也就是说小写的是jsx元素大写的是组件


function Compoent () {
    return(
        <div>我是一个函数插件</div>
    )
}

// 我把这个列表element当成函数组件写到其他的文件夹里面,然后在这里引入进来渲染
// 但是我这个函数组件要用到数据topList,数据写在了这个里面,我需要把数据传到组件里面
// 直接在渲染的时候在标签里面传数据
// 之后我这个组件就可以复用了

// 这个函数组件属于比较简单的组件,他这个组件内部没什么逻辑,没有组件内部的数据,被叫做无状态组件

let list =(
    <>
        <TagList list={topList}></TagList>
        <TagList list={topList}></TagList>
    </>
)

ReactDOM.render(<UnControl></UnControl>, document.getElementById('root'));



