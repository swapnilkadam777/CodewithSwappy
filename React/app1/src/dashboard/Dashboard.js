import React from "react";
import ReactDOM from "react-dom";
import "./Dashboard.css"
import { useState } from "react";
function Dashboard() { 
    const [ProjectName,setName] = useState("React First Project" ) ;
    var changeText =event=>{
        setName(event.target.value);
    }  
    function submit(){
        // alert("hello");
    }
    return ( 
        <>  
            <div className="Header" > 
                { ProjectName?<h1>{ProjectName} </h1> :<h1>"Swapnil House"</h1>  
                }
            </div> 
            <div> 
                <input type="text" name="pname" id="pnameid" onChange={changeText}  value={ProjectName} /> 
                <button onClick={submit}> submit</button>
            </div>
        </>
    ); 
}

export default Dashboard;
