import React, { Component } from 'react';

class TodoList extends Component {
    state = {
        items: [],
        text: '',
    };

    onChangeText = e => {
        this.setState({
            text: e.target.value,
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.setState( ({text, items}) =>({
            text: '',
            items: [...items, text]
        })) 
    }

    render() {
        const {text, items} = this.state
        return (
            <ul>
                <form onSubmit={this.onSubmit}>
                    <input value={text} onChange={this.onChangeText}/>
                    <button type="submit">Submit</button>
                </form>
                {items.map(item=>(
                    <li>{item}</li>
                ))}
            </ul>
        );
    }
}

export default TodoList;