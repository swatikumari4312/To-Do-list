import React , {useState} from 'react' ;
import ToDoLists from './ToDoLists';

const App = () =>{

  const [inputList , setInputList] = useState("");

  const [Items , setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItem = () =>{
    setItems((oldItems) =>{
      return [...oldItems,inputList];
    });
    setInputList("");
  };



  const deleteItem =(id) =>{
    console.log("deleted");

    setItems((oldItems) => {
        return oldItems.filter((aeeElem , index)=>{
            return index !== id;
            
        })
    })
    
} 




  return (
       <>
        <div className='main_div'>
          <div className='center_div'>
          <br />
            <h1>To-Do List</h1>
            <br />
            <input type='text' placeholder=' Add a item' 
            value = {inputList}
            onChange={itemEvent} />
            <button onClick={listOfItem}> + Add </button>

            <ol>

             {Items.map( (itemval,index) =>{
             return  <ToDoLists 
             key={index}
             id={index}
             text = {itemval} 
              onSelect={deleteItem}
             />;
                 
             })}


            </ol>
          </div>
        </div>
       </>
  );
};

export default App;
