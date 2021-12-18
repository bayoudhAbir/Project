import React, { useState } from "react";
import Dashboard from "./Dashboard";
import ClientCard from "./ClientCard";
import Table from 'react-bootstrap/Table'
import {useSelector}  from 'react-redux'
const ClientList=()=>{ 
    const clients = useSelector(state=>state.clients)
    const [search,setSearch]=useState();
    console.log("search",search)
    console.log("clients",clients)
    return(
        <Dashboard>
        <div style={{backgroundColor:"honeydew", width:"80%", borderRadius:"20px",marginLeft:"50px"}}>
        <div class="input-group">
            <div class="form-outline" style={{ width:"30%", marginTop:"50px",marginLeft:"50px",marginBottom:"20px"}}>
                <input type="search" id="form1" class="form-control" value={search} placeholder="search" onChange={e=>setSearch(e.target.value)}/>
            </div>
        </div>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Raison social</th>
                <th>Capital social</th>
                <th>Matricule fiscal</th>
                <th>Addresse de la societe</th>
                <th>Numéro de CNSS</th>
                <th>Regime fiscal</th>
                <th>Echance fiscal</th>
                <th>Echance CNSS</th>
                <th>Numéro de R.N.E</th>
                <th>Activite</th>
                <th>Gerant</th>
                <th>N° Téléphone de gérant</th>
                <th>E-mail de gérant</th>
                </tr>
            </thead>
        </Table>
        <ClientCard key={clients.id} clients={search?clients.filter(clients=>clients.raisonSocial.toLowerCase().includes(search.toLowerCase())):clients}/>

         </div>        
        </Dashboard>
    )
}
export default ClientList