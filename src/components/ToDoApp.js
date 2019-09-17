import React from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

class ToDoApp extends React.Component {
    render() {
        return(
            <div>
                <ToDoForm />
                <ToDoList /> 
            </div>
            
        )
    }
}

export default ToDoApp