import React, { useState } from 'react'
import {data} from "../../accordionData.js"

function Accordion() {
  const [activeIndex,setActiveIndex]=useState(null);
  const handleClick=(index)=>{
setActiveIndex(activeIndex===index?null:index)
  }
  return (
    <div>
        {
          data.map(({question,answer},index)=>{
            return (
            <div key={index} style={{border:"2px solid black",width:"40%",marginLeft:"10px"}}>
           <div >
           <span>{question}</span>
           <button style={{marginLeft:"2rem"}}  onClick={()=>{handleClick(index)}}>+</button>
            </div>
            {
              activeIndex===index&&<h5>{answer}</h5>
            } 
            </div>
          )})
        }
    </div>
  )
}

export default Accordion