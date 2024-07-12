import { Link, useParams } from "react-router-dom"

const data = [
  {factId:1, name: 'Eren'},
  {factId:2, name: 'Mikasa'},
  {factId:3, name: 'Armin'}
]

const ParamPage = () => {

  const param = useParams()

  const user = data.find(user => user.factId == param.factId)

  if(!user) {
    return <h2>Couldn't find the fact by given ID</h2>
  }

  return(
    <>
      <div id="Link">
          <Link to={'/main'}>Main Page</Link>
          <Link to={'/about'}>About</Link>
        </div>

      <div id="ParamPage">
        <h1>{user.name}</h1>
        <h1>{user.id}</h1>
      </div>
    </>
  )
}

export default ParamPage