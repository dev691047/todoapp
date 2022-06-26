import React from 'react'
import TodoItem from './TodoItem'
const Items = (props) => {
  return (
    <div>
        <TodoItem
      workType={props.items[0].workType}
      work={props.items[0].work}
      date={props.items[0].date}
      button={props.items[0].button}
      />
        <TodoItem
      workType={props.items[1].workType}
      work={props.items[1].work}
      date={props.items[1].date}
      button={props.items[1].button}
      />
        <TodoItem
      workType={props.items[2].workType}
      work={props.items[2].work}
      date={props.items[2].date}
      button={props.items[2].button}
      />
        <TodoItem
      workType={props.items[3].workType}
      work={props.items[3].work}
      date={props.items[3].date}
      button={props.items[3].button}
      />
    </div>
  )
}

export default Items