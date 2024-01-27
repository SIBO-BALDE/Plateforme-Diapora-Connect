
import React, { useState } from 'react'

import Swal from "sweetalert2";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import photo from '../../fichiers/profile.png'
import { Button, Form, Image } from 'react-bootstrap';
import { emailPattern, passwordPattern} from '../../Components/Regex/Regex.js' 
import './Auth.css'; 

export default function Inscription() {
  const [nom,setNom]=useState("");
  const [prenom,setPrenom]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [telephone,setTelephone]=useState("");
  const [passwordConf,setPasswordConf]=useState("");
  // state pour la validation des erreur de formulaire
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  
  // declarer la variable pour permetre la redirection d'ans un autre composant
  const navigate = useNavigate(); 

  const handleSubmit = async (e)=>{
    e.preventDefault();
     try {
        if(nom==='' || prenom==='' || email==='' || password==='' || passwordConf==='' || telephone==='') {
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Vueillez remplir tous les champs",
          });
          return
    
          } else if (!emailPattern.test(email) ) {
            setEmailErr(true); 
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "votre email est invalide",
            });
            return  
            }else if (passwordConf !== password) {
                setPwdError(true); 
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "la confirmation  du mot de pass à échouer",
                });
                return  
                }else{


                    // creer un obect dans la base de donnée
                    alert('cc comment vas tu')

                    setNom("");
                    setPrenom("");
                    setEmail("");
                    setPassword("");
                    setPasswordConf("");
                    setTelephone("");
                    navigate('/connexion');
                }
        
     } catch (error) {   
     }
   }
   const handleCancel = async (e) => {
    Swal.fire({
        icon: "success",
        title: "Bravoo!!",
        text: "Vous avez annuler avec succees",
      });
   }

      
        

  return (
<div className='container  content-flex-signin'>
  <div className='img-content-form'>
    <Image src={photo} alt='' />
  </div>
  <div className='content-left-form'>
    <Form onSubmit={ handleSubmit}>
    <h1 className='text-center'> INSCRIPTION</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" onChange={(e)=>setNom(e.target.value)}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Prenom</Form.Label>
            <Form.Control type="text"  onChange={(e)=>setPrenom(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" onChange={(e)=>setEmail(e.target.value)}   />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label>Mot de pass</Form.Label>
            <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
            <Form.Label> Confirmation  mot de pass </Form.Label>
            <Form.Control type="password" onChange={(e)=>setPasswordConf(e.target.value)}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
            <Form.Label> Télephone </Form.Label>
            <Form.Control type="tel"  onChange={(e)=>setTelephone(e.target.value)}/>
        </Form.Group>
        <div className='btn-content-position'>
        <Button type='submit'  className='btn-colour'>S'inscrire</Button>
        <Button type='submit'  className='btn-colour' onClick={handleCancel}>Annuler</Button>
        </div>
        <Link to={'/connexion'} className='content-link'>Vous avez dejas un? connectez vous</Link>
    </Form>
  </div>
</div>
    
  )
}

