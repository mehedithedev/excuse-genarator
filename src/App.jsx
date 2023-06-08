import React, { useState } from 'react'
import Axios from 'axios'
function App() {
  const [excuse, setExcuse] = useState('')
  const fetchExcuser=(excuseName)=>{
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseName}/`)
    .then((res)=>{
      setExcuse(res.data[0].excuse)
    })
  }
  return (
    <div className='App'>
      <h1>Choose the context of excuse in which you want to use</h1>
      <h2>Here goes your excuse: {excuse}</h2>
        <div className='buttons'>
        <button onClick={()=>{fetchExcuser('family')}}>Family</button>
      
      <button onClick={()=>{fetchExcuser('office')}}>office</button>
      
      <button onClick={()=>{fetchExcuser('children')}}>children</button>
      
      <button onClick={()=>{fetchExcuser('college')}}>college</button>
      
      <button onClick={()=>{fetchExcuser('party')}}>party</button>
      
      <button onClick={()=>{fetchExcuser('funny')}}>funny</button>
      
      <button onClick={()=>{fetchExcuser('unbelievable')}}>unbelievable</button>
      
      <button onClick={()=>{fetchExcuser('developers')}}>developers</button>
      
      
      <button onClick={()=>{fetchExcuser('gaming')}}>gaming</button>
      
        </div>
    
      
    </div>
  )
}

export default App