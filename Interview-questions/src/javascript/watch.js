const timer=()=>{
    const time=new Date();
    let hours=time.getHours();
    let minutes=time.getMinutes();
    let seconds=time.getSeconds();
    
    const time_display=document.getElementById("time_display");
    time_display.textContent=`${hours}:${minutes}:${seconds}`    

}

setInterval(timer,1000)