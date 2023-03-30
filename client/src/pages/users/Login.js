import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userInfo, userLogin } from '../../services/userService';
import Register from "./Register";

let emptyForm = {
    username: '',
    password: '',
    email: ''
}

function Login({ setUser }) {

    const navigate = useNavigate()

    let [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const token = await userLogin(form)

        if (!token) {
            setForm(emptyForm)
            return
        }

        localStorage.setItem("token", token)

        const user = await userInfo()
        setUser(user)

        navigate('/places')
    }

    return (
        <div className='Signform'>
            <div className='signLeftContent'>
                <img className="signImg" src={require('../../images/signImg.jpg')} alt='event img' />
                <div className='imgText'>
                    <h1>Welcome Back</h1>
                    <p>Discover millions of events, get alerts about your favorite artists, teams, plays and more — plus always- secure, effortless ticketing.
                    </p>
                </div>
            </div>
            <div className="form-body">
                <h2>Sign In</h2>
                <p>New to EventMaster? </p>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Sign Up</button>
                <form onSubmit={handleSubmit}>
                <div className="email">
                    <label className="form__label" htmlFor="user">Username </label>
                    <input type="text" 
                    id="user" 
                    className="form__input" 
                    name="username"
                    onChange={handleChange}
                    value={form.username} />
                </div>
                <div className="password">
                    <label className="form__label" htmlFor="pass">Password </label>
                    <input className="form__input" 
                    type="password" 
                    id="pass" 
                    name="password" 
                    onChange={handleChange}
                    value={form.password}
                    />
                </div>
                <div className="signBtn">
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </div>
                </form>
            </div>
           
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <Register />
                </div> 
            </div>
        </div>
    );
}

export default Login;