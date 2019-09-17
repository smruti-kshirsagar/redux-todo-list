import React from 'react'
import {connect} from 'react-redux'

class ToDoList extends React.Component {
    render() {
        return (
            <div>
            {
                this.props.todos.map((item,i) => (
                    <li key ={i}>{item.text}</li>
                ))
            }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps) (ToDoList)