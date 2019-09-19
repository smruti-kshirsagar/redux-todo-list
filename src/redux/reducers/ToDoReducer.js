
let initialState = {
    todos: []
}

function ToDoReducer(state = initialState, action) {
    switch(action.type) {
        case "ADD-TODO":
            state = {
                ...state,
                todos : [...state.todos, action.payload]
            }
            return state
        case "TOGGLE-TODO":
            let _todos = state.todos.map((item)=> {
                if(item.id === action.payload) {
                    item.completed = !item.completed
                }
                return item;
            })
            state = {
                ...state,
                todos : _todos
            }
        case "DELETE-TODO":
            state = {
                ...state,
                todos : [...state.todos]
            }
            state.todos.splice(action.payload, 1)
            break;
    }
    return state
}

export default ToDoReducer