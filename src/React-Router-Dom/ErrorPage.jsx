import { Link } from "react-router-dom"

const ErrorPage = () => {
  return(
  <>
    <div id="Link">
      <Link to={'/main'}>Main Page</Link>
      <Link to={'/about'}>About</Link>
    </div>
    
    <div id="ErrorPage">
      <h1>Error</h1>
    </div>
  </>
  )
}

export default ErrorPage