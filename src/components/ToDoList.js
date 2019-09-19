import React from 'react'
import {connect} from 'react-redux'
import ToDoItem from './ToDoItem'

class ToDoList extends React.Component {
    render() {
        return (
            <div>
            {
                this.props.todos && this.props.todos.map((item,i) => (
                    <ToDoItem key={i} {...item} />
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