import React, {useState} from "react"
import css from "./DarkMode.css"
import useLocalStorage from "./useLocalStorage"

const DarkMode = () => {

  const [style, setStyle] = useState('light')

  const [name, setName] = useLocalStorage('') 

  useLocalStorage('style')

  const changeStyle = () => {
    if(style !== 'light') setStyle('light')
    else setStyle('dark')
  }

  return (
      <div className={style}>
        <button onClick={changeStyle}>Toggle Theme</button>
      </div>
  )
}

export default DarkMode