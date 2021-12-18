import {SEARCHCLIENT,ADDNEWCLIENT} from '../Actions/types.js'
import { v4 as uuidv4 } from 'uuid';
let clients = [
    {   id :uuidv4(),
        raisonSocial:"MECOTEK",
        capitalSocial: 12000,
        matFiscal:"455682 P.M.A000",
        addresseSociete:"Rue de republic",
        nCNSS: 58712587,
        regimeFiscal:"reel",
        echanceFiscal:"15/03/2021",
        echanceCNSS:"28/03/2021",
        nRNE:"1234556A",
        activite:"commerce",
        gerant:"ahmed",
        nTeleGerant:55582451,
        mailGerant:"ahmed@yahoo.com",
    },
    {   id :uuidv4(),
        raisonSocial:"MAiLLEOc",
        capitalSocial: 15000,
        matFiscal:"65822 P.M.A000",
        addresseSociete:"Rue de liberté",
        nCNSS:48500500,
        regimeFiscal:"forfaitaire",
        echanceFiscal:"15/03/2020",
        echanceCNSS:"28/03/2021",
        nRNE:"2985556A",
        activite:"industriel",
        gerant:"Yassine",
        nTeleGerant:55892411,
        mailGerant:"Yassine@yahoo.com",
    },
    {   id :uuidv4(),
        raisonSocial:"ALLUCO",
        capitalSocial: 500000,
        matFiscal:"585698 P.M.A000",
        addresseSociete:"Rue de Moknine",
        nCNSS:48500500,
        regimeFiscal:"réel",
        echanceFiscal:"15/03/2020",
        echanceCNSS:"28/03/2021",
        nRNE:"58686366A",
        activite:"industriel",
        gerant:"Sihem Syadia",
        nTeleGerant:58742588,
        mailGerant:"Alluco@yahoo.com",
    },

]
const clientReducer=(state=clients,action)=>{
    switch(action.type){
        case ADDNEWCLIENT:
            return state.concat(action.payload)

        default:
            return state
    }
        
   
}
export default clientReducer
