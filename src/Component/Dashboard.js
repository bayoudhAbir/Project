import Image from 'react-bootstrap/Image'
import Sidebar from './DahboardSidebar';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Dashboard=({children})=>
{  const [tab,setTab]=useState();
    const users = useSelector(state=>state.users)
    let navigate = useNavigate();
    useEffect(() => {
      const results =users.find(el=>el.adresseMail===localStorage.getItem('email')&&el.motdepasse===localStorage.getItem('paswrd'));
      setTab(results);
      console.log(results)
      },[users]);
  const signOut=()=>{
    localStorage.setItem('email','');
    localStorage.setItem('paswrd','');
    navigate('/')
  }
  const homePage=()=>{
    navigate('/dashboard/content')
  }
      if(tab){
    return (
        <div>
            <div style={{width:"100%",backgroundColor:"honeydew",marginLeft:"222px",position:"fixed", marginTop:"-56px", height:"5%"}}>
                
              <Image src={tab.image}  title={tab.prenom} style={{width:"2%", float:"left", marginLeft:'1200px', marginTop:'5px', marginInlineEnd:'8px'}} roundedCircle/> <Image src="/Images/home.jpg" title="Home" style={{width:"2%", float:"left",marginTop:'5px'}} roundedCircle onClick={homePage}/> <Image src="/Images/logout.png" title="sign Out" style={{width:"2%", float:"left",marginTop:'5px'}} roundedCircle onClick={signOut}/>
                
            </div>
             <div style={{width:"14%", height:"100%",backgroundColor:'#333',position:"fixed" ,marginTop:"-56px"}}> 
                <div >
                    <Image src={tab.image} style={{width:"30%", marginLeft:"70px", marginTop:"10px"}} roundedCircle/>
                    </div>
                    <div >
                    <label style={{marginLeft:"60px", color:"white"}}>{tab.prenom} {tab.nom} </label>
                    </div>
                    <hr style={{width:"100%", color:'white'}}></hr>
                    <Sidebar/>
                </div>
                <div style={{width:"100%",marginLeft:"223px", backgroundColor:"white", position:"static", marginTop:"56px"} }  > {children} </div>
        </div>
    );
      }else return null
} 
export default Dashboard
