import React, { Component } from 'react';

class EnterBar extends Component {
    constructor(props) {
        super(props);

        this.state = { todoItems: '' };
        this.setTodo = this.setTodo.bind(this);
    }

    setTodo = () => {
        this.setState({
            todoItems: 'test'
        })
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                    value={ this.state.term }
                    onChange={ event => this.onInputChange(event.target.value) }
                />
            </div>
        );
    }

    onInputChange(term) {
        //this.setState({ term });

        console.log(term);
       // this.props.onTodoChange(term);
    }
}

export default EnterBar;