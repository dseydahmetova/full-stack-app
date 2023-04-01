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
            <form onSubmit= {handleSubmit}>
                <div className="username">
                <label htmlFor="user" className="form__label" >Username:</label>
                    <input 
                    // required pattern="[A-Za-z]{3,}"
                    className="form__input" 
                    type="text" 
                    id="user" 
                    name = "username"
                    onChange={handleChange}
                    value={form.username}
                    validate="required:true"
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
                    validate="required:true"
                    pattern=".+@globex\.com"
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
                    validate="required:true"
                />
                </div>
              
                <div className="signupBtn">
                <button type="submit"  className="btn btn-primary">Register</button>
            </div>
            </form>
                </div>
        </div>
     );
}

export default Register;