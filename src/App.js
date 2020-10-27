import React, { useState } from 'react';
import TodoList from './TodoList.jsx'

const App = () => {

  const [inputList, setInputList]= useState("") 
  const [Items, setItems]= useState([]) //creating an empty array 

  const itemEvent = (event) => {
    setInputList(event.target.value) //function that takes the value
  }

  const listOfItems = () => {
    setItems ((oldItems) => {   
      return [...oldItems,inputList];
    })
    setInputList("") // this is to make array empty as soon as add buuton is pressed 

  }

  const deleteItems = (id) =>{      //passing id value
   console.log('deleted') 

   setItems((oldItems) => {
     return oldItems.filter((arrayelem,index )=>{    //filter is function which is used to filter 
       return index !== id                          //will delete if it matches the id
       
     })
   })
  }

  return (
    <div className="main_div">
     <div className="center_div">
      <br/>
      <h1>ToDo List</h1>
      <br/>
      <input type="text" value={inputList} placeholder="Add an item" onChange={itemEvent}/> 
      <button onClick={listOfItems}>+</button>

      <ol>

        { Items.map((itemval,index) => {
          return <TodoList 
          key={index} 
          text={itemval} 
            id={index}           //used for matching
            onSelect={deleteItems}
          />
        })}

      </ol>

     </div>
      
  
    </div>
  );
}

export default App;
