// 首先安装redux, npm install redux --save
// 新建一个文件夹里面放我store里面配置的文件
// store里面有个index.js文件,在这个文件里面生成一个store

import React from 'react';
import ReactDOM from 'react-dom';

import ToduList from './components/ToduList'

import Counter from './components/Counter'

ReactDOM.render(
	<>
		<Counter></Counter>	
		<ToduList></ToduList>
	</>

	, document.getElementById('root'));

