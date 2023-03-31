import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userInfo, userRegister } from "../../services/userService";

let emptyForm = { 
    username: '',
    password: '',
    email: ''
}

function Register({ setUser }) {

    const navigate = useNavigate()

    let [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const token = await userRegister(form)

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
        <div className="SignUpform">
            <h1>Register</h1>
            <div className="form-body">
                <div className="username">
                <label htmlFor="user" className="form__label" >Username:</label>
                    <input 
                    className="form__input" 
                    type="text" 
                    id="user" 
                    name = "username"
                    onChange={handleChange}
                    value={form.username}
                    />
               </div>
                <div className="email">
                    <label className="form__label" htmlFor="eml">Email </label>
                    <input 
                    id = "eml"
                    type="email" 
                    name="email"
                    onChange={handleChange}
                    value={form.email} 
                    className="form__input" 
                     />
                </div>
                <div className="password">
                <label htmlFor="psw">Password:</label>
                <br />
                <input 
                    type="password" 
                    id="psw"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                />
                </div>
              
                <div className="signupBtn">
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Register</button>
            </div>
                </div>
        </div>
     );
}

export default Register;