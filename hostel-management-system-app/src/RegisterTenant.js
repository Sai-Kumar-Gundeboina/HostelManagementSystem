import React, { useState } from 'react'
import './styles.css'
export default function RegisterTenant() {
  const [form, setform]= useState({name:"", mobile:"", emailid:"", roomType:"single", permanentadr:""})
  const handleChange= (e)=>{ setform({...form,[e.target.name]:e.target.value})}
  const handleSubmitForm = (e)=>{
    e.preventDefault();
    alert(`${form.name} ${form.mobile} ${form.emailid} ${form.roomType} ${form.permanentadr}`)
    //setform({name:"", mobile:"", emailid:"", roomType:"",permanentadr:""})
  }
  return (
    <div
  className="register-page"
  style={{
    backgroundImage: "url('/your-image.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
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
            type='emailid'
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
            <textarea onChange={handleChange} name='permanentadr' id="permanentadr" value={form.permanentadr} placeholder='Enter your permanent address' rows="5" cols="30"/>
            <br/>
          <button type='submit'>Submit</button>
      </form>
    </div>
    </div>
  )
}
