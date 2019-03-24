import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';

import thunk from 'redux-thunk';

import promise from 'redux-promise'

import logger from 'redux-logger'
// 在这里使用中间键对dispatch进行处理,让他可以接收函数
// 首先需要进行下载

// npm install redux-thunk --save
// 要使用这个中间键我们还得引入redux里面的一个方法

// 想让dispatch接收paromise 要用 redux-promise
// npm install redux-promise --save

// 再学一个中间键redux- 他能让我们知道任务派发之前和派发之后的状态
// npm install redux-loger --save
// 当我们把这个引入了之后,在浏览器的console里面就能自动的给你打印一下任务派发前和派发后的数据状态

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  // 这个里面第二个参数我们把这个applyMiddleware传入,并且往里面传一个thunk中间键
  // 他这个函数可以放多个参数,放入什么参数就相当于引入了什么中间键
  composeEnhancers( applyMiddleware(thunk, promise, logger) ), 
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // 但是我这个redux这一行用不了了,他其实是用applyWiddleware包裹好的一个中间键,所以把它直接放到applyMiddleware里面是不好使的
  // 那么我既想用applyMiddleware里面的中间键,又想用别的中间键怎么办

  // 1.点击redux的那个调试面板
  // 2.点击instructions,看到1.2里面的东西
  // 3.首先你要在外面定义一个变量composeEnhancers,他后面的conpose是一个函数需要在redux库里面引入,compose的功能是让传到compose里面的函数参数依次执行
  // 然后把这个composeEnhancers写在createStore里面的第二个参数上,然后再把applyMiddleware这个当做参数传到composeEnhancers这个里面

  
);

export default store;