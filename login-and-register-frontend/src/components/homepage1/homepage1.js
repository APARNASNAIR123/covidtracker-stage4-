import React from "react"
//import "./homepage.css"
import "./post.css"
import  { useState } from "react"
//import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import Post from "./post"

const Homepage1 = ({updateUser}) => {
    return (
        <div className="homepage">
            <h1 className="heading1">COVID-19 DASHBOARD</h1>
            <div className="button1" onClick={() => updateUser({})} >Logout</div>
            <br></br>
            <br></br>
            <Post/ >
            </div>
            )
            }
            
export default Homepage1;
