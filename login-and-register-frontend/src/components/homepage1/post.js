import React from "react"
import "./homepage1.css"
import "./post.css"
import  { useState } from "react"
//import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
const Post = () => {

    const history = useHistory()
    
     const [ post, setPost] = useState({
        symptoms:"",
        testdate:"",
        selfisolation:"",
        medicalcenter:"",
        medicinestatus:"",
        issues:"",
        email:""
    })
    
    const handleChange = e => {
        const { name, value } = 
e.target

        setPost({
            ...post,
            [name]: value
        })
    }
    
    const post1 = () => {
        const {   symptoms,testdate,  selfisolation,  medicalcenter,  medicinestatus,  issues, email } = post
            
axios.post
("http://localhost:8000/api/main/post", post)
            .then( res => {
                alert(
res.data.post
)
               console.log(
res.data.post
)
               setPost({
                ...post,
                post:res.data.post
            })
           
            })
            history.push("/chat")
           }
    
           return (
            <>
            
            <div className="navbar1">
        

        <button button className="button2" onClick={()=>{
        history.push("/chat")
        }}>CHAT</button>
  
      
        </div>
        
            <div className="postpage">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="tabletogether">
            <div className="post">
                {console.log("Post", post)}
                <h1 className="head1">SURVEY TOOL</h1>
                <br></br>
                <label>What all symptoms do you have ?</label>
                <input type="text" name="symptoms" value={post.symptoms} onChange={ handleChange }></input>
                <br></br>
                <label>When did you undergo corona test ?</label>
                <input type="text" name="testdate" value={post.testdate} onChange={ handleChange }></input>
                <br></br>
                <label>Are you in self isolation?</label>
                <input type="text" name="selfisolation" value={post.selfisolation}  onChange={ handleChange }></input>
                <br></br>
                <label>Do you inform your near by medical center?</label>
                <input type="text" name="medicalcenter" value={post.medicalcenter}  onChange={ handleChange }></input>
                <br></br>
                <label>Do they providing you sufficient medicines?</label>
                <input type="text" name="medicinestatus" value={post.medicinestatus}  onChange={ handleChange }></input>
                <br></br>
                <label>Is there any other issues ?</label>
                <input type="text" name="issues" value={post.issues} onChange={ handleChange }></input>
                <br></br>
                <label>Enter your email</label>
                <input type="text" name="email" value={
post.email
} onChange={ handleChange }></input>
                
                <div className="button" onClick={post1} >Post</div>
                
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
            
            <br></br>
            <br></br>
            <div className="table1">
            <h1 className="head1">Your Answer</h1>
            <table className="table">
        <tr className="heading">

        <th>SYMPTOMS</th>
        <td>{post.symptoms}</td>
        </tr>
        <tr>
        <th>TEST DATE</th>
        <td>{post.testdate}</td>
        </tr>
        <tr>
        <th>SELF ISOLATION</th>
        <td>{post.selfisolation}</td>
        </tr>
        <tr>
        <th>MEDICAL CENTER</th>
        <td>{post.medicalcenter}</td>
        </tr>
        <tr>
        <th> MEDICINE STATUS</th>
        <td>{post.medicinestatus}</td>
        </tr>
        <tr>
        <th>ISSUES</th>
        <td>{post.issues}</td>
        </tr>
        <tr>
        <th>EMAIL</th>
        <td>{
post.email
}</td>
        </tr>
         </table>
         </div>
            </div>
             </div>
             <div >
            <h1 className="tips" >HOME SELF ISOLATION TIPS </h1>
            <div className="tip123">
            <h2 className="tip1">* Stay home except to get medical care</h2>
            <h2 className="tip2">* Separate yourself from other people and animals in your home</h2>
            <h2 className="tip3">* Call ahead before visiting your doctor</h2>
            </div>
            <div className="tip456">
            <h2 className="tip4">* Wear a facemask</h2>
            <h2 className="tip5">* Cover your coughs and sneezes</h2>
            <h2 className="tip6">* Clean your hands often</h2>
            </div>
            <div className="tip789">
            <h2 className="tip7">* Avoid sharing personal household items</h2>
            <h2 className="tip8">* Clean all “high-touch” surfaces everyday</h2>
            <h2 className="tip9">* Monitor your symptoms </h2>
            </div>
            </div>
            
             </div>
             </>
        )
        }
    
    
    export default Post; 