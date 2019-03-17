// 这里来写的是一个受控组件
// 受控组件就是组件的显示内容是受我状态里面的数据控制的,例如input框

// 受控组件,我这么写有一个缺点,我没打一个字他就会出发onChange进行setState,就不太好
// 我们可以用非受控组件来写这个功能

import React from 'react';

class Control extends React.Component {
    state = {
        taskA : '',
        taskB : '',
        list: []
    }
    render() {
        return (
            <>
                <div>
                    taskA:
                    <input name = "taskA" onChange={this.handleChange} value={this.state.taskA} type="text"/>
                    <button name = 'taskA' onClick={this.handleClick}>添加A任务</button>
                </div>

                {/*我现在这个任务B实现的是和任务A一样的功能,希望使用任务A的函数来处理*/}
                {/*我给我这两个输入框都加上一个name,让这个name值等于我这个state里面对应的value值*/}
                {/*两套标签共用一个函数,在函数里面拿到我相应输入框的名字*/}

                {/*同理也给button起一个name*/}
                <div>
                    taskB:
                    <input name = "taskB" type="text" onChange={this.handleChange} value={this.state.taskB}/>
                    <button name = "taskB" onClick={this.handleClick}>添加B任务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                <li key={item + index}>{item}</li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
    handleChange = (e) => {
        this.setState({
            // 我这里通过拿到对应标签的name值来修改标签里面的值,因为我的name值和标签里面的值是相同的
            [e.target.name] : e.target.value
        })
    };
    handleClick = (e) => {
        // 判断一下任务是谁加的,加一个标识
        const type = e.target.name;
        let task = this.state[type];

        if(type === 'taskA'){
            task = `任务A ${task}`
        }else if (type === 'taskB'){
            task = `任务B ${task}`
        }

        this.setState({
            list: [...this.state.list, task],
            [type]: ''
        })
    }
}

export default Control