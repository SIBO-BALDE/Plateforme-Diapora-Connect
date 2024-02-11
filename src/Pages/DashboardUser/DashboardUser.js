import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, Image, Modal } from 'react-bootstrap';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function DashboardUser() {
  const [utilisateur, setUtilisateur] = useState(null);

  // pour le modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // Récupérez le token et le role  du localStorage
       const token = localStorage.getItem('tokencle')
       const role = localStorage.getItem("rolecle");;

    // Si le token ou le role  existe, faites une requête à l'API pour récupérer les informations de l'utilisateur 
    if (token || role) {
        axios.post('http://localhost:8000/api/auth/me', {}, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
        })

      
      .then(response => {
        const userData = response.data; // Adapté selon la structure de votre réponse API
        setUtilisateur(userData);
        console.log(userData, 'userdATA Dashboard')
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des informations de l\'utilisateur :', error);
      });
    }
  }, []);

  return (
    <div>
    <div className='cardtemoinhom'>
      <div className='d-flex justify-content-end '><h5><Link to={'/'} style={{textDecoration:'none', color:'#D46F4D'}}>Accueil <FontAwesomeIcon icon={faHome} /></Link> </h5></div>
      <div className='cardtemoinhome1'>
        {utilisateur && utilisateur.image && <Image 
        src={`http://localhost:8000/storage/${utilisateur.image}`} style={{borderRadius:'50%', border:'10px solid #fff'}}
        
        />}
      </div>
      <div className='cardtemoinhome2'>
        {utilisateur && (
          <>
            <h6 className='text-center title-temoinhome text-light'>{utilisateur.prenom} {utilisateur.nom}</h6>
            <p className='text-center  text-light'>{utilisateur.email} </p>
            <p className='text-center  text-light'>{utilisateur.telephone} </p>

            <p className='text-center text-light paratextcontenthome'>
              <span></span> <br />
              
            </p>
          </>
        )}
        
        {utilisateur && <div className='d-flex justify-content-center '> 
        <Button style={{backgroundColor:'#fff', color:'#D46F4D', border:'none'}}  variant="primary" onClick={handleShow}>Modifier mon profil</Button>
         </div>}
      </div>
    </div>
      


      {/* modal modifier user */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier votre profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <div className='d-flex justify-content-around '>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Prenom</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </div>
          <div className='d-flex justify-content-around '>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Telephone</Form.Label>
              <Form.Control type="tel" placeholder="" />
            </Form.Group>  
          </div>
          {/* <div className='d-flex justify-content-around '> */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>PassWord</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Profile</Form.Label>
              <Form.Control type="file" placeholder="" />
            </Form.Group>
          {/* </div> */}
            
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Fermer
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Modifier
          </Button>
        </Modal.Footer>
      </Modal>
  </div>
  
  );
}


