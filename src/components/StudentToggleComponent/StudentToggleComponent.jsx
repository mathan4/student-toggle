import React, { useState } from 'react'
import profile from '../../assets/images/3584411.png'
import './StudentToggleComponent.css'

const StudentToggleComponent = () => {
    const [visible,setVisible]=useState(false)
    
    const ShowDetailsHandler=()=>{
        if(visible){
            setVisible(false)
        }else{
            setVisible(true)
        }
        
    }
  return (
    <main>
        <div className='container'>
        <img src={profile} alt="profile" style={{ height: '100px' }}/>
        <h1>Name: John snow</h1>
        <h3>Reg No: 1111</h3>
        <button onClick={ShowDetailsHandler}>Show Details</button>
        {visible && <h3>Additional information</h3>}
        </div>
    </main>
  )
}

export default StudentToggleComponent