import { useState } from "react"
import "./ToDoList.css"

const ToDoList = () => {

  const [assignments, setAssignment] = useState(["Homework", "Lesson"])
  const colors = ['#811333', '#144666', '#444111']
  const randomColors = colors[Math.floor(Math.random() * colors.length)]

  const style = {
    color: `${randomColors}`,
    border: `2px solid ${randomColors}`
  }

  const handleAddAssignment = () => {
    const newAssignment = document.getElementById("assignmentInput").value
    document.getElementById("assignmentInput").value = ""

    if(newAssignment)setAssignment(a => [...a, newAssignment])
  }

  const handleRemoveAssignment = (index) => {
    setAssignment(assignments.filter((_, i) => i !== index))
  }

  return(
    <>
    <div id="container" style={style}>
      <div id="assignments">
        <h2>Assignments in progress</h2>
        <ul>
          {assignments.map((assignment, index) => 
            <li key={index} onClick={() => handleRemoveAssignment(index)}>
              {assignment}
            </li>)}
        </ul>
        <input type="text" id="assignmentInput" placeholder="Enter Assignment"/>
        <button onClick={handleAddAssignment}>
          Add Assignment
        </button>
      </div>

      <div id="finished">
        <h2 style={style}>Finished Assignments</h2>
        <ul>
            <li>
              Download Android APP
            </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default ToDoList