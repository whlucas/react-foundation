// 这个是react给我们提供的跨组件传值的一种方式
// react 16.3版本以后才有
import React from 'react';

let {Provider, Consumer} = React.createContext()  // 他这个最后会得到一个对象,这个对象里面 有一个Provider和Consumer 提供者和消费者 ,他是大写字母开头,说明他俩是个组件

export {
	Provider,
	Consumer
}
