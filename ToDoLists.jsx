import React from "react";

const ToDoLists =(props) =>{

  // const deleteItem =() =>{
  //     console.log("deleted");
  // }
  
       return (
        <>
         <div className="todo_style">
         <i class="fa fa-trash" aria-hidden="true"
         onClick={() =>{
          props.onSelect(props.id);

         }}></i>
       <li> {props.text} </li>
       </div>
       </>
     );
};

export default ToDoLists;