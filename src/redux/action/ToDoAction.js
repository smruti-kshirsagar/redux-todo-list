import {ADD_TODO, TOGGLE_TODO, DELETE_TODO} from './constants'

let counter = 0

function addToDo(_text) {
    let todo = {id: counter, text: _text, completed: false}
    counter++
    return{
        type: ADD_TODO,
        payload: todo
    }
}

function toggleToDo(_id) {
    return{
        type: TOGGLE_TODO,
        payload: _id
    }
}

function deleteToDO(_id) {
    return{
        type: DELETE_TODO,
        payload: _id
    }
}
export  {addToDo, toggleToDo, deleteToDO}