import React, { Component } from 'react';

class EnterBar extends Component {
    constructor(props) {
        super(props);
        this.state = { newItem: '', todoItems: [] };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ newItem: event.target.value })
    }

    onFormSubmit(event) {
        event.preventDefault();
        if (this.state.todoItems && this.state.newItem.length > 0) {

            this.setState({
                todoItems: this.state.todoItems.concat([this.state.newItem])
            });
            this.setState({ newItem: '' });  // clears the search bar
            console.log('this.state.todoItems', this.state.todoItems);
        }
    }

    render() {
        return (
            <form onSubmit={ this.onFormSubmit } className="input-group.search-bar">
                <input 
                    placeholder="enter a new todo item"
                    className="form-control"
                    value={ this.state.newItem }
                    onChange={ this.onInputChange }
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

export default EnterBar;