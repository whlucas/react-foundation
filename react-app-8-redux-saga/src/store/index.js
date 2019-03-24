import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

// 引入redux-saga
// npm install redux-saga --save
// 他引入的是一个函数,这个函数是用来创建redux-saga的
import createSagaMiddleware from 'redux-saga';

// 引入我往run方法里面传的生成器函数
import mySaga from './sagas'

// 把这个中间键创建出来
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  // 在这个里面引入redux-saga
  reducer,
  applyMiddleware(sagaMiddleware)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// redux-saga还需要去调用一下它里面的run函数
// 这个run方法传入的是一个生成器函数参数
// 我们需要把saga处理的逻辑都放到另外一个文件夹里面去,我放到store文件夹下面的sagas.js文件里面去,在这个文件里面去集中处理异步的请求

// 但是react-thunk就不是这样,他是把异步的请求放到了actions里面去
sagaMiddleware.run(mySaga)

export default store;