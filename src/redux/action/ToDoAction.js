import {ADD_TODO} from './constants'

let counter = 0

function addToDo(_text) {
    let todo = {id: counter, text: _text}
    counter++
    return{
        type: ADD_TODO,
        payload: todo
    }
}

export default addToDo