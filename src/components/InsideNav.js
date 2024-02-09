import { NavLink } from "react-router-dom"

const InsideNav = () => {
  return (
    <div className="bg-primary w-100 d-flex">
      <div className="container my-2">
        <NavLink to="home" className="text-white mx-4 text-decoration-none">Home</NavLink>
        <NavLink to="home" className="text-white mx-4 text-decoration-none">How to Use</NavLink>    
      </div>
    </div>
  )
}
export default InsideNav