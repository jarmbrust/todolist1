import React, { Component } from 'react';
import { connect } from 'react-redux';


class DisplayList extends Component {
    // constructor(props) {
    //     super(props);

    // }
    renderList(todo) {

        console.log('todo', todo);

       // const test = todo.test.map(weather => weather.main.temp);
        const test = todo
        return (
            <li key={'test'}>{test}</li>
        );
    }

    render() {
        console.log('todoItems', this.props);
        return (
            <ul>
                {this.props.todoItems.map(this.renderList)}
            </ul>
        );
    }


}

function mapStateToProps( { todoItems }) { 
    return { todoItems }; 
}

export default connect(mapStateToProps) (DisplayList); 
