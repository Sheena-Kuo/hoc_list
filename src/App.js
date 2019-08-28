import React, { Component } from 'react';
import NameList from './NameList'
import TodoList from './TodoList'

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