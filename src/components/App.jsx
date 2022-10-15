import React, {Component} from "react";
import "./styles/App.css";
import InputBox from "./InputBox";
import ToDoItem from "./ToDoItem";
import {connect} from "react-redux";
import { CHANGE_STATE } from "../actions";
import CategoryDropDown from "./CategoryDropDown";

class App extends Component{

    displayTodos(){
        const {toDo_items,toDo_Cateogry} = this.props;
        if(toDo_items){
            return(
                toDo_items.map((item,index)=>{
                    if(toDo_Cateogry === "Completed"){
                        if( item.checked){
                            return <ToDoItem key={index} id={index} todo={item} />
                        } 
                    }
                    else if (toDo_Cateogry === "Uncompleted"){
                        if(!item.checked){
                            return <ToDoItem key={index} id={index} todo={item} />
                        }
                    }
                    else{
                        return <ToDoItem key={index} id={index} todo={item} />
                    }
                    
                    
                } )

            )
        }
        return
        

    }


    render(){
        
        return(
            <>
            <div className="header"></div>
            <div className="container">
                <h1 className="app-title">Ushan's Todo</h1>
                <div className="todo-container">
                    <InputBox />
                    <CategoryDropDown />

                </div>
                
                {this.displayTodos()}
                
                

            </div>
            <div className="footer-background"></div>
            </>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        toDo_items:[...state.toDo_item.todos],
        toDo_Cateogry:state.toDo_item.category,
        active_category:state.toDo_item.activeCategory
    }
}
const mapDispatchToProps = ()=>{
    return {
        change_todo_category:CHANGE_STATE
    }
}
export default connect(mapStateToProps,mapDispatchToProps())(App);