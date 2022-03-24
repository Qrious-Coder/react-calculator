import { Link } from "react-router-dom";
import logo from '../styles/logo.svg';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <img src={ logo } alt="logo" width='50'></img>
      <h1>Calculator</h1>
      <div className="links">
        <Link to="/">useState</Link> | 
        <Link to="/ReducerPage">useReducer</Link>
      </div>
    </nav>
   );
}
 
export default Navbar;