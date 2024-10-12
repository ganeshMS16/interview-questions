import React,{useState} from 'react'

function Hover() {
const [onHover,setOnHover]=useState(false);
const handleHover=()=>setOnHover(true);
const handleNotHover=()=>setOnHover(false)
  return (
    <div>
        <button 
        onMouseEnter={handleHover}
        onMouseLeave={handleNotHover}
        style={{
            backgroundColor:onHover?"pink":"blue",
            color:"white"
        }}
        >hover me!</button>
    </div>
  )
}

export default Hover