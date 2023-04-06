import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Logo from '../images/logoNav-removebg-preview.png'

function Navbar({ user, setUser }) {

  const logout = () => {
    localStorage.removeItem("token")
    setUser({})
  };

  return (
    <nav className="navbar navbar-expand-lg nav ">
      <div className="container-fluid">

        <Link to="/">
          <img src={Logo} className="travel-logo" alt="logo" />
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            {user.username ?
              <>
                <li className="nav-item"><p className="welcome-user">WELCOME {user.name.toUpperCase()}!</p>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/places">Places</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`places/savedPlaces/${user.id}`}>
                    <div>My Places</div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`users/${user.id}`}>
                    <div>Settings</div>
                  </Link>
                </li>
                <li className="nav-item" onClick={logout}>
                  <Link className="nav-link" to="/login">
                    Logout
                  </Link>
                </li>
                <li><div className="user-img">{user.username.charAt(0).toUpperCase()}</div></li>

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

              </>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
