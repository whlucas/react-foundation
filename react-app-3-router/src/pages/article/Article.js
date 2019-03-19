// 因为我这个组件只负责视图,所以把它设置成函数组件会稍微好那么一丢丢

import React, { Component } from 'react';

import './style.css';

const Article = ({match, location}) => {
    // 这个也可以在参数里面直接解构
    // const {match, location} = props;
    return (
        <div className="article">
            <div>
                文章ID:
                <span>{match.params.id}</span>
            </div>
            <div>
                文章作者:
                <span>{location.state.author}</span>
            </div>
            <div>
                文章标题:
                <span>{location.state.title}</span>
            </div>
        </div>
    )
}

// class Article extends Component {
//     render() {
//         // 我发现我在this.props.match.params.id可以取到匹配到的id
//         // 也就是在props里面的match方法里面可以找到路径拼上去的id

//         // 我可以在location里面找到我跳转的时候传过来的参数state

//         // 这个只是介绍了这种传值的方式,但是一般不这么写,都是取到了id值然后用这个id值发ajax,然后取到内容
//         const {match, location} = this.props;
//         return (
//             <div className="article">
//                 <div>
//                     文章ID:
//                     <span>{match.params.id}</span>
//                 </div>
//                 <div>
//                     文章作者:
//                     <span>{location.state.author}</span>
//                 </div>
//                 <div>
//                     文章标题:
//                     <span>{location.state.title}</span>
//                 </div>
//             </div>
//         )
//     }

// }

export default Article;