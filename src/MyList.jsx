import React, {useState} from "react";
import MyListAssignments from "./MyListAssignments";

const TodolistItem = React.memo(() => {

  const [inputValue, setInputValue] = useState('')
  const [listItem, setlistItem] = useState([{id: 1, name:'Assignment'}, {id: 2, name: 'Assignment 2'}])

  const onChange = (event) => {
    const value = event.target.value
    setInputValue(value)
  }

  const addAssignment = (event) => {
    event.preventDefault()

    const assignment = {
      id: listItem.length + 1,
      name: inputValue
    }

    setlistItem ([...listItem, assignment])
    setInputValue('')
  }

  const removeListItem = (id) => {
    const listId = listItem.filter((assignment) => assignment.id !== id)
    setlistItem(listId)
  }

    return (
      <div>
            <form onSubmit={addAssignment}>
              <label>
                New Assignment:
                <input type="text" onChange={onChange} value={inputValue}/>
              </label>
                <button type="submit">Add assignment</button>
            </form>

            {listItem.map((assignment) => (
              <MyListAssignments 
              key={assignment.id} 
              name={assignment.name} 
              action={removeListItem}
              />
            ))}
      </div>
    )
  })

export default TodolistItem