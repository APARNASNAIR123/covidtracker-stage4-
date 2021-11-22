import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
    name: "",
    address:"",
    phoneno:"",
    age:"",
    vaccinated:"",
    type:"",
    district:"",
    village:"",
    ward:"",
    email: "",
    password: "",
    reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:1000/api/auth/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invalid input")
        }
        
    }

    return (
        <>
        <div className="registerpage">
        <div className="register">
            {console.log("User", user)}
            <h1>Register Here</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input><br></br>
            <input type="text" name="address" value={user.address} placeholder="Your Address" onChange={ handleChange }></input>
            <input type="text" name="phoneno" value={user.phoneno} placeholder="Phone Number" onChange={ handleChange }></input>
            <input type="text" name="age" value={user.age} placeholder="AGE" onChange={ handleChange }></input>
            <input type="text" name="vaccinated" value={user.vaccinated} placeholder="Vaccination Status " onChange={ handleChange }></input>
            <input type="text" name="type" value={user.type} placeholder="type(patient/health worker)" onChange={ handleChange }></input>
            <input type="text" name="district" value={user.district} placeholder="District" onChange={ handleChange }></input>
            <input type="text" name="village" value={user.village} placeholder="Village" onChange={ handleChange }></input>
            <input type="text" name="ward" value={user.ward} placeholder="Your Ward" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
        </div>
        </>
    )
}

export default Register