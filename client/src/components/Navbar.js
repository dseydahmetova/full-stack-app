import { Link } from "react-router-dom";

function Navbar({ user, setUser }) {

  const logout = () => {
    localStorage.removeItem("token")
    setUser({})
  };

  return (

<nav className="navbar navbar-expand-lg nav">
      <div className="container-fluid">
      
        
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
      {user ? 
        <>
          <li className="nav-item">Welcome {user}!</li>
          <li className="nav-item">
            <Link className="nav-link" to="/places">Places</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to={`/profile`}>
                <div>My Profile</div>
              </Link>
            </li>
          <li className="nav-item" onClick={logout}>
            <Link  className="nav-link" to="/login">Logout</Link>
          </li>
        </>
       : 
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/places">Places</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link signup" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to="/register">Register</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to='/about'>
                <div>About</div>
              </Link>
            </li>
        </>
      }
    </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
