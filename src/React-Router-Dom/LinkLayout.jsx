import { Link, Outlet } from "react-router-dom"


const LinkLayout = () => {
  return(
    <div>
      <div id="Link">
        <Link to={'/main'}>Main Page</Link>
        <Link to={'/about'}>About</Link>
      </div>

      <Outlet />
    </div>
  )
}

export default LinkLayout