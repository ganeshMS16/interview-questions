import React,{useState} from "react";

const Form_1=()=>{
const [text,setText]=useState("");

const handleSubmit=(e)=>{
e.preventDefault();
console.log(text)
}

const handleChange=(e)=>{
setText(e.target.value)
}
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="data" onChange={handleChange} value={text} />
            <button type="submit" >submit</button>
        </form>
        </>
    )
}

export default Form_1;