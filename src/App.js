import React, { Component } from 'react';

import List from './List'
import withNames from './hocs/withNames'
import withTodo from './hocs/withTodo'

const NameList = withNames(List)
const TodoList = withTodo(List)

class App extends Component {
    render() {
        return (
            <div>
                <NameList/>
                <TodoList/>
            </div>
        );
    }
}

export default App;