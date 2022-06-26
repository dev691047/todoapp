import React from 'react'
// import TodoItem from './components/TodoItem';
import "./App.css";
import Items from './components/Items';
import NewItems from './components/NewItems';
const App = () => {

  const data=[
    {
      workType:'school',work:'homework',date:new Date(2022,2,12),button:"pending"
    },
     {
      workType:'school',work:'ssssssssssshomework',date:new Date(2022,2,12),button:"pending"
    },
     {
      workType:'school',work:'homework',date:new Date(2022,2,12),button:"pending"
    },
     {
      workType:'school',work:'homework',date:new Date(2022,2,12),button:"pending"
    }
  ]
const SaveNewItems=(enteredNewItems)=>{
     const todoData={
      ...enteredNewItems,
      id:Math.random().toString()
     };
     console.log(todoData);
}

  return (
    <div className='app'>
      <div className='new-item'>
      <NewItems onSaveNewItems={SaveNewItems}/>
      </div>
      <Items items={data}/>
    </div>
  )
}

export default App