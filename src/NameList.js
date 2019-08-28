import React, { Component } from 'react';
import names from './name.json'

class NameList extends Component {
    state = {
        items: names,
        text: '',
    };

    onChangeText = e => {
        this.setState({
            text: e.target.value,
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.setState( ({text}) =>({
            items: !text ? names : names.filter(name => name.includes(text))
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

export default NameList;