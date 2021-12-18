import { ADDNEWUSER, VERIFY } from "./types"

export const verify=(testing)=>{
    return{
        type:VERIFY,
    };
};

export const addNewUser=(newUser)=>{
    return{
        type:ADDNEWUSER,
        payload:newUser
    };
};