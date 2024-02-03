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
import profileService from "../../fichiers/S1 (1).png";
import axios from "axios";
import Swal from "sweetalert2";
import Pagination from "../../Components/Pagination/Pagination";

export default function GestionServices({ id }) {
  const [showServices, setShowServices] = useState(false);
  const [showEditModalServices, setShowEditModalServices] = useState(false);

  const handleCloseServices = () => setShowServices(false);
  const handleshowServices = () => setShowServices(true);
  const handleCloseEditServices = () => setShowEditModalServices(false);
  // const  handleShowEditServices= () => setShowEditModalServices(true);

  // tableau ou stocker la liste des services
  const [services, setServices] = useState([]);
  // recherche champ input
  const [searchValue, setSearchValue] = useState('');

  const [serviceData, setServiceData] = useState({
    titre: "",
    description: "",
    image: "",
  });

  // function pour ajouter une service
  const ajouterService = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/service/create",
        serviceData
      );

      // Vérifiez si la requête a réussi
      if (response.status === 200) {
        // Ajoutez la nouvelle maison à la liste existante
        setServices([...services, response.data]);
        console.log(response.data, "cc les amis");
        // Réinitialisez les valeurs du formulaire après avoir ajouté le service
        setServiceData({
          titre: "",
          image: "",
          description: "",
        });
        Swal.fire({
          icon: "success",
          title: "Succès!",
          text: "service ajouter avec succée!",
        });

        // Fermez le modal
        handleCloseServices();

        // appeler la fonction pour en ajoutant le service on affiche en meme temp
        fetchService();
      } else {
        console.error("Erreur dans lajout de maison");
      }
    } catch (error) {
      // Gestion des erreurs Axios
      console.error("Erreur Axios:", error);
    }
  };

  //  etat pour modifier service
  const [editServiceData, setEditServiceData] = useState({
    id: null,
    titre: "",
    description: "",
    image: "",
  });

  // Gestionnaire de clic pour le bouton de modification
  const handleShowEditServices = (service) => {
    setEditServiceData({
      id: service.id,
      titre: service.titre,
      image: service.image,
      description: service.description,
    });
    setShowEditModalServices(true);
  };

  //  Lister les services
  const fetchService = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/service/liste"
      );
      // setservices(response.services);
      setServices(response.data.services);

      console.log(response.data.services, "service");
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories:", error);
    }
  };

  // appeler la function fetch chaque recharge de la page
  useEffect(() => {
    fetchService();
  }, []);

  // Function pour modifier services
  const modifierService = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/service/edit/${editServiceData.id}`,
        editServiceData
      );

      if (response.status === 200) {
        const updatedServices = services.map((service) =>
          service.id === editServiceData.id ? response.data.service : service
        );

        setServices(updatedServices);
        handleCloseEditServices();
        Swal.fire({
          icon: "success",
          title: "Succès!",
          text: "Service mise à jour avec succès!",
        });
      } else {
        console.error("erreur lors de la modification de la service");
      }
    } catch (error) {
      console.error("une erreur  Axios:", error);
    }
  };

  // funtion pour supprimer les services
  const supprimerService = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/service/supprimer/${id}`
      );
      if (response.status === 200) {
        // Filtrez la liste des catégories pour exclure celle qui vient d'être supprimée
        const updatedServices = services.filter((service) => service.id !== id);

        setServices(updatedServices);
        Swal.fire({
          icon: "success",
          title: "Succès!",
          text: "Catégorie supprimée avec succès!",
        });
      } else {
        console.error("Erreur lors de la suppression de la catégorie");
      }
    } catch (error) {}
  };


  // recherche
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredServices = services.filter((service) =>
  service.titre && service.titre.toLowerCase().includes(searchValue.toLowerCase())
  );
  const displayServices = searchValue === '' ? services : filteredServices;



   // pour la pagination
   const [currentPage, setCurrentPage] = useState(1);
   const servicesParPage = 6;
   
  // pagination
const indexOfLastService = currentPage * servicesParPage;
const indexOfFirstService = indexOfLastService - servicesParPage;
const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);

const totalPaginationPages = Math.ceil(services.length / servicesParPage);


  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-5">
        <div>
          <Button
            variant="primary"
            onClick={handleshowServices}
            className="ms-4"
            style={{ backgroundColor: "#d46f4d", border: "none" }}
            id="buttonAjouter"
          >
            Ajouter un service
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
                Titre
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
            {currentServices &&
              currentServices.map((service) => (
                <tr key={service.id} className="">
                  <td>
                    <Image
                      src={service.image}
                      className="img-profile-tab-maison"
                      id="img-profile-tab-maison"
                      style={{
                        height: "30px",
                        width: "30px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>{service.titre}</td>
                  <td className="d-flex justify-content-evenly">
                    <Button
                      variant="primary"
                      onClick={() => handleShowEditServices(service)}
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
                      onClick={() => supprimerService(service.id)}
                      // onClick={() => supprimerCategory(categorie.id)}
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
                        to={`/detailservicesadmin/${service.id} || '' `}
                        style={{ color: "#d46f4d" }}
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </Link>
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <Pagination
         currentPage={currentPage}
         totalPaginationPages={totalPaginationPages}
         setCurrentPage={setCurrentPage}
         
         />
      </div>

      {/* modal debut  ajouter service*/}
      <>
        <Modal
          show={showServices}
          onHide={handleCloseServices}
          id="buttonAjouter"
        >
          <Modal.Header closeButton>
            <Modal.Title>Ajouter Service</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Titre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={serviceData.titre}
                  onChange={(e) =>
                    setServiceData({ ...serviceData, titre: e.target.value })
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
                  value={serviceData.image}
                  onChange={(e) =>
                    setServiceData({ ...serviceData, image: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={serviceData.description}
                  onChange={(e) =>
                    setServiceData({
                      ...serviceData,
                      description: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={ajouterService}>
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
      <Modal
        show={showEditModalServices}
        onHide={handleCloseEditServices}
        id="buttonModifier"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modifier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                value={editServiceData.titre}
                onChange={(e) =>
                  setEditServiceData({
                    ...editServiceData,
                    titre: e.target.value,
                  })
                }
                // onInput={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                value={editServiceData.image}
                onChange={(e) =>
                  setEditServiceData({
                    ...editServiceData,
                    image: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={editServiceData.description}
                onChange={(e) =>
                  setEditServiceData({
                    ...editServiceData,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modifierService}>
            Modifier
          </Button>
          <Button variant="primary" onClick={handleCloseEditServices}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
      {/* modal fin modifier maison */}
    </div>
  );
}
