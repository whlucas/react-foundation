// 这里因为用到了jsx所以必须要引入react
import React from 'react';


// 这个函数组件属于比较简单的组件,他这个组件内部没什么逻辑,没有组件内部的数据,被叫做无状态组件
// 这种无状态组件仅仅只使用与展示,不需要进行逻辑处理
// 这个函数组件里面也没有自己的this,没有自己的生命周期

function TagList (props) {
    // 我这个里面接收传来的参数就是这个参数props
    // 我这个props是一个对象,里面有一个list属性,list属性值就是我传过来的这个数组
    // 我把我这个list拿出来


    console.log(this); // 发现没有

    const {list} = props;
    return (
        <div className="wrapper">
            <div className="search-title-box">
                <h5 className="search-title">搜索热点</h5>
                <span className="refresh">换一换</span>
            </div>
            <ul className="top-list-container">
                {
                    list.map((item, index) => {
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
}

// 把这个组件导出
export default TagList;
