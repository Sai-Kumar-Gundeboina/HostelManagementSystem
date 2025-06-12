import React, { useState } from 'react'
import axios from 'axios'
import './styles.css'

export default function Login() {
    const[form, setForm]=useState({"username":"","password":""})
    const handleChange=(e)=>{
        setForm({...form, [e.target.name]:e.target.value})
    }
    const handleLogin=(e)=>{
        e.preventDefault();
        axios.post("https://localhost:1880/login", form) //http://20.193.131.13:1880/
        .then(()=> alert("Login Success"))
        .catch((err)=> alert(err.message))
        //alert(`ENtered ${form.username} - ${form.password}`);
        setForm({"username":"","password":""});
    }
  return (
    <div
        className="Login-page"
        style={{
            backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/040/890/255/non_2x/ai-generated-empty-wooden-table-on-the-natural-background-for-product-display-free-photo.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
        
        <div
          className="form-container"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
            maxWidth: "500px",
            width: "100%"
          }}
        >
            
            <h1>Login</h1>
            <form onSubmit={handleLogin} method='POST'>
                <div style={{display: "flex", gap: "10px", alignitems: "center", justifyContent:"center", paddingBottom:"10px"}}>
                <input type='radio' name='role'/><label>User</label>
                <input type='radio' name='role'/><label>Admin</label>
                </div>
                <label>Username: </label>
                <input 
                    onChange={handleChange}
                    name='username'
                    type="text" 
                    placeholder='username'
                    value={form.username} required/><br/>
                <label>Password: </label>
                <input 
                    onChange={handleChange}
                    name="password"
                    type="password" 
                    placeholder='password'
                    value={form.password} required/><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}
