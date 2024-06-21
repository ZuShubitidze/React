
const Books = (props) => {
  return (
    <div className="books-container">
      <img src={props.img} alt="fellowship" className="bookImg" />
      <h2 className="bookHeader">{props.title}</h2>
      <p className="bookP">{props.description}</p>
      {props.nameList.map((list) => <div> {list} </div>)}
      <button className="bookBtn" onClick={() => props.action(props.title, props.nameList)}>Call Title</button>
      <button className="bookBtn" onClick={() => props.action(props.nameList)}>Call Characters</button>
    </div>
  )
}

export default Books