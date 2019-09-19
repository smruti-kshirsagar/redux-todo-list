import React from 'react'
import {connect} from 'react-redux'
import {toggleToDo, deleteToDO} from "../redux/action/ToDoAction"
import "../css/custom.css"

class ToDoItem extends React.Component {
    handleToogleToDo() {
        this.props.toggleToDo(this.props.id)
    }
    handleRemoveTodo() {
        this.props.deleteToDO(this.props.id)
    }
    render() {
        const text = this.props.text
        const completed = this.props.completed
        return (
            <>
                <li className={completed? 'todo selected': 'todo'}>
                    <span onClick={()=>this.handleToogleToDo()}>{completed ? "👌" : "👋"} {text}</span>
                    <span className="removeToDo" 
                        onClick={() => this.handleRemoveTodo()}>X</span>
                </li>
            </>
        )
    }
}

export default connect(null, {toggleToDo, deleteToDO}) (ToDoItem)