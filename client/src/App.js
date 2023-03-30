import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"

import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import { userInfo } from './services/userService';

import Register from './pages/users/Register';
import Login from './pages/users/Login';
import Navbar from './components/Navbar';
import IndexPlace from './pages/places/Index';
import ShowPlace from './pages/places/Show';
// import Footer from './components/Footer';
import { MyContext } from '../src/services/context'
import { getAllPlaces } from "../src/services/travelApi"

function App() {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [places, setPlaces] = useState([])

  useEffect(() => {
      async function loadData() {
          const data = await getAllPlaces()
          const allEvents = data.data

          setPlaces(allEvents)
      }
      loadData()
  }, [])

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
     <MyContext.Provider value={{ places }}>
     <Navbar user={loggedIn} setUser={setUser} />
      <Routes>
      <Route path='/places' element={<IndexPlace user={loggedIn} />} />
      <Route path='/places/:id' element={<ShowPlace user={loggedIn} />} />

              <Route path='/register' element={<Register setUser={setUser} />} />
              <Route path='/login' element={<Login setUser={setUser} />} />
              {!isLoading && <Route path='*' element={<Navigate to='/login' />} />}
          
         
      </Routes>
      {/* <Footer/> */}
      </MyContext.Provider>
    </div>
  );
}

export default App;
