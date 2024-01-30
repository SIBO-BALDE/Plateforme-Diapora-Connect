import {
  faEye,
  faMagnifyingGlass,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Button, Form, Image } from "react-bootstrap";
import profilemaison from "../../fichiers/bann accueil.jpeg";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import axios from "axios";

export default function GestionMaison() {
  // pour le modal debut
  const [show, setShow] = useState(false);
  const [showEditModal, setshowEditModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseEdit = () => setshowEditModal(false);
  const handleShowEdit = () => setshowEditModal(true);

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
  const [categories, setCategories] = useState([]);

  // tableau ou stocker la liste des maison
  const [maisons, setMaisons] = useState([]);

  // function pour ajouter une maison
  const ajouterMaison = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/maison/create",
        maisonData
      );

      // Vérifiez si la requête a réussi
      if (response.status === 200) {
        // Ajoutez la nouvelle maison à la liste existante
        setMaisons([...maisons, response.data]);

        // Réinitialisez les valeurs du formulaire après avoir ajouté la maison
        setMaisonData({
          addresse: "",
          superficie: "",
          prix: "",
          categories_id: "",
          image: "",
          annee_construction: "",
          description: "",
        });
        
        alert("ajouter avec succéé");
        // fetchMaison();
        // Fermez le modal ou effectuez d'autres actions nécessaires après l'ajout réussi
        handleClose();
        fetchMaison();
      } else {
        // Gestion d'erreurs ou affichage de messages d'erreur
        console.error("Erreur dans lajout de maison");
      }
    } catch (error) {
      // Gestion des erreurs Axios
      console.error("Erreur Axios:", error);
    }
  };

  
  // function pour lister les maison
  const fetchMaison = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/maison/liste"
      );
      console.log(response, "response");
      setMaisons(response.data.maison);

      console.log(maisons, "liste maison");
    } catch (error) {
      console.error("Erreur lors de la récupération des maisons:", error);
    }
  };
  
  // recuperer la liste des maisons
  useEffect(() => {
    fetchMaison();
  }, []);
  
  // console.log()

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
  

  // console.log(categories, "les categories");

  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-5">
        <div>
          <Button
            variant="primary"
            onClick={handleShow}
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
            {maisons &&
              maisons.map((maison) => (
                <tr key={maison.id}>
                  <td
                    
                  >
                    <Image src={maison.image} alt 
                    className="img-profile-tab-maison"
                    id="img-profile-tab-maison"
                    style={{
                      height: "30px",
                      width: "30px",
                      borderRadius: "50%",
                    }}
                    />
                  </td>
                  <td>{maison.addresse}</td>
                  <td>{maison.superficie}m2 </td>
                  <td>{maison.prix}FCFA </td>
                  <td>{maison.categorie && maison.categorie.titre ? maison.categorie.titre : 'Catégorie non définie'} </td>
                  <td className=" d-flex justify-content-evenly">

                  <Button
                    variant="primary"
                    onClick={handleShowEdit}
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
                    <Link to={"/detailmaison"} style={{ color: "#d46f4d" }}>
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
                  </Button>
                  </td>
                </tr>
              ))}
              
          </tbody>
        </table>
      </div>

      {/* modal debut  ajouter maison*/}
      <>
        <Modal show={show} onHide={handleClose} id="buttonAjouter">
          <Modal.Header closeButton>
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
              <div className="d-flex justify-content-around">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className="w-100"
                    value={maisonData.image}
                    onChange={(e) =>
                      setMaisonData({ ...maisonData, image: e.target.value })
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
              </div>
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
            <Button variant="secondary" onClick={ajouterMaison}>
              Ajouter
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      {/* modal fin ajouter maison */}

      {/* modal debut modifier maison */}
      <Modal show={showEditModal} onHide={handleCloseEdit} id="buttonModifier">
        <Modal.Header closeButton>
          <Modal.Title>Modifier maison</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="d-flex justify-content-around ">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Adresse</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Superficie</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </div>
            <div className="d-flex justify-content-around">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Prix</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Categorie</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>selectionner Categorie</option>
                  <option value="1">R+2</option>
                  <option value="2">R+3</option>
                  <option value="3">R+4</option>
                  <option value="3">R+5</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="d-flex justify-content-around">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" placeholder="" className="w-100" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Date de construction</Form.Label>
                <Form.Control type="date" placeholder="" className="w-100" />
              </Form.Group>
            </div>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Ajouter
          </Button>
          <Button variant="primary" onClick={handleCloseEdit}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
      {/* modal fin modifier maison */}
    </div>
  );
}
