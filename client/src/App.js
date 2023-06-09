import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import 'font-awesome/css/font-awesome.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { userInfo } from './services/userService';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Register from './pages/users/Register';
import Login from './pages/users/Login';

import Profile from './pages/places/Save';
import Settings from './pages/users/Edit'

import IndexPlace from './pages/places/Index';
import ShowPlace from './pages/places/Show';


function App() {
  library.add(fas)

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {

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
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path='/places' element={<IndexPlace user={user} />} />
        <Route path='/places/:id' element={<ShowPlace user={user} />} />
        <Route path='/places/search' element={<IndexPlace user={user} />} />
        {loggedIn ?
          <>
            <Route path='places/savedPlaces/:id' element={<Profile user={user} />} />
            <Route path='/users/:id' element={<Settings user={user} setUser={setUser} />} />

            {!isLoading && <Route path='*' element={<Navigate to='/places' />} />}
          </>
          :
          <>
            <Route path='/login' element={<Login setUser={setUser} />} />
            <Route path='/register' element={<Register setUser={setUser} />} />
            {!isLoading && <Route path='*' element={<Navigate to='/places' />} />}
          </>
        }
      </Routes>
      <Footer />
    </div>
  );
}

export default App;