// 首先安装redux, npm install redux --save
// 新建一个文件夹里面放我store里面配置的文件
// store里面有个index.js文件,在这个文件里面生成一个store

import React from 'react';
import ReactDOM from 'react-dom';

import ToduList from './components/ToduList'

import Counter from './components/Counter'

import store from './store'

// 我之前那个操作redex,每次都要进行那么多步操作,就很麻烦
// 这里有一个react-redux方法,他是一个用来连接react和redux的库
// 这个库给我们提供了一个组件Provider,用来提供store
// 我们哪个组件需要用到store,就在那个组件外面包一个Provider
// 他还提供了一个方法connect进行连接

// 首先下载react-redux
// npm install react-redux --save

// 引入 react-redux
import { Provider } from 'react-redux'

ReactDOM.render(
	// 首先我给想要使用我这个store里面数据的组件外面给他包一个Provider
	// 这个provider里面还的有一个store属性,这个属性值就是,我写在store文件夹当中的index.js导出的store,所以要现在上面把他引入

	// 这样我的这个Provider组件就部署好了,接下来我们要在组件里面去使用它提供的connet方法
	<Provider store={store}>
		<Counter></Counter>	
		<ToduList></ToduList>
	</Provider>

	, document.getElementById('root'));

