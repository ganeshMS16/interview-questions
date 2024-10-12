import React, { useState } from 'react'

function RandomColor() {
    const [color,setColor]=useState();
    const handleColor=()=>{
        console.log("changeColor")
        let store="abcdef1234567890";
        let hex="#";
        for(let i=0;i<6;i++){
            hex+=store[Math.floor(Math.random()*store.length) ]
        }
        setColor(hex)
        console.log(hex)
    }

  return (
    <div>
        <button style={{backgroundColor:color}} onClick={handleColor}>random</button>
    </div>
  )
}

export default RandomColor