const items={
    todos:[],
    category:"all",
    activeCategory:[]
}

// const filterToDo = (todos,category)=>{
//     switch(category){
//         case "all":
//             return todos
//         case "Completed":
//             return todos.filter(item=>{return item.checked } )
//         case "Uncompleted":
//             return todos.filter(item=>{ return !item.checked} )

//         default:
//             return todos
//     }

// }



const toDoReducer = (state=items,action)=>{
    switch(action.type){
        case "ADD_TODO":
            return{
                ...state,
                todos:[...state.todos,action.payload]
            }
        case "CHANGE_STATE":
            if(action.payload === "")return state
            return{
                ...state,
                todos:[...action.payload]
            }
        case "DELETE_TODO":
            return {
                ...state,
                todos:[...action.payload]
            }
        case "FILTER_TODO":
            if(action.payload === "")return state
            return {
                ...state,
                category:action.payload,
                // activeCategory:[...filterToDo(state.todos, action.payload)],
                // todos:[...filterToDo(state.todos, action.payload)]
            }
        default:
            return state

    }
}

export default toDoReducer;