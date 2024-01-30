import { faMagnifyingGlass, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form,Modal } from "react-bootstrap";
 import React, { useEffect, useState } from 'react'
import axios from "axios";
import Swal from "sweetalert2";
 

 
 
 export default function GestionCategorie() {
  
  const [showCategories, setShowCategories] = useState(false);
  const [showEditModalCategories, setShowEditModalCategories] = useState(false);

  const handleCloseCategories = () => setShowCategories(false);
  const handleshowCategories = () => setShowCategories(true);
  const handleCloseEditCategories = () => setShowEditModalCategories(false);

  // Gestionnaire de clic pour le bouton de modification
  const  handleShowEditCategories= (categorie) =>{
    setEditCategoryData({
      id: categorie.id,
      titre: categorie.titre,
      description: categorie.description,
    });
    setShowEditModalCategories(true);
  };


// etat pour ajout categorie
const [categoryData, setCategoryData] = useState({
  titre: '',
  description: '',
});

//  etat pour modifier categorie
const [editCategoryData, setEditCategoryData] = useState({
  id: null,
  titre: '',
  description: '',
});
 
// tableau ou stocker la liste des categories
const [categories, setCategories] = useState([]); 

// function pour ajouter une categorie
const ajouterCategory = async () => {
  try {
    const response = await axios.post('http://localhost:8000/api/categorie/create', categoryData);

    // Vérifiez si la requête a réussi
    if (response.status === 200) {
       // Ajoutez la nouvelle maison à la liste existante
       setCategories([...categories, response.data]);
      // Réinitialisez les valeurs du formulaire après avoir ajouté la maison
      setCategoryData({
        titre: '',
        description: '',
      });
      Swal.fire({
        icon: 'success',
        title: 'Succès!',
        text: 'categorie ajouter avec succée!',
      });
      // Fermez le modal 
      handleCloseCategories();
    } else {
      
      console.error('Erreur dans lajout de maison');
    }
  } catch (error) {
    // Gestion des erreurs Axios
    console.error('Erreur Axios:', error);
  }

}
//  Lister les categories
useEffect(() => {
  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/categorie/liste');
      // setCategories(response.categories);
      setCategories(response.data.categories);

      console.log(categories)
    } catch (error) {
      console.error('Erreur lors de la récupération des catégories:', error);
    }
  };
  fetchCategories();
}, []);

// Fonction pour mettre à jour une catégorie
const modifierCategory = async () => {
  try {
    const response = await axios.put(`http://localhost:8000/api/categorie/edit/${editCategoryData.id}`, editCategoryData);

    if (response.status === 200) {
      const updatedCategories = categories.map((category) =>
      category.id === editCategoryData.id ? response.data.categorie : category
);

      setCategories(updatedCategories);
      handleCloseEditCategories();
      Swal.fire({
        icon: 'success',
        title: 'Succès!',
        text: 'Catégorie mise à jour avec succès!',
      });
    } else {
      console.error('erreur lors de la modification de la catégorie');
    }
  } catch (error) {
    console.error('une erreur  Axios:', error);
  }
};

// Function pour supprimer une catégorie
const supprimerCategory =  async (id) =>{
  try {
    const response = await axios.delete(`http://localhost:8000/api/categorie/supprimer/${id}`);
    if (response.status === 200) {
      // Filtrez la liste des catégories pour exclure celle qui vient d'être supprimée
      const updatedCategories = categories.filter((category) => category.id !== id);

      setCategories(updatedCategories);
      Swal.fire({
        icon: 'success',
        title: 'Succès!',
        text: 'Catégorie supprimée avec succès!',
      });
    } else {
      console.error('Erreur lors de la suppression de la catégorie');
    }
    
  } catch (error) {
    
  }

}





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
        { categories.map((categorie) => (
          <tr key={categorie.id}>
            <td style={{color:'black'}}>{categorie.titre}</td>
            <td style={{color:'black'}}>{categorie.description}</td>
            <td className='d-flex justify-content-evenly'>
              <Button
                variant="primary"
                onClick={() => handleShowEditCategories(categorie)}
                style={{ backgroundColor: '#fff', border: '1px solid #d46f4d', color: '#d46f4d' }}
                id='buttonModifier'
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </Button>
              <Button 
              style={{ backgroundColor: '#fff', border: '1px solid #d46f4d', color: '#d46f4d' }}
              onClick={() => supprimerCategory(categorie.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </td>
          </tr>
        ))}
          
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
          <Form.Control 
           value={categoryData.titre}
           onChange={(e) => setCategoryData({ ...categoryData, titre: e.target.value })} 
          type="text" placeholder="" 
          />
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} 
           value={categoryData.description}
           onChange={(e) => setCategoryData({ ...categoryData, description: e.target.value })} 

          />
        </Form.Group>
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={ajouterCategory}>
        Ajouter
      </Button>
      <Button variant="primary" onClick={handleCloseCategories}>
        Fermer
      </Button>
    </Modal.Footer>
  </Modal>
</>
    {/* modal fin ajouter maison */}


    {/* modal debut modifier categorie */}
    <Modal show={showEditModalCategories} onHide={handleCloseEditCategories} id='buttonModifier'>
    <Modal.Header closeButton>
      <Modal.Title>Modifier Catégorie</Modal.Title>
    </Modal.Header>
    <Modal.Body> 
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Titre</Form.Label>
          <Form.Control 
          type="text" placeholder=""
          value={editCategoryData.titre}
          onChange={(e) => setEditCategoryData({ ...editCategoryData, titre: e.target.value })}
           />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control 
          as="textarea" rows={3}
          value={editCategoryData.description}
          onChange={(e) => setEditCategoryData({ ...editCategoryData, description: e.target.value })}

          />
        </Form.Group>
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={ modifierCategory}>
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
 