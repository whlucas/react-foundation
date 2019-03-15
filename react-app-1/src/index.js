// 这个React的名字不能改,必须是React
import React from 'react';

import ReactDOM from 'react-dom';

// 这个是我渲染页面的,暂时不要
// import App from './App';

// PWA 他可以让我们通过写网页的形式写一个app应用 引入这个serviceWorker使得用户在第一次访问的时候需要使用网络,第二次就不需要网络了,这个网页就被缓存到浏览器里面了
// import * as serviceWorker from './serviceWorker';

// 我在这个里面第一个参数写一个div,他也能把这个div渲染出来

// 这个React虽然没有用到,但是必须要引入,他代表了一个jsx语法
// 这个语法形式就是在js文件里面写html标签
// jsx ==> js + xml(html)
let div = <div id='demo'>shanshan<span>zuimei</span></div>;
// 这个jsx会利用bable进行转换,转换成React.createElement(type,props,children...),如果我引入的时候是小写的react,那就不好使了

// 我这一行和上面那一行代码是等价的
// let div = React.createElement('div',{id: 'demo'}, 'shanshan', React.createElement('span',null, 'zuimei'));
// 也就是说这个jsx就是一个语法糖,能让我们简洁的写东西

// 我后面那一串语法就像上面一样是一个函数,这个函数会有一个返回值放到div这个变量里面,它会返回一个对象

// 总结一下jsx语法,js + html = React.createElement, 通过这个函数返回一个vNode结点 ,然后把这个结点渲染到页面上


// 我这个render是ReactDOM里面的一个函数,所以我们引入的时候我可以直接通过解构的方式直接引入render函数
// import {render} from 'react-dom';
// 就可以直接render()这样来写了

// 第一个参数是我要接受渲染的元素,第二个参数是一个容器,这个容器就是我选到index.html里面的id为root的标签
ReactDOM.render(div, document.getElementById('root'));

// 使用serviceWorker
// serviceWorker.unregister();



// 不要引入我这个react,自己模拟一下这个react
// 看看他会不会走自己写的这个React里面的createElement这个函数
const React = {
    createElement(type, props, ...children){ // 用解构赋值来传children
        return { // 返回一个对象,对象里面存着结点信息
            type,
            prop,
            children
        }
    }
};

// 我再写一个渲染的函数
const render = (vNode, container) => {
    // 如果里面的子元素是一个字符串的话就不操作,直接往里面加字符串就行
    if(typeof vNode === 'string'){
        const text = document.createTextNode(vNode);
        return container.appendChild(text);
    }
    const {type, props, children} = vNode

    // 生成这个div
    const ele = document.createElement(type);
    // 把属性加上
    for(let key in props){
        // 私有属性不加
        if(key.startsWith('__')){
            break;
        }
        ele.setAttribute(key, props[key])
    }

    // 递归children
    children.forEach(item => {
        render(item, ele)
    });

    container.appendChild(ele);
};

render (div, window.root);
