import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
const Content=()=>{  
  const location = useLocation();
  const indice =location.pathname.lastIndexOf("/");
 
        return(
            <Dashboard>
            <div style={{backgroundColor:"honeydew", width:"80%", borderRadius:"20px",marginLeft:"50px"}}>
                <div>
                    <h2>{location.pathname.substr(indice+1)}</h2>
                </div>
                    <h1>Welcome  to your Dashboard</h1>
            </div>        
            </Dashboard>
        )
   
}
export default Content