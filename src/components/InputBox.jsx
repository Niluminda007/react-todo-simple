import React, {Component} from "react";
import {connect} from "react-redux";
import { ADD_TODO } from "../actions";

class InputBox extends Component{
    constructor(props){
        super(props)
        this.state={
            toDoValue:"",
            placeholder:"add to do",
        }
    }
    handleChange = (e)=>{
        const {value} = e.target;
        this.setState(()=>{
            return {
                toDoValue:value,
                placeholder:""
            }
        })

    }

    handleClick =()=>{
        const {add_todo} = this.props;
        const {toDoValue} = this.state;
        if(toDoValue !== ""){
            add_todo({checked:false,value:toDoValue})
        this.setState((state)=>{
            return {
                ...state,
                toDoValue:"",
                placeholder:"add to do"
                
            }

        })

        }
        
    }
    render(){
        return(<>
            <input type="text" className="todo-input" placeholder={this.state.placeholder} onChange={this.handleChange} value={this.state.toDoValue} />
            <button className="todo-add" onClick={this.handleClick}>+</button>
        </>
            
        )
    }
}
const mapDispatchToProps = ()=>{
    return{
        add_todo:ADD_TODO
    }
}



export default connect(null,mapDispatchToProps())(InputBox);