import React, { useState } from 'react'

const NewItems = (props) => {
 const[workType,setWorkType]=useState("");
 function worktypechangehandler(e){
    setWorkType(e.target.value);
    // console.log(e.target.value);
 }
 const [date,setDate]=useState("")
 function datechangehandler(e){
    setDate(e.target.value);
 }
 const[work,setWork]=useState("")
 function workchangehandler(e){
    setWork(e.target.value);
 }
 const submithandler= (e) =>{
    e.preventDefault();
   const itemData={
    workType:workType,
    work:work,
    date:new Date(date)
   };
   props.onSaveNewItems(itemData);
   setDate("");
   setWork("");
   setWorkType("");
 }



  return (
    <div>
        <form onSubmit={submithandler}>
            <div>
                <label>work-type---</label>
                <input type='text'
                value={workType}
                onChange={worktypechangehandler}></input>
            </div>
            <div>
                <label>date  ----------</label>
                <input onChange={datechangehandler}
                value={date}
                type='date' min="2020-01-01" max="2022-02-02"></input>
            </div>
            <div>
                <label>what to do---</label>
                <input onChange={workchangehandler}
                value={work}
                type='text'></input>
            </div>
            <button type='submit' className='btn'>add</button>
        </form>
    </div>
  )
}

export default NewItems