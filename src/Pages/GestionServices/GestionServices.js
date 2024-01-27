import { faEye, faMagnifyingGlass, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Image, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
 import React, { useState } from 'react'
 import profileService from '../../fichiers/S1 (1).png'
 
 export default function GestionServices() {
  
  const [showServices, setShowServices] = useState(false);
  const [showEditModalServices, setShowEditModalServices] = useState(false);

  const handleCloseServices = () => setShowServices(false);
  const handleshowServices = () => setShowServices(true);
  const handleCloseEditServices = () => setShowEditModalServices(false);
  const  handleShowEditServices= () => setShowEditModalServices(true);
   return (
    <div className='container'>
    <div className='d-flex justify-content-between mt-5'>
      <div><Button variant="primary" onClick={handleshowServices} className='ms-4'style={{backgroundColor:'#d46f4d', border :'none'}} id='buttonAjouter'>Ajouter un service</Button></div>
      <div className='flex-grow-1 d-flex justify-content-end '>
        <div className="champsRecherche mt-2 mb-3 w-50">
          <Form>
            <div
              className="input-group flex-nowrap "
              style={{borderColor:'#d46f4d'}}
            >
              <Form.Control
                type="search"
                className="form-control w-50   "
                placeholder="Rechercher un utilisateur"
                aria-label="user"
                aria-describedby="addon-wrapping"
              />
              <span
                className="input-group-text text-white me-4"
                id="addon-wrapping"
                style={{backgroundColor:'#d46f4d'}}
                ><FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
            </div>
          </Form>
        </div>
      </div>
    </div>
    <div className='mt-4 ms-3  me-3'>
      <table className="table border  border-1">
        <thead className="" id='hearder-color' style={{backgroundColor:'#d46f4d'}}>
         <tr >
            <th  style={{backgroundColor:'#d46f4d' ,color:'#fff'}} >Image</th>
            <th  style={{backgroundColor:'#d46f4d' , color:'#fff'}}>Titre</th>
            <th className='d-flex  justify-content-center ' style={{backgroundColor:'#d46f4d', color:'#fff',marginLeft:'3rem' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className=''>
            <td>
            <Image src={profileService} className="img-profile-tab-maison" id='img-profile-tab-maison' 
              style={{height: "30px", width: "30px", borderRadius:"50%"}} />
            </td>
            <td>Construction de maison</td>
            <td className='d-flex justify-content-evenly'>
              <Button variant="primary" onClick={handleShowEditServices} style={{backgroundColor:'#fff' , border:'1px solid #d46f4d', color:'#d46f4d'}} id='buttonModifier'>
                <FontAwesomeIcon icon={faPenToSquare} />
              </Button>
              <Button style={{backgroundColor:'#fff' , border:'1px solid #d46f4d', color:'#d46f4d'}}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
              <Button style={{backgroundColor:'#fff' , border:'1px solid #d46f4d', color:'#d46f4d'}}>
                <Link to={'/detailterrain'} style={{color:'#d46f4d'}}><FontAwesomeIcon icon={faEye} /></Link>
              </Button>
            </td>
          </tr>
          <tr className=''>
            <td>
            <Image src={profileService} className="img-profile-tab-maison" id='img-profile-tab-maison' 
              style={{height: "30px", width: "30px", borderRadius:"50%"}} />
            </td>
            <td>Plan structural</td>
            <td className='d-flex justify-content-evenly'>
              <Button variant="primary" onClick={handleShowEditServices} style={{backgroundColor:'#fff' , border:'1px solid #d46f4d', color:'#d46f4d'}} id='buttonModifier'>
                <FontAwesomeIcon icon={faPenToSquare} />
              </Button>
              <Button style={{backgroundColor:'#fff' , border:'1px solid #d46f4d', color:'#d46f4d'}}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
              <Button style={{backgroundColor:'#fff' , border:'1px solid #d46f4d', color:'#d46f4d'}}>
                <Link to={'/detailservices'} style={{color:'#d46f4d'}}><FontAwesomeIcon icon={faEye} /></Link>
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* modal debut  ajouter maison*/}
    <>
  <Modal show={showServices} onHide={handleCloseServices} id='buttonAjouter'>
    <Modal.Header closeButton>
      <Modal.Title>Ajouter Service</Modal.Title>
    </Modal.Header>
    <Modal.Body> 
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Titre</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseServices}>
        Ajouter
      </Button>
      <Button variant="primary" onClick={handleCloseServices}>
        Fermer
      </Button>
    </Modal.Footer>
  </Modal>
</>
    {/* modal fin ajouter maison */}


    {/* modal debut modifier maison */}
    <Modal show={showEditModalServices} onHide={handleCloseEditServices} id='buttonModifier'>
    <Modal.Header closeButton>
      <Modal.Title>Modifier Service</Modal.Title>
    </Modal.Header>
    <Modal.Body> 
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Titre</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseEditServices}>
        Ajouter
      </Button>
      <Button variant="primary" onClick={handleCloseEditServices}>
        Fermer
      </Button>
    </Modal.Footer>
  </Modal>
    {/* modal fin modifier maison */}
</div>
   )
 }
 