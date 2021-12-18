import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dashboard from "./Dashboard";
import {useDispatch}  from 'react-redux';
import { ADDNew } from "../Actions/client-actions";
import {useNavigate} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
const SaisieClient=()=>{
const [raisonSocial,SetRaisonSocial]=useState();
const [cptSocial,setCptSocial]=useState();
const [matrFisc,setMatrFisc]=useState();
const [numCNSS,setNumCNSS]=useState();
const [regimeFisc,setRegimeFisc]=useState();
const [numRNE,setNumRNE]=useState();
const [addrSoc,setAddrSoc]=useState();
const [email,setEmail]=useState();
const[telSoc,setTelSoc]=useState();
const[activite,setActivite]=useState();
const [echanceFisc,setEchanceFisc]=useState();
const [echeanceCNSS,setEcheanceCNSS]=useState();
const [nomPrenomGerant,setNomPrenomGerant]=useState();
const [teleGerant,setTeleGerant]=useState();
const [emailGerant,setEmailGerant]=useState();
//const[dossierJuridique,setDossierJuridique]=useState();
const dispatch= useDispatch();
const navigate=useNavigate();
const newClient={
id:uuidv4(),
raisonSocial:raisonSocial,
capitalSocial:cptSocial,
matFiscal:matrFisc,
addresseSociete: addrSoc,
nCNSS:numCNSS,
regimeFiscal:regimeFisc,
echanceFiscal:echanceFisc,
echanceCNSS:echeanceCNSS,
nRNE:numRNE,
activite:activite,
gerant:nomPrenomGerant,
nTeleGerant:teleGerant,
mailGerant:emailGerant,
}
console.log("newClient",newClient)
 const handleFormSubmit=()=>{
    dispatch(ADDNew(newClient))
    navigate('/dashboard/listeclient')
 }  
const handleAnnuler=()=>{
    SetRaisonSocial('');
    setCptSocial('');
    setMatrFisc('');
    setNumCNSS('');
    setRegimeFisc('');
    setNumRNE('');
    setAddrSoc('');
    setEmail('');
    setTelSoc('');
    setActivite('');
    setEchanceFisc('');
    setEcheanceCNSS('');
    setNomPrenomGerant('');
    setTeleGerant('');
    setEmailGerant('');
}
    return(
        <Dashboard>
        <div style={{backgroundColor:"honeydew", width:"80%", borderRadius:"20px",marginLeft:"50px"}}>

        <Form onSubmit={handleFormSubmit}>  
        <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail" className="saisieGrp" style={{marginTop:"30px"}}>
                    <Form.Label>Raison social</Form.Label>
                    <Form.Control type="text" value={raisonSocial} onChange={(e)=>SetRaisonSocial(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col}  className="saisieGrp" style={{marginTop:"30px"}}>
                    <Form.Label>Capital social</Form.Label>
                    <Form.Control type="text" value={cptSocial} onChange={(e)=>setCptSocial(e.target.value)} />
                </Form.Group>
            </Row>
            <Row className="mb-3" >
                <Form.Group as={Col} controlId="formGridEmail" className="saisieGrp">
                    <Form.Label>Matricule fiscale</Form.Label>
                    <Form.Control type="text" value={matrFisc} onChange={(e)=>setMatrFisc(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col}  className="saisieGrp">
                    <Form.Label>N° CNSS</Form.Label>
                    <Form.Control type="text" value={numCNSS} onChange={(e)=>setNumCNSS(e.target.value)}/>
                </Form.Group>
            </Row>
            <Row className="mb-3" >
                <Form.Group as={Col} className="saisieGrp">
                    <Form.Label>Régime fiscale</Form.Label>
                    <Form.Control type="text" value={regimeFisc} onChange={(e)=>setRegimeFisc(e.target.value)}/>
                </Form.Group>

                <Form.Group as={Col}  className="saisieGrp">
                    <Form.Label>N° de R.N.E</Form.Label>
                    <Form.Control type="text" value={numRNE} onChange={(e)=>setNumRNE(e.target.value)}/>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" className="saisieGrp">
                <Form.Label>Adresse de la société</Form.Label>
                <Form.Control value={addrSoc} onChange={(e)=>setAddrSoc(e.target.value)} style={{width:"75%"}} placeholder="1234 Main St" />
            </Form.Group>
            
           
            <Form.Group className="mb-3" className="saisieGrp">
                <Form.Label>Activité</Form.Label>
                <Form.Control  as="textarea" placeholder="Commerece, Service, Industrie...."  style={{width:"75%"}} value={activite} onChange={(e)=>setActivite(e.target.value)}/>
            </Form.Group>
            <Row className="mb-3" >
                <Form.Group as={Col}  className="saisieGrp">
                    <Form.Label>Echéances fiscales</Form.Label>
                    <Form.Control type="date" value={echanceFisc} onChange={(e)=>setEchanceFisc(e.target.value)}/>
                </Form.Group>
                <Form.Group as={Col}  className="saisieGrp">
                    <Form.Label>Echéances de CNSS</Form.Label>
                    <Form.Control type="date" placeholder="Password" value={echeanceCNSS} onChange={(e)=>setEcheanceCNSS(e.target.value)}/>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} className="saisieGrp" >
                    <Form.Label>Nom et Prénom de gérant</Form.Label>
                    <Form.Control value={nomPrenomGerant} onChange={(e)=>setNomPrenomGerant(e.target.value)}/>
                </Form.Group>
                <Form.Group as={Col} className="saisieGrp">
                    <Form.Label>N° de téléphone</Form.Label>
                    <Form.Control value={teleGerant} onChange={(e)=>setTeleGerant(e.target.value)}/>
                </Form.Group>
                <Form.Group as={Col} >
                <Form.Label>Adresse Mail</Form.Label>
                <Form.Control value={emailGerant} onChange={(e)=>setEmailGerant(e.target.value)}/>
                </Form.Group>
            </Row>
            
            <Row className="mb-3" style={{marginTop:"40px"}}>
                <Form.Group as={Col} className="saisieGrp1">
                <Button variant="primary" type="submit" size="lg">
                    Ajouter
                </Button>
                </Form.Group>
                <Form.Group as={Col} className="saisieGrp1">
                <Button variant="primary" type="reset" size="lg" onClick={handleAnnuler}>
                    Annuler
                </Button>
                </Form.Group>
            </Row>
        </Form>
    </div>        
        </Dashboard>
    )

}
export default SaisieClient
