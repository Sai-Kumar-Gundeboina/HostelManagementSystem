import React, { useState } from 'react'
import axios from 'axios'
export default function Login() {
    const[form, setForm]=useState({"username":"","password":""})
    const handleChange=(e)=>{
        setForm({...form, [e.target.name]:e.target.value})
    }
    const handleLogin=(e)=>{
        e.preventDefault();
        axios.post("http://20.193.131.13/:1880/login", form)
        .then(()=> alert("Login Success"))
        .catch((err)=> alert(err.message))
        //alert(`ENtered ${form.username} - ${form.password}`);
        setForm({"username":"","password":""});
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleLogin} method='POST'>
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
  )
}
