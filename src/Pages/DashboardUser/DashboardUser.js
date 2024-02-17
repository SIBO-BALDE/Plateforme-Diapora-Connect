import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, Image, Modal } from 'react-bootstrap';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import "./DashboardUser.css";;

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


      {/* nouveau */}
      <div className="page-content page-container w-100 " id="page-content">
        <div className="padding w-100 ">
        <div className="row container d-flex justify-content-center w-100 ">
          <div className="">
            {/* col-xl-6 col-md-12 en haut */}
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  {/* premier */}
                    <div className="col-sm-4 bg-c-lite-green user-profile">
                        <div className="card-block text-center text-white">
                            <div className="m-b-25">
                            {utilisateur && utilisateur.image && 
                              <Image src={`http://localhost:8000/storage/${utilisateur.image}`}  style={{borderRadius:'50%', border:'10px solid #fff', width:'120px',height:'120px'}} className="img-radius" alt="User-Profile-Image" />
                            }
                            </div>
                            {utilisateur && utilisateur.prenom &&
                            <h6 class="f-w-600">{utilisateur.prenom} {utilisateur.nom}</h6>
                          }
                            <p>Web Designer</p>
                            <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                        </div>
                    </div>

                    <div className="col-sm-8">
                      <div className="card-block">
                          <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                          <div className="row">
                              <div className="col-sm-6">
                                  <p className="m-b-10 f-w-600">Email</p>
                                  {utilisateur && utilisateur.email &&
                                  <h6 className="text-muted f-w-400">{utilisateur.email}</h6>
                                }
                              </div>
                              <div className="col-sm-6">
                                  <p className="m-b-10 f-w-600">Phone</p>
                                  {utilisateur && utilisateur.telephone &&
                                  <h6 className="text-muted f-w-400">{utilisateur.telephone} </h6>
                                }
                              </div>
                          </div>
                          <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                          <div className="row">
                              <div clasNames="col-sm-6">
                                  <p className="m-b-10 f-w-600">Recent</p>
                                  <h6 className="text-muted f-w-400">Sam Disuja</h6>
                              </div>
                              <div className="col-sm-6">
                                  <p className="m-b-10 f-w-600">Most Viewed</p>
                                  <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                              </div>
                          </div>
                          <ul className="social-link list-unstyled m-t-40 m-b-10">
                              <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                              <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                              <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                          </ul>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
        </div>
      </div>
  </div>
  
  );
}


