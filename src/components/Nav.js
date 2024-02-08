import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <div className="bg-primary w-100 d-flex">
      <div className="container my-2">
        <NavLink to="login" className="text-white mx-4 text-decoration-none">Home</NavLink>
        <NavLink to="/" className="text-white mx-4 text-decoration-none">License Search</NavLink>
        <NavLink to="/" className="text-white mx-4 text-decoration-none">Quota Overview</NavLink>
        <NavLink to="/" className="text-white mx-4 text-decoration-none">License Print Check</NavLink>
        <NavLink to="/" className="text-white mx-4 text-decoration-none">FAQ</NavLink>
        <NavLink to="/" className="text-white mx-4 text-decoration-none">User Manual</NavLink>
      </div>
    </div>
  )
}
export default Nav