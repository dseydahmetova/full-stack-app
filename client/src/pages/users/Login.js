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

    function goToRegister(){
        navigate('/register')
    }

    return (
        <div className='Signform'>
            <div className='signLeftContent'>
                <img className="signImg" src={require('../../images/adir.jpg')} alt='event img' />
                <div className='imgText'>
                    <h1>Welcome Back</h1>
                    <p>Wondering how to plan your dream trip? We're here to help.
                    </p>
                </div>
            </div>
            <div className="form-body">
                <h1>Sign In</h1>
                <p>Do not have an account? </p>
                <button type="button" className="btn btn-primary" onClick={goToRegister} data-bs-whatever="@mdo">Sign Up</button>
                <form onSubmit={handleSubmit}>
                <div className="email">
                    <label className="form__label" htmlFor="user">Username </label>
                    <input type="text" 
                    id="user" 
                    className="form__input" 
                    name="username"
                    onChange={handleChange}
                    value={form.username} 
                        required
                    />
                </div>
                <div className="password">
                    <label className="form__label" htmlFor="pass">Password </label>
                    <input className="form__input" 
                    type="password" 
                    id="pass" 
                    name="password" 
                    onChange={handleChange}
                    value={form.password}
                    required
                    />
                </div>
                <div className="signBtn">
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </div>
                </form>
            </div>
        </div>
    );
}

export default Login;