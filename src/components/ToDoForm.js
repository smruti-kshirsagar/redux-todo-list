import React from 'react'
import {connect} from "react-redux"
import {addToDo} from '../redux/action/ToDoAction'

class ToDoForm extends React.Component {
    constructor(props) {
        super(props)
        this.text = React.createRef()
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.addToDo(this.text.current.value)
        this.text.current.value = ""
    }
    render() {
        return(
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input type="text" placeholder="Add ToDo" 
                ref={this.text} />
                <button type="submit">Add ToDo</button>
            </form>
        )
    }
}

export default connect (null, {addToDo}) (ToDoForm)