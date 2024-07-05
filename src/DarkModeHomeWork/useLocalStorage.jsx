import { useEffect, useState } from "react"

// const useLocalStorage = (key, fallback) => {

//   const [value, setValue] = useState(localStorage.getItem(key) || fallback)

//   useEffect(() => {
//     localStorage.setItem(key, value)
//   }, [value, key])

//   return [value, setValue]
// }

const getSavedValue = (key, initialValue) => {
  const savedValue = JSON.parse(localStorage.getItem(key))
  if(savedValue) return savedValue

  if(initialValue instanceof Function) return initialValue()

  return initialValue
}

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue)
  })

  return [value, setValue]
}

export default useLocalStorage