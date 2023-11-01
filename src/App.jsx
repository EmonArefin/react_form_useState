import React from 'react';
import { useState } from 'react';

const App = () => {
  let [formObj, setFormObj]=useState({
    fName:"",
    lName:"",
    city:"",
    gender:""
  })

  const changeInput = (key, value)=>{
    setFormObj(prevObj=>({
      ...prevObj,
      [key]: value
    }))
  }

  const formSubmit = (e)=>{
    e.preventDefault()
    alert(JSON.stringify(formObj))
    console.log(formObj)
  }

  return (
    <div className='container'>
      <form onSubmit={formSubmit}>
        <input onChange={(e)=>{changeInput("fName", e.target.value)}} value={formObj.fName}  placeholder='First Name' type="text" /><br />
        <input onChange={(e)=>{changeInput("lName", e.target.value)}} value={formObj.lName} placeholder='Last Name' type="text" /><br />
        <select onChange={(e)=>{changeInput("city", e.target.value)}} value={formObj.city}>
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Cumilla">Cumilla</option>
        </select>
        <br />
        <input onChange={()=>{changeInput("gender", "Male")}} checked={formObj.gender==="Male"} type="radio" name='gender' />Male
        <input onChange={()=>{changeInput("gender", "Female")}} checked={formObj.gender==="Female"} type="radio" name='gender' />Female
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default App;





