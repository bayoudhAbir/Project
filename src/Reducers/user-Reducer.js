import {ADDNEWUSER} from '../Actions/types.js'
import { v4 as uuidv4 } from 'uuid';
 let users=[
    {   id :uuidv4(),
        prenom:"salah",
        nom:"ben ali",
        adresse:"Rue Erriadh",
        tele:50258478,
        genre:1,
        adresseMail:"salah@yahoo.com",
        motdepasse:"123",
        image:"/Images/salah.jpg"       
    },
    {   id :uuidv4(),
        prenom:"abir",
        nom:"bayoudh",
        adresse:"Rue Erriadh",
        tele:50258478,
        genre:1,
        adresseMail:"abir@yahoo.com",
        motdepasse:"sah1980",
        image:"/Images/me.jpg"   
    }
 ];

const userReducer=(state=users,action)=>{
    switch(action.type){          
             
        case ADDNEWUSER:
            return state.concat(action.payload)  
        default:
            return state
    } 
}
export default userReducer