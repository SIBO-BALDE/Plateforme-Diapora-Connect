import React, { useState } from 'react'
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import photo from '../../fichiers/profile.png'

import { Button, Form, Image } from 'react-bootstrap';
import './Auth.css'; 


export default function Connexion() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e)=>{
        alert('cc')
        navigate('/')
  }

  return (
<div className='container  content-flex-signin'>
  <div className='img-content-form'>
    <Image src={photo} alt='' id='image-form'/>
  </div>
  <div className='content-left-form'>
    <Form onSubmit={ handleSubmit}>
    <h1 className='text-center'> CONNEXION</h1>
        

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" onChange={(e)=>setEmail(e.target.value)}   />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label>Mot de pass</Form.Label>
            <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)}  />
        </Form.Group>

       
        <div className='btn-content-position'>
        <Button type='submit'  className='btn-colour'>Se connecter</Button>
        {/* <Button type='submit'  className='btn-colour' onClick={handleCancel}>Annuler</Button> */}
        </div>
        <Link to={'/inscription'} className='content-link'>Vous avez dejas un? connectez vous</Link>
    </Form>
  </div>
</div>
  )
}
