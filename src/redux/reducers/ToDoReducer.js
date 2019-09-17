
let initialState = {
    todos: [{ id: 1, text: "To Do 1"}]
}

function ToDoReducer(state = initialState, action) {
    switch(action.type) {
        case "ADD-TODO":
            state = {
                ...state,
                todos : [...state.todos, action.payload]
            }
            state = state
            break;
        default:
    }
    return state

}

export default ToDoReducer