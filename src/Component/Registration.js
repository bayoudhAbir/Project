import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addNewUser } from '../Actions/user-actions';
const Registration=()=>{
    const users = useSelector(state=>state.users)
    console.log("users",users)
    const dispatch= useDispatch();
    const [prenom,setPrenom]=useState();
    const [nom,setNom]=useState();
    const [adresse,setAdresse]=useState();
    const [tele,setTele]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [dateNaissance,setDateNaissance]=useState();
    const [genre,SetGenre]=useState();
    const handleGenre=(e)=>{
        e.preventDefault();
        (e.target.value===1)?SetGenre("Homme"):SetGenre("Femme")
    }
    const newUser={
        prenom,
        nom,
        adresse,
        tele,
        email,
        password,
        dateNaissance,
        genre,
    }
    return(
        <div style={{width:"50%", marginLeft:"500px", marginTop:"50px"}}>
        <Form  className="formRegis">
            <Form.Group className="regis" >
            <Form.Label className="lab"> Prénom</Form.Label>
            <Form.Control type="text" value={prenom} onChange={(e)=>setPrenom(e.target.value)}/>
            </Form.Group>
            <Form.Group className="regis">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" value={nom} onChange={(e)=>setNom(e.target.value)}/>
            </Form.Group>
            <Form.Group className="regis">
                <Form.Label> Adresse</Form.Label>
                <Form.Control type="text" value={adresse} onChange={(e)=>setAdresse(e.target.value)}/>
            </Form.Group>
            <Form.Group className="regis">
                <Form.Label>N° téléphone</Form.Label>
                <Form.Control type="tele" value={tele} onChange={(e)=>setTele(e.target.value)} />
            </Form.Group>
          <Form.Group className="regis" >
                <Form.Label>Date de naissance</Form.Label>
                <Form.Control type="date"  value={dateNaissance} onChange={(e)=>setDateNaissance(e.target.value)} />
            </Form.Group>
            <Form.Group className="regis">
                <Form.Label>Genre</Form.Label>
            <Form.Select aria-label="Default select example" onChange={handleGenre}>
                <option>Choisir un genre</option>
                <option value="1">Homme</option>
                <option value="2">Femme</option>
            </Form.Select>
            </Form.Group>
            <Form.Group className="regis" >
                <Form.Label>Adresse Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="regis">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <Button className="bt" variant="primary" type="submit" size="lg" onClick={()=>dispatch(addNewUser(newUser))}> 
                    S'inscrire
                </Button>
            </Form.Group>
                   
        </Form>
        </div>

    );
}
export default Registration;