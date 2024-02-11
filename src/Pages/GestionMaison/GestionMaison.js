import {
  faEye,
  faMagnifyingGlass,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Pagination from "../../Components/Pagination/Pagination";

export default function GestionMaison({id}) {
  // pour le modal debut
  // const [show, setShow] = useState(false);
  const [showMaison, setshowMaison] = useState(false);
  const [showEditModalMaisons, setShowEditModalMaisons] = useState(false);
  // const handleCloseEditMaison = () => setShowEditModalMaisons(false);

  // const handleClose = () => setshowMaison(false);
  // const handleShow = () => setshowMaison(true);
  const handleCloseEdit = () => setshowMaison(false);
  const handleShowEdit = () => setshowMaison(true);
  const handleCloseEditMaisons = () => setShowEditModalMaisons(false);

   // tableau ou stocker la liste des maison
   const [maisons, setMaisons] = useState([]);

   const [newFile, setNewFile] = useState('');

  //  state pour liste les categorie 
  const [categories, setCategories] = useState([]);

  //  pour le champ recherche
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredMaisons = maisons.filter((maison) =>
  maison && maison.addresse && maison.addresse.toLowerCase().includes(searchValue.toLowerCase())
  // service && service.titre && service.titre
  // console.log(maison, 'maison clg')
  );
  const displayMaisons = searchValue === '' ? maisons : filteredMaisons;



  // etat pour ajout maison
  const [maisonData, setMaisonData] = useState({
    addresse: "",
    superficie: "",
    prix: "",
    categories_id: "",
    image: "",
    annee_construction: "",
    description: "",
  });

  //  etat pour modifier categorie
  const [editMaisonData, setEditMaisonData] = useState({
    id: null,
    addresse: "",
    superficie: "",
    prix: "",
    categories_id: "",
    image: null,
    annee_construction: "",
    description: "",
  });

  const handleFileChange = (file) => {
    setNewFile(file);
  };
  

  // etat pour detail maison
  // const [detailMaison, setDetailMaison] = useState({})

  // Gestionnaire de clic pour le bouton de modification
  // const handleShowEditMaisons = (maison) => {
  //   setEditMaisonData({
  //     id: maison.id,
  //     addresse: maison.addresse,
  //     superficie: maison.superficie,
  //     prix: maison.prix,
  //     categories_id: maison.categories_id,
  //     image: maison.image,
  //     annee_construction: maison.annee_construction,
  //     description: maison.description,
  //   });
  //   setShowEditModalMaisons(true);
  // };
  const handleShowEditMaisons = (maison) => {
    // console.log("categories_id:", maison.categories_id);
    if  (maison && maison.categories_id) {
      setEditMaisonData({
        id: maison.id,
        addresse: maison.addresse,
        superficie: maison.superficie,
        prix: maison.prix,
        categories_id: maison.categories_id,
        image: maison.image,
        annee_construction: maison.annee_construction,
        description: maison.description,
      });
      setShowEditModalMaisons(true);
      // console.log(maison.categories_id, 'maison.categories_id onclick')
    } else {
      console.error("Catégorie non définie pour la maison à modifier.");
      // Autres actions nécessaires en cas d'erreur...
    }
    
  };
  


  // function pour ajouter une maison
  // const ajouterMaison = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8000/api/maison/create",
  //       maisonData
  //     );

  //     // Vérifiez si la requête a réussi
  //     if (response.status === 200) {
  //       // Ajoutez la nouvelle maison à la liste existante
  //       setMaisons([...maisons, response.data]);

  //       // Réinitialisez les valeurs du formulaire après avoir ajouté la maison
  //       setMaisonData({
  //         addresse: "",
  //         superficie: "",
  //         prix: "",
  //         categories_id: "",
  //         image: "",
  //         annee_construction: "",
  //         description: "",
  //       });

  //       Swal.fire({
  //         icon: "success",
  //         title: "Succès!",
  //         text: "Maison ajouté avec succès!",
  //       });
  //       // fetchMaison();
  //       // Fermez le modal ou effectuez d'autres actions nécessaires après l'ajout réussi
  //       handleCloseEdit();
  //       fetchMaison();
  //     } else {
  //       // Gestion d'erreurs ou affichage de messages d'erreur
  //       console.error("Erreur dans lajout de maison");
  //     }
  //   } catch (error) {
  //     // Gestion des erreurs Axios
  //     console.error("Erreur Axios:", error);
  //   }
  // };
  const ajouterMaison = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('addresse', maisonData.addresse);
      formData.append('superficie', maisonData.superficie);
      formData.append('prix', maisonData.prix);
      formData.append('categories_id', maisonData.categories_id);
      formData.append('image', maisonData.image);
      formData.append('annee_construction', maisonData.annee_construction);
      formData.append('description', maisonData.description);
    // console.log(formData, 'formData maison')
      const response = await axios.post(
        "http://localhost:8000/api/maison/create",
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
  
      if (response.status === 200) {
        setMaisons([...maisons, response.data]);
        setMaisonData({
          addresse: "",
          superficie: "",
          prix: "",
          categories_id: "",
          image: "",
          annee_construction: "",
          description: "",
        });
  
        Swal.fire({
          icon: "success",
          title: "Succès!",
          text: "Maison ajoutée avec succès!",
        });
  
        handleCloseEdit();
        fetchMaison();
      } else {
        console.error("Erreur dans l'ajout de la maison");
      }
    } catch (error) {
      console.error("Erreur Axios:", error);
    }
  };
  

  // function pour lister les maison
  const fetchMaison = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/maison/liste"
      );
      // console.log(response, "response");
      setMaisons(response.data.maison);

      // console.log(maison, "liste maison");
    } catch (error) {
      console.error("Erreur lors de la récupération des maisons:", error);
    }
  };

  // recuperer la liste des maisons
  useEffect(() => {
    fetchMaison();
  }, []);


  // recuperer les categorie
  useEffect(() => {
    // Effectuer une requête pour récupérer la liste des catégories depuis le backend
    const RecupererCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/categorie/liste"
        );
        // console.log(response, "les respones");
        setCategories(response.data.categories);
      } catch (error) {
        // console.error("Erreur lors de la récupération des catégories:", error);
      }
    };
    RecupererCategories();
  }, []);


  // Modifier maison
  // const modifierMaison = async (id) => {
  //   try {
  //     if (!editMaisonData.image) {
  //       // Gérer le cas où l'image n'est pas définie
  //       console.error("L'image n'est pas définie.");
  //       return;
  //     }
  //     const response = await axios.put(
  //       `http://localhost:8000/api/maison/edit/${editMaisonData.id}`,
  //       editMaisonData
  //     );

  //     if (response.status === 200) {
  //       const updatedMaisons = maisons.map((maison) =>
  //         maison.id === editMaisonData.id ? response.data.maison : maison
  //       );

  //       setMaisons(updatedMaisons);
  //       handleCloseEditMaisons();
  //       Swal.fire({
  //         icon: "success",
  //         title: "Succès!",
  //         text: "Catégorie mise à jour avec succès!",
  //       });
  //       // handleShowEditMaisons();
  //     } else {
  //       console.error("erreur lors de la modification de la catégorie");
  //     }
  //   } catch (error) {
  //     console.error("une erreur  Axios:", error);
  //   }
  // };
  // Modifier maison
const modifierMaison = async (id) => {
  // console.log(editMaisonData.image, 'valeur de l\'image avant la requête');
  // console.log('Valeur de categories_id avant la requête:', editMaisonData.categories_id);
  try {
    // Créez un objet FormData pour l'envoi de la requête
    const formData = new FormData();
    formData.append('id', editMaisonData.id);
    formData.append('addresse', editMaisonData.addresse);
    formData.append('superficie', editMaisonData.superficie);
    formData.append('prix', editMaisonData.prix);
    formData.append('categories_id', editMaisonData.categories_id);
    console.log(' avant categories_id', editMaisonData.categories_id)
    if (newFile instanceof File) {
      formData.append('image', newFile);
    }else{
      formData.append('image', editMaisonData.image);

    }
    // console.log('Données avant la requête:', formData);

    formData.append('annee_construction', editMaisonData.annee_construction);
    formData.append('description', editMaisonData.description);
    // console.log(addresse, 'address')

    const response = await axios.post(
      `http://localhost:8000/api/maison/edit/${editMaisonData.id}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    // console.log('Réponse du serveur après mise à jour :', response.data);
    // console.log('Valeur de categories_id après la requête (côté client) :', response.data.maison.categories_id);


    if (response.status === 200) {
      const updatedMaisons = maisons.map((maison) =>
        maison.id === editMaisonData.id ? response.data.maison : maison
      );
      // console.log('updatedMaisons:', updatedMaisons);

      setMaisons(updatedMaisons);
      setEditMaisonData(response.data.maison);
      handleCloseEditMaisons();
      Swal.fire({
        icon: "success",
        title: "Succès!",
        text: "Maison mise à jour avec succès!",
      });
      // console.log('Valeur de categories_id après la requête:', editMaisonData.categories_id);
    } else {
      console.error("Erreur lors de la modification de la maison");
    }

    
  } catch (error) {
    console.error("Erreur Axios:", error);
  }
  
};


// const handleImageChange = (e) => {
//   const file = e.target.files[0];
//   // console.log(file, 'contenue image')
//   console.log(file, 'contenu de l\'image');
//   setEditMaisonData({
//     ...editMaisonData,
//     image: file,
//   });
// };


  // Function Supprimer maison
 
  const supprimerMaison =  async (id) =>{
    try {
      const response = await axios.delete(`http://localhost:8000/api/maison/supprimer/${id}`);
      if (response.status === 200) {
        // Filtrez la liste des catégories pour exclure celle qui vient d'être supprimée
        const updatedMaisons = maisons.filter((maison) => maison.id !== id);
  
        setCategories(updatedMaisons);
        Swal.fire({
          icon: 'success',
          title: 'Succès!',
          text: 'Catégorie supprimée avec succès!',
        });
        fetchMaison();
      } else {
        console.error('Erreur lors de la suppression de la catégorie');
      }
      
    } catch (error) {
      
    }
  
  }

   // pour la pagination
   const [currentPage, setCurrentPage] = useState(1);
   const maisonsParPage = 6;
   // pagination
const indexOfLastMaison = currentPage * maisonsParPage;
const indexOfFirstMaison = indexOfLastMaison - maisonsParPage;
const currentMaisons = filteredMaisons.slice(indexOfFirstMaison, indexOfLastMaison);

const totalPaginationPages = Math.ceil(maisons.length / maisonsParPage);

  
 

  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-5">
        <div>
          <Button
            variant="primary"
            onClick={handleShowEdit}
            className="ms-4"
            style={{ backgroundColor: "#d46f4d", border: "none" }}
            id="buttonAjouter"
          >
            Ajouter un maison
          </Button>
        </div>
        <div className="flex-grow-1 d-flex justify-content-end ">
          <div className="champsRecherche mt-2 mb-3 w-50">
            <Form>
              <div
                className="input-group flex-nowrap "
                style={{ borderColor: "#d46f4d" }}
              >
                <Form.Control
                  type="search"
                  className="form-control w-50   "
                  placeholder="Rechercher un utilisateur"
                  aria-label="user"
                  aria-describedby="addon-wrapping"
                  value={searchValue}
                  onChange={handleSearchChange}
                />
                <span
                  className="input-group-text text-white me-4"
                  id="addon-wrapping"
                  style={{ backgroundColor: "#d46f4d" }}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className="mt-4 ms-3  me-3">
        <table className="table border  border-1">
          <thead
            className=""
            id="hearder-color"
            style={{ backgroundColor: "#d46f4d" }}
          >
            <tr>
              <th style={{ backgroundColor: "#d46f4d", color: "#fff" }}>
                Image
              </th>
              <th style={{ backgroundColor: "#d46f4d", color: "#fff" }}>
                Adress
              </th>
              <th style={{ backgroundColor: "#d46f4d", color: "#fff" }}>
                Superficie
              </th>
              <th style={{ backgroundColor: "#d46f4d", color: "#fff" }}>
                Prix
              </th>
              <th style={{ backgroundColor: "#d46f4d", color: "#fff" }}>
                Categorie
              </th>
              <th
                className="d-flex  justify-content-center "
                style={{
                  backgroundColor: "#d46f4d",
                  color: "#fff",
                  marginLeft: "3rem",
                }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentMaisons && currentMaisons.map((maison) => {
                return (
                <tr key={maison.id}>
                  {maison.image && (
                  <td>
                    <Image
                      // src={maison.image}
                      src={`http://localhost:8000/storage/${maison.image}`} 
                      alt=""
                      className="img-profile-tab-maison"
                      id="img-profile-tab-maison"
                      style={{
                        height: "30px",
                        width: "30px",
                        borderRadius: "50%",
                      }}
                    /> 
                  </td>
                  )}
                  
                  
                  {maison && <td>{maison.addresse || 'N/A'}</td>}
                  <td>{maison.superficie}m2 </td>
                  <td>{maison.prix}FCFA </td>
                  <td>
                    {maison.categorie && maison.categorie.titre
                      ? maison.categorie.titre
                      : "Catégorie non définie"}{" "}
                  </td>
                  {/* <td>
                    {maison.categorie ? (
    <>
      {maison.categorie.titre && (
        <span>{maison.categorie.titre}</span>
      )}
      {!maison.categorie.titre && (
        <span>Catégorie non définie</span>
      )}
    </>
                    ) : (
                      <span>Catégorie non définie</span>
                    )}
                    {console.log("maison.categorie balise:", maison.categorie)}
                    {console.log("maison.categorie.titre balise:", maison.categorie.titre)}
                  </td> */}

                  <td className=" d-flex justify-content-evenly">
                    <Button
                      variant="primary"
                      // onClick={handleShowEdit}
                      onClick={() => handleShowEditMaisons(maison)}
                      style={{
                        backgroundColor: "#fff",
                        border: "1px solid #d46f4d",
                        color: "#d46f4d",
                      }}
                      id="buttonModifier"
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </Button>
                    <Button
                    onClick={() => supprimerMaison(maison.id)}
                      style={{
                        backgroundColor: "#fff",
                        border: "1px solid #d46f4d",
                        color: "#d46f4d",
                      }}>
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>


                    <Button
                      style={{
                        backgroundColor: "#fff",
                        border: "1px solid #d46f4d",
                        color: "#d46f4d",
                      }}>
                      <Link to={`/detailmaisonadmin/${maison.id} || '' `} style={{ color: "#d46f4d" }}>
                        <FontAwesomeIcon icon={faEye} />
                      </Link>
                    </Button>
                  </td>
                </tr>
              )})}
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          totalPaginationPages={totalPaginationPages}
          setCurrentPage={setCurrentPage}
          
          />
      </div>

      {/* modal debut  ajouter maison*/}
      <>
        <Modal
          show={showMaison}
          onHide={handleCloseEdit}
          id="buttonAjouter"
        >
          <Modal.Header closeButton >
            <Modal.Title>Ajouter maison</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <div className="d-flex justify-content-around ">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Addresse</Form.Label>
                  <Form.Control
                    value={maisonData.addresse}
                    onChange={(e) =>
                      setMaisonData({ ...maisonData, addresse: e.target.value })
                    }
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Superficie</Form.Label>
                  <Form.Control
                    value={maisonData.superficie}
                    onChange={(e) =>
                      setMaisonData({
                        ...maisonData,
                        superficie: e.target.value,
                      })
                    }
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
              </div>
              <div className="d-flex justify-content-around">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Prix</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={maisonData.prix}
                    onChange={(e) =>
                      setMaisonData({ ...maisonData, prix: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Categorie</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={maisonData.categories_id}
                    onChange={(e) =>
                      setMaisonData({
                        ...maisonData,
                        categories_id: e.target.value,
                      })
                    }
                  >
                    <option>Choisir une catégorie</option>
                    {categories &&
                      categories.map((cat, index) => {
                        return (
                          <option key={index} value={cat.id}>
                            {cat.titre}
                          </option>
                        );
                      })}
                  </Form.Select>
                </Form.Group>
              </div>
              {/* <div className="d-flex justify-content-around"> */}
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder=""
                    className="w-100"
                    // value={maisonData.image}
                    // onChange={(e) =>
                    //   setMaisonData({ ...maisonData, image: e.target.value })
                    // }
                    onChange={(e) =>
                      setMaisonData({ ...maisonData, image: e.target.files[0] })
                    }
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Date de construction</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder=""
                    className="w-100"
                    value={maisonData.annee_construction}
                    onChange={(e) =>
                      setMaisonData({
                        ...maisonData,
                        annee_construction: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              {/* </div> */}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={maisonData.description}
                  onChange={(e) =>
                    setMaisonData({
                      ...maisonData,
                      description: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={ajouterMaison} style={{backgroundColor:'#D46F4D', border:'none', width:'130px'}}>
              Ajouter
            </Button>
            <Button variant="primary" onClick={handleCloseEdit} style={{backgroundColor:'#fff', border:'1px solid #D46F4D' , width:'130px', color:'#D46F4D'}}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      {/* modal fin ajouter maison */}

      {/* modal debut modifier maison */}
      <Modal
        show={showEditModalMaisons}
        onHide={handleCloseEditMaisons}
        id="buttonModifier"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modifier maison</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {editMaisonData && editMaisonData.addresse && (
          <Form>
            <div className="d-flex justify-content-around ">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Adresse</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={editMaisonData.addresse}
                  onChange={(e) =>
                    setEditMaisonData({
                      ...editMaisonData,
                      addresse: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Superficie</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={editMaisonData.superficie}
                  onChange={(e) =>
                    setEditMaisonData({
                      ...editMaisonData,
                      superficie: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </div>
            <div className="d-flex justify-content-around">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Prix</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={editMaisonData.prix}
                  onChange={(e) =>
                    setEditMaisonData({
                      ...editMaisonData,
                      prix: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Categorie</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  // value={editMaisonData.categories_id}
                  value={editMaisonData.categories_id || ""}
                  onChange={(e) =>
                    setEditMaisonData({
                      ...editMaisonData,
                      categories_id: e.target.value,
                    })
                  }
                >
                  {/* recuperer la categorie selectionner par défaut pour la modifier */}
                  <option>selectionner Categorie</option>
                  {categories &&
                    categories.map((cat, index) => {
                      return (
                    <option key={index} value={cat.id}>
                          {cat.titre}
                    </option>
                       );
                      })}
                     
                </Form.Select>
              </Form.Group>
            </div>
            {/* <div className="d-flex justify-content-around"> */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <div><Form.Label htmlFor="inputimage">Image</Form.Label></div>
  
                     {newFile ? (
                      // Si newFile existe, afficher la nouvelle image
                      <Image src={URL.createObjectURL(newFile)} width={200} height={50} />
                      ) : (
                        // Sinon, afficher l'image existante
                        <Image src={`http://localhost:8000/storage/${editMaisonData.image}`} width={200} height={50} />
                      )}

                      {/* <Form.Control type="file" onChange={(e) => setNewFile(e.target.files[0])} id='inputimage' /> */}
                      <Form.Control type="file" onChange={(e) => handleFileChange(e.target.files[0])} id='inputimage' />

              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Date de construction</Form.Label>
                <Form.Control
                  type="date"
                  placeholder=""
                  className="w-100"
                  value={editMaisonData.annee_construction}
                  onChange={(e) =>
                    setEditMaisonData({
                      ...editMaisonData,
                      annee_construction: e.target.value,
                    })
                  }
                />
              </Form.Group>
            {/* </div> */}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={editMaisonData.description}
                onChange={(e) =>
                  setEditMaisonData({
                    ...editMaisonData,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modifierMaison} style={{backgroundColor:'#D46F4D', border:'none', width:'130px'}}>
            Modifier
          </Button>
          <Button variant="primary" onClick={handleCloseEditMaisons} style={{backgroundColor:'#fff', border:'1px solid #D46F4D' , width:'130px', color:'#D46F4D'}}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
      {/* modal fin modifier maison */}
    </div>
  );
}
