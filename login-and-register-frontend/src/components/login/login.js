import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({ updateUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:1000/api/auth/login", user)
        .then(res => {
            alert(res.data.message)
            updateUser(res.data.user)
            history.push("/home")
        })
    }

    return (
        <>
        <div className="Loginpage">
        <div className="login">
            <h1>Login Here</h1>
            <br></br>
            <br></br>
            <label>Username</label>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder=" Email"></input>
            <label>Password</label>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
        </div>
        </div>
        </>
    )
}

export default Login