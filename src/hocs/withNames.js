import React, { Component } from 'react'
import names from '../name.json'

export default WrappedComponent => class extends Component {
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
        const {text, items} = this.state;
        return (
            <WrappedComponent
                {...this.props}
                text={text}
                items={items}
                onChangeText={this.onChangeText}
                onSubmit={this.onSubmit}
            />
        )
    }
}
