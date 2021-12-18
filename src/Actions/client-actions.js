import { SEARCHCLIENT,ADDNEWCLIENT } from "./types"

export const verify=(SEARCH)=>{
    return{
        type:SEARCHCLIENT,
        payload:SEARCH
    };
};

export const ADDNew=(newClient)=>{
    return{
        type:ADDNEWCLIENT,
        payload:newClient
    }
}