import React from "react"

const MyListAssignments = ({id, name, action}) => {
  return (
    <div>
      <p>Assignemnt Name: {name}</p>
      {/* <button onClick={() => action(id)}>Remove</button> */}
    </div>
  )
}

export default MyListAssignments
