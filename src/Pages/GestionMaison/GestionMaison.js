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

export default function GestionMaison() {
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
    image: "",
    annee_construction: "",
    description: "",
  });

  // Gestionnaire de clic pour le bouton de modification
  const handleShowEditMaisons = (maison) => {
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
  };

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

        Swal.fire({
          icon: "success",
          title: "Succès!",
          text: "Maison ajouté avec succès!",
        });
        // fetchMaison();
        // Fermez le modal ou effectuez d'autres actions nécessaires après l'ajout réussi
        handleCloseEdit();
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

  const modifierMaison = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/maison/edit/${editMaisonData.id}`,
        editMaisonData
      );

      if (response.status === 200) {
        const updatedMaisons = maisons.map((maison) =>
          maison.id === editMaisonData.id ? response.data.categorie : maison
        );

        setMaisons(updatedMaisons);
        handleCloseEditMaisons();
        Swal.fire({
          icon: "success",
          title: "Succès!",
          text: "Catégorie mise à jour avec succès!",
        });
        // handleShowEditMaisons();
      } else {
        console.error("erreur lors de la modification de la catégorie");
      }
    } catch (error) {
      console.error("une erreur  Axios:", error);
    }
  };

  // console.log(categories, "les categories");

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
                  <td>
                    <Image
                      src={maison.image}
                      alt
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
                  <td>
                    {maison.categorie && maison.categorie.titre
                      ? maison.categorie.titre
                      : "Catégorie non définie"}{" "}
                  </td>
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
        <Modal
          show={showMaison}
          onHide={handleCloseEditMaisons}
          id="buttonAjouter"
        >
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
            <Button variant="primary" onClick={handleCloseEdit}>
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
                  value={editMaisonData.categories_id}
                  onChange={(e) =>
                    setEditMaisonData({
                      ...editMaisonData,
                      categories_id: e.target.value,
                    })
                  }
                >
                  <option>selectionner Categorie</option>
                  <option value="1"> </option>
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
                  value={ editMaisonData &&
                     editMaisonData.image ? editMaisonData.image : "Image non trouver"}
                  onChange={(e) =>
                    setEditMaisonData({
                      ...editMaisonData,
                      image: e.target.value,
                    })
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
                  value={editMaisonData.annee_construction}
                  onChange={(e) =>
                    setEditMaisonData({
                      ...editMaisonData,
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modifierMaison}>
            Modifier
          </Button>
          <Button variant="primary" onClick={handleCloseEditMaisons}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
      {/* modal fin modifier maison */}
    </div>
  );
}
