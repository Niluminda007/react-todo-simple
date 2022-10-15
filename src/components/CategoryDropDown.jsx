import React,{Component} from "react";
import "./styles/dropdown.css";
import {connect} from "react-redux";
import { FILTER_TODO } from "../actions";

class CategoryDropDown extends Component{

    handleCategory = (e)=>{
        const {value} = e.target
        const {filter_todo} = this.props
        filter_todo(value)
       
    }


    render(){
        return(
            <div className="dropdown-container">
                <select name="dropdown" id="dropdown" onChange={this.handleCategory}>
                    <option className="dropdown-item" value={"all"} >All</option>
                    <option className="dropdown-item" value={"Completed"} >Completed</option>
                    <option className="dropdown-item" value={"Uncompleted"} >Uncompleted</option>

                </select>

            </div>
        )
    }
}

const mapDispatchToProps = ()=>{
    return {
        filter_todo:FILTER_TODO
    }

}
export default connect(null,mapDispatchToProps())(CategoryDropDown);