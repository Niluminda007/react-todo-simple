import React,{Component} from "react";
import "./styles/todoitem.css";
import { CHANGE_STATE,DELETE_TODO } from "../actions";
import {connect} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faCheck} from '@fortawesome/free-solid-svg-icons'

class ToDoItem extends Component{
    constructor(props){
        super(props);
        this.state={
            checked:this.props.todo.checked,
            value:""
        }
    }

    clicked = false;

    changeCategory = (e)=>{
        var {value} = this.props.todo;
        this.clicked = true
        console.log(e)
        this.setState((state)=>{
            return {
                checked:!state.checked,
                value:value
            }
        })
    }
    componentDidUpdate(){
        var {change_todo_category,toDo_items} = this.props;
        const {checked, value} = this.state
        
        if(this.clicked){
            const obj = {checked:checked,value:value}
            
            toDo_items.splice(toDo_items.findIndex((x)=>{return x.value === this.props.todo.value }),1,obj)
            change_todo_category(toDo_items);
            this.clicked = false
        }
        
    }
    handleDelete = (e)=>{
        var {value} = this.props.todo;
        const {toDo_items,delete_todo} = this.props
        const modifiedTodos = toDo_items.filter( item=>{return item.value !== value})
        delete_todo(modifiedTodos)
    }



    render(){
        return(
            <div className="todo-item">
            <div className={`${(this.props.todo.checked)&& "todo-text-checked"} todo-text`}>
                {this.props.todo.value}
            </div>
            <button className={`checkbtn btn`}  onClick={this.changeCategory}><FontAwesomeIcon icon={faCheck} size="2x" color="#051e3e" className="todo-icon check"   /></button>
            <button className="delete btn" onClick={this.handleDelete}> <FontAwesomeIcon icon={faTrash}  size="2x" color="#051e3e" className="todo-icon trash"  /></button>
           

            </div>
        )
    }
}

const mapDispatchToProps = ()=>{
    return {
        change_todo_category:CHANGE_STATE,
        delete_todo:DELETE_TODO
    }
}
const mapStateToProps = (state)=>{
    return {
        toDo_items:[...state.toDo_item.todos]
    }
}

export default connect(mapStateToProps,mapDispatchToProps())(ToDoItem);