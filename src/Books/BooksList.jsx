import React from 'react'
import Books from "./Books";
import Fellowship from "./fellowship.webp"
import './Books.css'

const BooksList = () => {
  function action(nameList) {
    console.log(`${nameList}`)
  }

  return (
    <div>
      <Books title="Lord of the Rings" img={Fellowship} description= "The Lord of the Rings fellowship" nameList= {["Aragorn", "Frodo", "Sauron"]} action={action} />
    </div>
  )
}

export default BooksList