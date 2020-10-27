import React from 'react';

const TodoList =(props) => {


    return(
        <>
        <div className="todo_style"> 
        <p className="dot" 
        onClick={ () =>{
            props.onSelect(props.id)    //this will tell which items we are clicking by passing the id
        } }> 

        ❎ </p>
         <li> {props.text}</li>
         </div>
        </>
    )

}

export default TodoList