import React, { useState } from 'react'

const TodoItem = (props) => {
    const[pending,setPending]=useState(props.button);
    function clickHandler(){
      console.log("clicked");
      setPending("completed");
    }
  return (
    <div className='item'>
        <div>
            <div>{props.date.toLocaleString('en-US',{month:"long"})}</div>
            <div>{props.date.toLocaleString('en-US',{day:'2-digit'})}</div>
            <div>{props.date.getFullYear()}</div>
        </div>
        <div>{props.workType}</div>
        <div>{props.work}</div>
        <button onClick={clickHandler}>{pending}</button>
    </div>
  )
}

export default TodoItem