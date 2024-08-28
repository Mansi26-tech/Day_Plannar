import React, { useState } from 'react'

export default function Form() {

    
    const [name,setName]=useState("Mansi");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const handleName=(e)=>
    {
        console.log(e.target.value)
        setName(e.target.value);
    }
    const handleEmail=(e)=>
        {
            console.log(e.target.value);
            setEmail(e.target.value)
        }
    
  return (
    <div>
      <label>
          Name:
          <input type='text' value={name} onChange={handleName}/>
          Email:
          <input type='email' onChange={handleEmail}/>
          Password:
          <input type='password' onChange={(e) => {
                  console.log(e.target.value);
                  setPassword(e.target.value);
              }}/>
      </label>
    </div>
  )
}
