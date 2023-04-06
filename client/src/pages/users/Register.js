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

        navigate('/login')
    }

    return ( 
        <div className="SignUpform Signform">
          <div className='signLeftContent'>
                <img className="signImg" src={require('../../images/adir.jpg')} alt='event img' />
                <div className='imgText'>
                    <h1>Welcome</h1>
                    <p>Wondering how to plan your dream trip? We're here to help.
                    </p>
                </div>
            </div>
            
            <div className="form-body">
            <h1>Sign Up</h1>
            <form onSubmit= {handleSubmit}>
            <div className="reg-name">
                <label htmlFor="nm" className="form__label" >Name:</label>
                    <input 
                    className="form__input" 
                    type="text" 
                    id="nm" 
                    name = "name"
                    onChange={handleChange}
                    value={form.name}
                    validate="required:true"
                    minLength={2}
                    />
                    </div>
                    <div>
                     <label htmlFor="ln" className="form__label" >Last Name:</label>
                    <input 
                    className="form__input" 
                    type="text" 
                    id="ln" 
                    name = "lastname"
                    onChange={handleChange}
                    value={form.lastname}
                    validate="required:true"
                    minLength={2}
                    />
               </div>
                <div className="username">
                <label htmlFor="user" className="form__label" >Username:</label>
                    <input 
                    className="form__input" 
                    type="text" 
                    id="user" 
                    name = "username"
                    onChange={handleChange}
                    value={form.username}
                    validate="required:true"
                    minLength={3}
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
                    minLength={3}
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