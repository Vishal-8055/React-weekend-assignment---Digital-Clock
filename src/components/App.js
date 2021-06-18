import React, { useEffect, useState} from "react";

var t;

const App = () => {

const [timer,setTimer]=useState(new Date().toLocaleTimeString())

useEffect(()=>{ 

t=setInterval(function(){

 setTimer(new Date().toLocaleTimeString()); 

},1000)

return()=>{

clearInterval(t);

}

},[])

return(

 

<div className="Clock">

 <h3 id="time">{timer}</h3>

 </div>

)

}

 

export default App;