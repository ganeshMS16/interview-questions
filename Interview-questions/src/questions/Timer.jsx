import React, { useEffect, useState } from 'react'

function Timer() {
const [updateTime,setUpdateTime]=useState(new Date());
    useEffect(()=>{
        let id=setInterval(()=>{setUpdateTime(new Date())},1000)
        return ()=>clearInterval(id)
    },[])

    const validateTime=(value)=>{
        return value<10?`0${value}`:value
    }

    const hour=validateTime(updateTime.getHours());
    const min=validateTime(updateTime.getMinutes());
    const sec=validateTime(updateTime.getSeconds());

  return (
    <div>
        {
            `${hour}:${min}:${sec}`
        }
    </div>
  )
}

export default Timer