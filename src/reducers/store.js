import {configureStore} from "@reduxjs/toolkit";
import toDoReducer from "./toDo";


const store = configureStore({
    reducer:{
        toDo_item:toDoReducer
    }
    
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;