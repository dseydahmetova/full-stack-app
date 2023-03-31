import { useEffect, useState, useRef } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { deleteUser, updateUser } from "../../services/userService"

function Show({ user, setUser }) {
    const navigate = useNavigate()
    const params = useParams()
    const mailRef = useRef()

    const [tempUser, setTempUser] = useState({})
    const [changed, setChanged] = useState(false)

    useEffect(() => {
        console.log('user: ', user)
        console.log('tempUser: ', tempUser)
    })

    useEffect(() => {
        async function getLoggedInUser() {
            setTempUser(user)
        }
        getLoggedInUser()
    }, [])


    async function handleSubmit() {

        let updatedUser = {
            email: mailRef.current.value
        }
        await updateUser(user.id, updatedUser)
        setUser(user)
        setChanged(false)
        alert('saved successfully')
    }


    async function handleDeleteUser() {
        await deleteUser(user.id)
        localStorage.removeItem("token")
        setUser({})
        navigate('/places')
    }


    return (
        <div>

            <div>
                <h2>Settings</h2>

                <input
                    type="text"
                    name="username"
                    value={tempUser.username}
                />
                <input
                    type="text"
                    name="email"
                    ref={mailRef}
                    value={tempUser.email}
                    onChange={(e) => {
                        setChanged(true);
                        setTempUser({ ...tempUser, email: e.target.value })
                    }}
                />

            </div>







            <div className="buttons">

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

        </div>
    )
}

export default Show