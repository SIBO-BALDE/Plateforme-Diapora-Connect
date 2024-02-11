import {
  faEye,
  faMagnifyingGlass,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Image, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import profileterrain from "../../fichiers/land1.png";
import axios from "axios";
import Swal from "sweetalert2";
import Pagination from "../../Components/Pagination/Pagination";

export default function GestionTerrain(id) {
  const [showLand, setShowLand] = useState(false);
  const [showEditModalLand, setshowEditModalLand] = useState(false);

  const handleCloseLand = () => setShowLand(false);
  const handleShowLand = () => setShowLand(true);
  const handleCloseEditLand = () => setshowEditModalLand(false);

  // en retrait
  const handleShowEditLand = () => setshowEditModalLand(true);


  // etat pour ajout terrain initialiser à vide
  const [terrainData, setTerrainData] = useState({
    addresse: "",
    superficie: "",
    prix: "",
    image: "",
    // annee_construction: "",
    description: "",
  });

  const [terrains, setTerrains] = useState([]);

  
  // pour la recherche  
  const [searchValue, setSearchValue] = useState('');
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredTerrains = terrains.filter((terrain) =>
  terrain.addresse && terrain.addresse.toLowerCase().includes(searchValue.toLowerCase())
  );
  const displayTerrains = searchValue === '' ? terrains : filteredTerrains;

  
  // function pour ajouter une categorie
  const ajouterTerrain = async () => {
    try {

      const formData = new FormData();
      formData.append('addresse', terrainData.addresse);
      formData.append('superficie', terrainData.superficie);
      formData.append('prix', terrainData.prix);
      // formData.append('categories_id', terrainData.categories_id);
      formData.append('image', terrainData.image);
      // formData.append('annee_construction', terrainData.annee_construction);
      formData.append('description', terrainData.description);
      console.log(formData, 'formData maison')
      const response = await axios.post(
        "http://localhost:8000/api/terrain/create",
        formData,

        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Vérifiez si la requête a réussi
      if (response.status === 200) {
        // Ajoutez la nouvelle maison à la liste existante
        setTerrains([...terrains, response.data]);
        // Réinitialisez les valeurs du formulaire après avoir ajouté la maison
        setTerrainData({
          addresse: "",
          superficie: "",
          prix: "",
          image: "",
          description: "",
        });
        Swal.fire({
          icon: "success",
          title: "Succès!",
          text: "categorie ajouter avec succée!",
        });
        fetchTerrains();
        // Fermez le modal
        handleCloseLand();
      } else {
        console.error("Erreur dans lajout de maison");
      }
    } catch (error) {
      // Gestion des erreurs Axios
      console.error("Erreur Axios:", error);
    }
  };

  const fetchTerrains = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/terrain/liste"
      );
      // setCategories(response.categories);
      setTerrains(response.data.terrains);

      console.log(terrains);
    } catch (error) {
      console.error("Erreur lors de la récupération des terrains:", error);
    }
  };

  //  Lister les terrains
  useEffect(() => {
    fetchTerrains();
  }, []);

  // modification des terrains
  // Gestionnaire de clic pour le bouton de modification
  const handleShowEditTerrains = (terrain) => {
    setEditTerrainData({
      id: terrain.id,
      addresse: terrain.addresse,
      superficie: terrain.superficie,
      prix: terrain.prix,
      image: terrain.image,
      description: terrain.description,
    });
    setshowEditModalLand(true);
  };


  //  etat pour modifier categorie
  const [editTerrainData, setEditTerrainData] = useState({
    id: null,
    addresse: "",
    superficie: "",
    prix: "",
    image: "",
    description: "",
  });


  // Fonction pour mettre à jour une terrain
  const modifierTerrain = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/terrain/edit/${editTerrainData.id}`,
        editTerrainData
      );
      // console.log(editTerrainData, "this is the terrain edit");

      if (response.status === 200) {
        const updatedTerrains = terrains.map((terrain) =>
          terrain.id === editTerrainData.id ? response.data.terrain : terrain
        );
        // console.log(updatedTerrains, "this is the img")

        setTerrains(updatedTerrains);
        handleCloseEditLand();
        Swal.fire({
          icon: "success",
          title: "Succès!",
          text: "Terrain mise à jour avec succès!",
        });
      } else {
        console.error("erreur lors de la modification de la terrain");
      }
    } catch (error) {
      console.error("une erreur  Axios:", error);
    }
  };

  // Function pour supprimer une terrain
  const supprimerTerrain = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/terrain/supprimer/${id}`
      );
      if (response.status === 200) {
        // Filtrez la liste des catégories pour exclure celle qui vient d'être supprimée
        const updatedTerrains = terrains.filter((terrain) => terrain.id !== id);

        setTerrains(updatedTerrains);
        Swal.fire({
          icon: "success",
          title: "Succès!",
          text: "Terrain supprimée avec succès!",
        });
      } else {
        console.error("Erreur lors de la suppression de la terrain");
      }
    } catch (error) {}
  };


    // pour la pagination
    const [currentPage, setCurrentPage] = useState(1);
    const terrainsParPage = 6;


   // pagination
const indexOfLastTerrain = currentPage * terrainsParPage;
const indexOfFirstTerrain = indexOfLastTerrain - terrainsParPage;
const currentTerrains = filteredTerrains.slice(indexOfFirstTerrain, indexOfLastTerrain);

const totalPaginationPages = Math.ceil(terrains.length / terrainsParPage);

  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-5">
        <div>
          <Button
            variant="primary"
            onClick={handleShowLand}
            className="ms-4"
            style={{ backgroundColor: "#d46f4d", border: "none" }}
            id="buttonAjouter"
          >
            Ajouter un terrain
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
            { currentTerrains &&
              currentTerrains.map((terrain) => (
                <tr key={terrain.id}>
                  <td>
                    <Image
                      // src={image}
                      src={`http://localhost:8000/storage/${terrain.image}`} 
                      className="img-profile-tab-maison"
                      id="img-profile-tab-maison"
                      style={{
                        height: "30px",
                        width: "30px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td style={{ color: "black" }}>{terrain.addresse}</td>
                  <td style={{ color: "black" }}>{terrain.superficie}</td>
                  <td style={{ color: "black" }}>{terrain.prix}</td>
                  <td className="d-flex justify-content-evenly">
                    <Button
                      variant="primary"
                      onClick={() => handleShowEditTerrains(terrain)}
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
                      onClick={() => supprimerTerrain(terrain.id)}
                      style={{
                        backgroundColor: "#fff",
                        border: "1px solid #d46f4d",
                        color: "#d46f4d",
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "#fff",
                        border: "1px solid #d46f4d",
                        color: "#d46f4d",
                      }}
                    >
                      <Link
                        style={{ color: "#d46f4d" }}
                        to={`/detailterrainadmin/${terrain.id} || '' `}
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </Link>
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <Pagination  id='paginationterrain'
          currentPage={currentPage}
          totalPaginationPages={totalPaginationPages}
          setCurrentPage={setCurrentPage}
          
          />
      </div>

      {/* modal debut  ajouter terrain*/}
      <>
        <Modal show={showLand} onHide={handleCloseLand} id="buttonAjouter">
          <Modal.Header closeButton>
            <Modal.Title>Ajouter terrain</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
                    value={terrainData.addresse}
                    onChange={(e) =>
                      setTerrainData({
                        ...terrainData,
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
                    value={terrainData.superficie}
                    onChange={(e) =>
                      setTerrainData({
                        ...terrainData,
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
                    value={terrainData.prix}
                    onChange={(e) =>
                      setTerrainData({ ...terrainData, prix: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder=""
                    className="w-100"
                    // value={terrainData.image}
                    // onChange={(e) =>
                    //   setTerrainData({ ...terrainData, image: e.target.value })
                    // }
                    onChange={(e) =>
                      setTerrainData({ ...terrainData, image: e.target.files[0] })
                    }
                  />
                </Form.Group>
              </div>
              
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={terrainData.description}
                  onChange={(e) =>
                    setTerrainData({
                      ...terrainData,
                      description: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={ajouterTerrain} style={{backgroundColor:'#D46F4D', border:'none', width:'130px'}}>
              Ajouter
            </Button>
            <Button variant="primary" onClick={handleCloseLand} style={{backgroundColor:'#fff', border:'1px solid #D46F4D' , width:'130px', color:'#D46F4D'}}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      {/* modal fin ajouter terrain */}

      {/* modal debut modifier terrain */}
      <Modal
        show={showEditModalLand}
        onHide={handleCloseEditLand}
        id="buttonModifier"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modifier terrain</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                  value={editTerrainData.addresse}
                  onChange={(e) =>
                    setEditTerrainData({
                      ...editTerrainData,
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
                  value={editTerrainData.superficie}
                  onChange={(e) =>
                    setEditTerrainData({
                      ...editTerrainData,
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
                  value={editTerrainData.prix}
                  onChange={(e) =>
                    setEditTerrainData({
                      ...editTerrainData,
                      prix: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className="w-100"
                  value={editTerrainData.image}
                  onChange={(e) =>
                    setEditTerrainData({
                      ...editTerrainData,
                      image: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </div>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={editTerrainData.description}
                onChange={(e) =>
                  setEditTerrainData({
                    ...editTerrainData,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modifierTerrain} style={{backgroundColor:'#D46F4D', border:'none', width:'130px'}}>
            ModifierTerrain
          </Button>
          <Button variant="primary" onClick={handleCloseEditLand} style={{backgroundColor:'#fff', border:'1px solid #D46F4D' , width:'130px', color:'#D46F4D'}}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
      {/* modal fin modifier maison */}
    </div>
  );
}
