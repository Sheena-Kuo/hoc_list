import React, { Component } from 'react';

class List extends Component {
    render() {
        const {text, items, onChangeText, onSubmit} = this.props
        return (
            <ul>
                <form onSubmit={onSubmit}>
                    <input value={text} onChange={onChangeText}/>
                    <button type="submit">Submit</button>
                </form>
                {items.map(item=>(
                    <li key={item}>{item}</li>
                ))}
            </ul>
        );
    }
}

export default List;