import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Logo from '../images/logopic.png'

function Navbar({ user, setUser }) {

  const logout = () => {
    localStorage.removeItem("token")
    setUser({})
  };

  return (

    <nav className="navbar navbar-expand-lg nav">
      <div className="container-fluid">

<Link to="/places">
<img src={Logo} className ="travel-logo"  alt = "logo"/>
</Link>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            {user.username ?
              <>
                <li className="nav-item"><p className="welcome-user">Welcome {user.username}!</p>
            </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/places">Places</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="saved-places">
                    <div>My Places</div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`users/${user.id}`}>
                    <div>Settings</div>
                  </Link>
                </li>
                <li><div className="user-img">{user.username.charAt(0).toUpperCase()}</div></li>
                <li className="nav-item" onClick={logout}>
                  <Link className="nav-link" to="/login">Logout</Link>
                </li>
              </>
              :
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/places">Places</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link signup" to="/login">
                  <button >&nbsp; Sign In &nbsp;
                   <FontAwesomeIcon icon="fa-solid fa-user" />
                   </button>
                 </Link>
                </li>
                {/* <li className="nav-item">
            <Link  className="nav-link" to="/register">Register</Link>
          </li> */}
                {/* <li className="nav-item">
              <Link className="nav-link" to='/about'>
                <div>About</div>
              </Link>
            </li> */}
              </>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
