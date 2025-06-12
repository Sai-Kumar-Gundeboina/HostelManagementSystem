import React, { useState } from 'react'
import './styles.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function RegisterTenant() {
  const navigate = useNavigate();
  const [form, setform]= useState({name:"", mobile:"",password:"", emailid:"", roomType:"single", permanentAdr:"", status:"approved", allocatedRoom:""})
  const handleChange= (e)=>{ setform({...form, [e.target.name]:e.target.value})}
  const handleSubmitForm = (e)=>{
    e.preventDefault();
    try{
      axios.post("http://localhost:1880/register-tenant", form)
      alert("Registered Successfully..");
     navigate("/")
     } catch (err) {
       console.error(err);
        alert("Failed to Register..")
    }
    //alert(`${form.name} ${form.mobile} ${form.emailid} ${form.roomType} ${form.permanentadr}`)
    //setform({name:"", mobile:"", emailid:"", roomType:"",permanentadr:""})
  }
  return (
    <div
  className="register-page"
  style={{
    backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/040/890/255/non_2x/ai-generated-empty-wooden-table-on-the-natural-background-for-product-display-free-photo.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}
>
  
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
      <h2>Register as a Tenant</h2>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor='name'>Full Name : </label>
        <input
          type="text"
          name='name'
          id="name"
          placeholder='Enter full name'
          value={form.name}
          onChange={handleChange}
          required
          />
          <br/>
        <label htmlFor='name'>Password : </label>
        <input
          type="password"
          name='password'
          id="password"
          placeholder='Enter password'
          value={form.password}
          onChange={handleChange}
          //pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}'
          required
          />
          <br/>
        <label htmlFor='mobile'>Mobile Number : </label>
        <input 
          type="tel" 
          id="mobile" 
          name='mobile'
          pattern='[0-9]{10}'
          placeholder='Enter mobile number'
          value={form.mobile}
          onChange={handleChange}
          required/>
          <br/>
          <label htmlFor='emailid'>Email id : </label>
          <input
            type='email'
            placeholder='Enter email id'
            name='emailid'
            value={form.emailid}
            onChange={handleChange}
            />
            <br/>
            <fieldset>
              <legend>Please select your preference of room</legend>
              <div>
                <input type='radio' id ="single" name="roomType" value="single" onChange={handleChange} checked ={form.roomType ==="single"}/>
                <label htmlFor='single'>1-shared</label>
              </div>
              <div>
                <input type='radio' id="double" name="roomType" value="double" onChange={handleChange} checked ={form.roomType ==="double"}/>
                <label htmlFor='double'>2-shared</label>
              </div>
              <div>
                <input type='radio' id="triple" name="roomType" value="triple"onChange={handleChange} checked ={form.roomType ==="triple"}/>
                <label htmlFor='triple'>3-shared</label>
              </div>
              
            </fieldset>
            <br/>
            <label>Permanenet Adress : </label>
            <textarea onChange={handleChange} name='permanentAdr' id="permanentAdr" value={form.permanentAdr} placeholder='Enter your permanent address' rows="5" cols="30"/>
            <br/>
            <br/>
          <button type='submit'>Submit</button>
      </form>
    </div>
    </div>
  )
}
