import React, { useState } from 'react'
import { Button, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ButtonLogin({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      
      onLogin();

      navigate("/connexion");
    } catch (error) {
      console.log(error.message, 'voici lerreur');
    }
  };
  
       
      
  return (
    <div>
        <div className="d-flex me-3 " id='btnpabiernav'>
           
            <Button className=' btn btn-connection' onClick={handleLogin} ><Nav.Link href='/connexion' >Connexion</Nav.Link></Button>
          </div>
    </div>
  )
}
