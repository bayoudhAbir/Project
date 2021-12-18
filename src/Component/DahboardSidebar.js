 import React from "react";
 import { Link } from "react-router-dom";
 import Button from 'react-bootstrap/Button'
 const Sidebar =()=>{
     return(
        <div class="d-grid gap-2 col-6" style={{marginLeft:"10px"}}>
            <Link to="/dashboard/saisieclient">
            <Button style={{width:"200px"}}  type="button" variant="outline-primary" >Saisie Client</Button>
            </Link>
            <Link to="/dashboard/listeclient" >
            <Button style={{width:"200px"}} type="button" variant="outline-primary">Liste des clients</Button> 
            </Link>
            
        </div>
     )
 }
 export default Sidebar;
