import { useEffect, useState, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { deleteUser, updateUser } from "../../services/userService"

function Edit({ user, setUser }) {
    const navigate = useNavigate()
    const nameRef = useRef()
    const lastnameRef = useRef()
    const mailRef = useRef()

    const [tempUser, setTempUser] = useState({})
    const [changed, setChanged] = useState(false)


    useEffect(() => {
        async function getLoggedInUser() {
            setTempUser(user)
        }
        getLoggedInUser()
    }, [])


    async function handleSubmit() {

        let updatedUser = {
            name: nameRef.current.value,
            lastname: lastnameRef.current.value,
            email: mailRef.current.value
        }
        await updateUser(user.id, updatedUser)
        setUser(user)
        setChanged(false)
        alert('edited successfully')
    }


    async function handleDeleteUser() {
        await deleteUser(user.id)
        localStorage.removeItem("token")
        setUser({})
        navigate('/login')
    }


    return (

        <div className="Signform">
        <div className='signLeftContent'>
              <img className="signImg" src={require('../../images/adir.jpg')} alt='event img' />
              <div className='imgText'>
                  <h1>Settings</h1>
              </div>
          </div>
          
          <div className="form-body">
          <h1>Edit {tempUser.name}'s Page</h1>
          <form onSubmit= {handleSubmit}>
          <div className="edit-name">
              <label htmlFor="nm" className="form__label" >Name:</label>
                  <input 
                  className="form__input" 
                  type="text" 
                  id="nm" 
                  name = "name"
                  ref={nameRef}
                  onChange={(e) => {
                        setChanged(true);
                        setTempUser({ ...tempUser, name: e.target.value })
                    }}
                  value={tempUser.name}
                  />
                  </div>
                  <div>
                   <label htmlFor="ln" className="form__label" >Last Name:</label>
                  <input 
                  className="form__input" 
                  type="text" 
                  id="ln" 
                  name = "lastname"
                  ref={lastnameRef}
                  onChange={(e) => {
                        setChanged(true);
                        setTempUser({ ...tempUser, lastname: e.target.value })
                    }}
                  value={tempUser.lastname}
                  />
             </div>
              
              <div className="email">
                  <label className="form__label" htmlFor="eml">Email </label>
                  <input 
                  id = "eml"
                  type="email" 
                  name="email"
                  ref={mailRef}
                  onChange={(e) => {
                        setChanged(true);
                        setTempUser({ ...tempUser, email: e.target.value })
                    }}
                  value={tempUser.email} 
                  className="form__input" 
                   />
              </div>

            <div className="btn-group user-btn">

                {changed ? (
                    <>
                        <button onClick={(e) => {
                            setTempUser({ ...user })
                            setChanged(false)
                        }}
                        >
                            Cancel
                        </button>
                        <button onClick={handleSubmit}>Save</button>
                    </>

                ) : null}

                <button onClick={handleDeleteUser}>Delete Account</button>


                <Link to='/places'>
                    <button>Back</button>
                </Link>
            </div>

                  </form>
                  </div>
                  </div>
    )
}

export default Edit