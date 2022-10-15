export const ADD_TODO = (item)=>{
    return {
        type:"ADD_TODO",
        payload:item
    }
}
export const CHANGE_STATE = (value)=>{
    return {
        type:"CHANGE_STATE",
        payload:value
    }
}

export const DELETE_TODO = (todos)=>{
    return {
        type:"DELETE_TODO",
        payload:todos
    }
}
export const FILTER_TODO = (value)=>{
    return {
        type:"FILTER_TODO",
        payload:value
    }
}