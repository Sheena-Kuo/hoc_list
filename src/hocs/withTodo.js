import React, { Component } from 'react'

export default WrappedComponent => class extends Component {
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
    
    render(){
        const {items, text} = this.state
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