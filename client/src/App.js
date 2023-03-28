import './index.css';

import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { userInfo } from './services/userService';

import Register from './pages/users/Register';
import Login from './pages/users/Login';
import Navbar from './components/Navbar';
import IndexPost from './pages/places/Index';


function App() {

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
     <Navbar user={loggedIn} setUser={setUser} />
      <Routes>
        
      <Route path='/places' element={<IndexPost user={loggedIn} />} />

              <Route path='/register' element={<Register setUser={setUser} />} />
              <Route path='/login' element={<Login setUser={setUser} />} />
              {!isLoading && <Route path='*' element={<Navigate to='/login' />} />}
          
         
      </Routes>
    </div>
  );
}

export default App;
