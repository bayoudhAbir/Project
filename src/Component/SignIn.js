import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
const SignIn=()=>{
  const navigate = useNavigate();
    const [email,setEmail]= useState();
    const [pasw,setPasw]=useState();
    
 const handleFormSubmit = () => {
        localStorage.setItem('email', email);
        localStorage.setItem('paswrd',pasw);
        navigate('/dashboard/content')
      };

return(
    <div className="formContainer">
            <Form className="form" onSubmit={handleFormSubmit}>  
                <Form.Label className="title">Se connecter</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="formLabel"> Adresse E-mail </Form.Label>
                    <Form.Control className="formControl" type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="formLabel1">Mot de passe</Form.Label>
                    <Form.Control className="formControl"  type="password" placeholder="Password" value={pasw} onChange={(e)=>setPasw(e.target.value)}/>
                </Form.Group>
                <Button  className="but"  type="submit" size="lg" >
                    Connexion 
                </Button>
                <Form.Group className="mb-3">
                <Form.Label className="formLabel2">vous n'avez pas un compte ? <Link to="/Registration">créer un</Link> </Form.Label>
                 </Form.Group>
                </Form>
       
    </div>
);
}
export default SignIn
