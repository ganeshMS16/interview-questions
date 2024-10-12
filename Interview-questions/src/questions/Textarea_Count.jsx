import React, { useState } from 'react'

function Textarea_Count() {
    const [text,setText]=useState("");
    const [count,setCount]=useState(0);

    const handleText=(e)=>{
        const data=e.target.value;
        console.log(data)
        setText(data)
        console.log(data.match(/ /g))
        const counting_space=(data.match(/ /g) || []).length
        setCount(counting_space)
    }
  return (
    <div>
        <textarea cols={25} rows={10} onChange={handleText} value={text}>
        </textarea>
        <h1>Count of the space:{count}</h1>
    </div>
  )
}

export default Textarea_Count;