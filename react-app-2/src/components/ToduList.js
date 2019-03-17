// 在这个里面我们写类组件

import React from 'react'

// 注意组件开头要大写
class ToduList extends React.Component{
    // 这个类组件里面是有生命周期函数的,这些个函数是继承过来的

    // 我要在这个类组件内部一定要写一个render函数
    // 之前函数的组件里面没有写是因为,他看到是函数组件的话,他会在内部添加一个render方法,把函数的返回结果,作为render方法的返回结果
    // 这个render方法必须要有一个返回值,返回的就是需要渲染的代码块'


    // 把组件里面自己需要使用的数据称为状态

    // 我这里需要调用自己的数据,所以要把数据写到constructor里面
    // 如果一个子类继承了父类,那么他的constructor里面必须要有super(),因为他要继承父类的this

    // 用es7的语法,我这个私有熟悉可以定义在外面,我这个constructor就可以不写
    // constructor () {
    //     super();
    //     // this.state = {  // 这个属性值必须要是state,并且的是一个对象
    //     //     list : [1,2,3]
    //     // }
    // }

    // es7的语法,我这个对象内部的熟悉可以写在外面,相当于写在我的constructor里面写this.state
    state = {
        inputVal: '', // 这个值用来存我input里面的值
        list : [], // 这个值用来渲染
        count: 0
    };

    // handleChange = this.handleChange.bind(this);
    render() {
        return (
            <>
                <div>
                    {/*我给这个input框的值绑定上我状态里面定义的inputVal值: value = {this.state.inpVal}, 但是我这个不具备双向数据绑定的功能,所以我需要监听一下我这个input的change事件,注意这里C要大写,等号后面是我这个类里面自己定义的函数*/}
                    {/*由于我这个handleChange函数在执行的时候,里面的this不指向我这个类,所以这里需要做this的绑定*/}
                    {/*我这里每次点击他都要绑定一个函数,这样就不太好,我在上面定义一个绑定好的,然后在这里直接调用就好了*/}
                    {/*但是在上面写的话,容易出现一开始上面就出现一堆绑定函数,就很蠢,所以解决办法就是下面的函数用箭头函数来写*/}
                    <input type="text" value = {this.state.inputVal} onChange={this.handleChange}/>
                    {/*注意事件名要大写*/}
                    <button onClick = {this.handleClick}>添加</button>
                </div>
                <ul>
                    {
                        // 我通过状态里面的值来进行渲染
                        this.state.list.map((item,index) => (<li key={index}>
                            {item}
                            {/*在每一个li后面加一个button来进行删除操作,因为需要知道每一个li的索引,所以需要传一个参数index*/}
                            {/*如果用箭头函数来处理,如何传值*/}
                            {/*用一个匿名函数,在匿名函数里面去执行我下面定义的函数,并且传参,如果直接传他就直接执行了,不行*/}
                            <button onClick={() => {this.handleDelete(index)}}>X</button>
                        </li>))
                    }
                </ul>
                <div>
                    <span>{ this.state.count }</span>
                    <button onClick={this.handleAdd}>添加</button>
                </div>
            </>
        )
    }

    // 这里定义监听函数
    // 为了不在上面用bind去绑定this,这里用箭头函数来写
    // 也就是说如果想在react内部写函数要用箭头函数的方式来写
    handleChange = e => {
        // this.state.inpVal = e.target.value;
        // 但是我这么改是不允许的,要修改我这个state里面的值必须要通过setState这个函数来修改
        this.setState({
            // 他这个key是我将要修改的值,value是我需要修改为什么
            inputVal: e.target.value
        })
    };
    handleClick = () => {
        this.setState({
            // 让这个list里面的值等于,之前的值接上这一次input框里面的值
            list: [...this.state.list, this.state.inputVal],
            inputVal: ''
        })
    };
    handleDelete = index => {
        // 我需要知道我点击得是哪一个li,然后把它删了
        const list = this.state.list;
        // 直接把index这一位剪切了
        list.splice(index, 1)
        // 然后重新赋值
        this.setState({
            list
        })
    };
    handleAdd = () => {
        this.setState({count: this.state.count + 1});
        this.setState({count: this.state.count + 2});
        this.setState({count: this.state.count + 3});
        // 如果我一下写三个setState,他会把你这个合并成一个处理
        // 也就是说
        this.setState({ name: 'shanshan'});
        this.setState({ age: '18'});
        // 他就相当于执行的是这个
        this.setState({
            name: 'shanshan',
            age: '18'
        })

        // 也就是说如果你写的是重复的东西,他就会被覆盖

        // 但是如果我就想实现先加一再加二再加三的功能
        // setState除了可以接收一个对象,还可以接收一个函数,这个函数有一个prevState参数
        this.setState((prevState) => {
            // 在函数里面去return一个对象,这个对象了里面就是我需要更改的状态
            return {
                count: prevState.count + 1
            }
        })
        // 然后让我这个函数执行三次,就加成6了
        // 因为我这个prevState拿到的是它pendingState里面的值,最后渲染是通过pending里面的值去渲染,所以这样是可以成功修改的
        // 如果需要多次次修改某一个值的状态用函数的方式来修改
        this.setState((prevState) => {
            // 在函数里面去return一个对象,这个对象了里面就是我需要更改的状态
            return {
                count: prevState.count + 2
            }
        })
        this.setState((prevState) => {
            // 在函数里面去return一个对象,这个对象了里面就是我需要更改的状态
            return {
                count: prevState.count + 3
            }
        })
    }

}

export default ToduList;
