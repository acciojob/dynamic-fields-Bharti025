import React,{useState}from 'react'

const Form = ({index,formData,handleChange,removeBtn}) => {
 
  return (
    <div>
      <input type="text" name="name" placeholder='Name' value={formData.name}  onChange={(e) => handleChange(index, e)}/>
        <input type="number" name="age" placeholder='Age' value={formData.age}  onChange={(e) => handleChange(index, e)}/>
      <button onClick={()=>{removeBtn(index)}}>Remove</button>
    </div>
  )
}

export default Form
