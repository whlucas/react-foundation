// 首先要引入一个方法来创建出来一个商店
import {createStore} from 'redux';

// 这个是把数据都合在一起的reducer
// import reducer from './reducer';

// 这个是把数据分开处理的reducer
import reducer from './reducers/index';


// 我需要拿到这个商店里面的reducer,给他传进去
const store = createStore(
		reducer,
		// 这里加上下面一行就可以使用我浏览器里面redux的开发工具
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);


export default store;