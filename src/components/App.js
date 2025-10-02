
import React,{useState} from "react";
import Form from "./Form";
import './../styles/App.css';

const App = () => {
  const [forms,setForms]=useState(
    [{name:'',age:""}]);
    
   const handleChange=(index,event)=>{
    const newForms=[...forms];
    newForms[index][event.target.name]=event.target.value;
    setForms(newForms);
   }

    const removeBtn=(index)=>{
      const newForms=forms.filter((_,i)=>i!==index);
    setForms(newForms);
   }

   const addForm=()=>{
    setForms([...forms,{name:'', age:""}])
   }

   const submitForm=()=>{
     const cleanedData = forms.map(form => ({
    ...form,
    age: Number(form.age) // convert age to a number here
  }));
  console.log(cleanedData);
   }

  return (
    <div>
    {forms.map((formData,index)=>{
      return(
      <Form index={index}
      key={index}
      formData={formData}
      handleChange={handleChange}
      removeBtn={removeBtn}/>
      );

    })}
      <button onClick={addForm}>Add more..</button>
        <button onClick={submitForm}>Submit</button>
   </div>
    
   
  )
}

export default App
