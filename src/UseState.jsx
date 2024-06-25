import React, {useState} from 'react'

function UseState() {

  const [count, setCount] = useState(4) // State Default Values
  const [theme, setTheme] = useState('blue') // State Default Values

  function decrementCount() {
      setCount(previousState => previousState - 1)
  }

  function incrementCount() {
      setCount(previousState => previousState + 1)
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default UseState