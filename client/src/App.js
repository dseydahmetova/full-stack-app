import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"

import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { userInfo } from './services/userService';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';

import Register from './pages/users/Register';
import Login from './pages/users/Login';

import Profile from './pages/users/Index';

import IndexPlace from './pages/places/Index';
import ShowPlace from './pages/places/Show';

import { getAPIPlaces } from "../src/services/placeService"

function App() {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    getAPIPlaces()

  let token = localStorage.getItem("token")

      if (token) {
          getLoggedInUser()
      } else {
          setIsLoading(false)
      }

      async function getLoggedInUser() {
          const user = await userInfo()
          setUser(user)
          setIsLoading(false)
      }
      
  }, [])


  let loggedIn = user.username

  return (
    <div className="App">
     <Navbar user={loggedIn} setUser={setUser} />
      <Routes>
      <Route path='/places' element={<IndexPlace user={loggedIn} />} />
      <Route path='/places/:id' element={<ShowPlace user={user} />} />
      <Route path='/profile' element={<Profile user={user} />} />
              <Route path='/register' element={<Register setUser={setUser} />} />
              <Route path='/login' element={<Login setUser={setUser} />} />
              {/* {!isLoading && <Route path='*' element={<Navigate to='/login' />} />} */}
          
         
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
