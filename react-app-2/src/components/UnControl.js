// 这个是非受控组件
// 我这个input框里面value不受我状态里面的值控制

import React from 'react';

class UnControl extends React.Component {
    taskA = React.createRef();
    taskB = React.createRef();
    state = {
        list: []
    };
    render() {
        return (
            <>
                <div>
                    taskA:

                    {/*写一个ref,这个里面写一个箭头函数,这个箭头函数有一个参数dom这个dom就是我这个input框,我在这个函数里面定义一个taskA,让这个taskA等于我这个dom*/}
                    {/*我想要拿value的时候直接this.taskA.value就可以拿到*/}

                    {/*还有一种写法,我这个ref里面不想写这一串函数ref={(dom) => {this.taskA = dom}}*/}
                    {/*那就这么写ref={this.taskA}*/}
                    {/*然后在最上面加一行taskA = React.createRef();*/}
                    <input type="text" ref={this.taskA}/>
                    <button name = 'taskA' onClick={this.handleClick}>添加A任务</button>
                </div>

                <div>
                    taskB:
                    <input type="text" ref={this.taskB} />
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

    handleClick = (e) => {
        // 我button还是要加name
        // 通过name拿到是哪一个input,然后找到input下面的value值

        // 如果我用了taskA = React.createRef()这种方式定义taskA,name我想要拿到这个taskA就必须要中间再来一个current即 this.taskA.current.value
        // 并且这种方式是React16.3以后才有的

        const type = e.target.name;
        let task = this[type].current.value;

        if(type === 'taskA'){
            task = `任务A ${task}`;
        }else if (type === 'taskB'){
            task = `任务B ${task}`;
        }

        // 把input清空就不能写在状态的改变里面了
        this[type].current.value = '';


        this.setState({
            list: [...this.state.list, task]
            // 没有状态了,所以清空就不用在这个里面清空
        })
    }
}

export default UnControl