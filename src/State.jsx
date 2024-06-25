import React, { Component } from "react";

class State extends Component {

  state = {
    inputValue: '',
    toDo: [{name: 'Assignment'},{name: 'Homework'}],
    done: [{name: 'Homework'},]
  }

  onChange = (event) => {
    const value = event.target.value
    this.setState({
      inputValue: value
    })
  }

  addAssigment = (event) => {
    event.preventDefault()

    const newAssignment = {
      name: this.state.inputValue
    }

    this.setState({
      toDo: [... this.state.toDo, newAssignment],
      inputValue: ''
    })
  }

  deleteAssignment = (name) => {
    const toDo = this.state.filter((assignment) => assignment.name !== name)
    this.setState(
      toDo
    )
  }

  render() {
    return (
      <div>
          {this.state.toDo.map((Assignment) => (
            <div>
              <p>
                Assignment name: {Assignment.name} 
                <button >
                  Complete Assignment
                </button>
              </p>
            </div>
          ))}
          <div>
            <form onSubmit={this.addAssigment}>
              <input type="text" onChange={this.onChange}/>
              <button type="submit">Add Assignment</button>
            </form>
          </div>
          <div>
            {this.state.done.map((doneAssignments) => (
              <div>
                <p>
                  Completed Assignment: {doneAssignments.name} 
                  <button onClick={deleteAssignment}>
                    Delete Assignment
                  </button>
                </p> 
              </div>
            ))}
          </div>
      </div>
    )
  }
}

export default State