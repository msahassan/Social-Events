import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/Image/logo.jpg'
import { useContext} from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  

  const{user,logOut} = useContext(AuthContext)
  const handlelogOut =()=>{
    logOut()
    .then(result =>{
      console.log(result.user)
    })
    .catch(error =>{
      console.error(error.message)
    })
  }

  

  const navlink = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/gallery"}>Gallery</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/Shop"}>Shop</NavLink>
      </li>
    </>
  );
  return (
    <div>
      
      <div>
        <div className="navbar bg-base-100 shadow-md py-3 ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg"
              >
                {navlink}
              </ul>
            </div>
           
            <Link className="flex" to={'/'}>
            <img className="h-14 w-16" src={logo} alt="" />
              <h1 className="font-semibold ml-3">
                {" "}
                <span className="lg:text-3xl text-orange-700">
                  Rainbow
                </span> <br /> Event Planner{" "}
              </h1>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navlink}</ul>
          </div>
          <div className="navbar-end space-x-3 flex-1">
            {
              user ?
              <button onClick={handlelogOut} className="btn">Log Out</button>
              :
              <Link to={'/login'}> <button className="btn">Login</button></Link>
            }
            
           <Link to={'/register'}><button className="btn">Sign Up</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
