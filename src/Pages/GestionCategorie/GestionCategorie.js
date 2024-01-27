import { faMagnifyingGlass, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form,Modal } from "react-bootstrap";
 import React, { useState } from 'react'
 

 
 
 export default function GestionCategorie() {
  
  const [showCategories, setShowCategories] = useState(false);
  const [showEditModalCategories, setShowEditModalCategories] = useState(false);

  const handleCloseCategories = () => setShowCategories(false);
  const handleshowCategories = () => setShowCategories(true);
  const handleCloseEditCategories = () => setShowEditModalCategories(false);
  const  handleShowEditCategories= () => setShowEditModalCategories(true);
   return (
    <div className='container'>
    <div className='d-flex justify-content-between mt-5'>
      <div><Button variant="primary" onClick={handleshowCategories} className='ms-4'style={{backgroundColor:'#d46f4d', border :'none'}} id='buttonAjouter'>Ajouter une catégorie</Button></div>
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
            
            <th  style={{backgroundColor:'#d46f4d' , color:'#fff'}}>Titre</th>
            <th  style={{backgroundColor:'#d46f4d' , color:'#fff'}}>Description</th>
            <th className='d-flex  justify-content-center ' style={{backgroundColor:'#d46f4d', color:'#fff',marginLeft:'3rem' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className=''>
            <td>R+4</td>
            <td>Maison au bord de la plage</td>
            <td className='d-flex justify-content-evenly'>
              <Button variant="primary" onClick={handleShowEditCategories} style={{backgroundColor:'#fff' , border:'1px solid #d46f4d', color:'#d46f4d'}} id='buttonModifier'>
                <FontAwesomeIcon icon={faPenToSquare} />
              </Button>
              <Button style={{backgroundColor:'#fff' , border:'1px solid #d46f4d', color:'#d46f4d'}}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
              
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>

    {/* modal debut  ajouter maison*/}
    <>
  <Modal show={showCategories} onHide={handleCloseCategories} id='buttonAjouter'>
    <Modal.Header closeButton>
      <Modal.Title>Ajouter Categorie</Modal.Title>
    </Modal.Header>
    <Modal.Body> 
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Titre</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseCategories}>
        Ajouter
      </Button>
      <Button variant="primary" onClick={handleCloseCategories}>
        Fermer
      </Button>
    </Modal.Footer>
  </Modal>
</>
    {/* modal fin ajouter maison */}


    {/* modal debut modifier maison */}
    <Modal show={showEditModalCategories} onHide={handleCloseEditCategories} id='buttonModifier'>
    <Modal.Header closeButton>
      <Modal.Title>Modifier Catégorie</Modal.Title>
    </Modal.Header>
    <Modal.Body> 
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Titre</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseEditCategories}>
        Ajouter
      </Button>
      <Button variant="primary" onClick={handleCloseEditCategories}>
        Fermer
      </Button>
    </Modal.Footer>
  </Modal>
    {/* modal fin modifier maison */}
</div>
   )
 }
 