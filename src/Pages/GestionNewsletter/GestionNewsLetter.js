import React, { useEffect, useState } from "react";
import Pagination from "../../Components/Pagination/Pagination";
import { Button, Form, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPenToSquare,
  faShare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function GestionNewsLetter() {
  const [show, setShow] = useState(false);
  const [showOne, setShowOne] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //
  const handleCloseOne = () => setShowOne(false);
  const handleShowOne = () => setShowOne(true);

  // Tableau ou stocker la liste des emails
  const [emailValues, setEmailValues] = useState([]);
  // recherche champ input
  const [searchValue, setSearchValue] = useState("");
  // recherche
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredEmailValues = emailValues.filter(
    (emailValue) =>
      emailValue.email.toLowerCase().includes(searchValue.toLowerCase()) ||
      emailValue.created_at.toLowerCase().includes(searchValue.toLowerCase())
  );

  const displayEmailValues =
    searchValue === "" ? emailValues : filteredEmailValues;

  // pour la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const emailValuesParPage = 4;

  // pagination
  const indexOfLastEmailValue = currentPage * emailValuesParPage;
  const indexOfFirstEmailValue = indexOfLastEmailValue - emailValuesParPage;
  const currentEmailValues = filteredEmailValues.slice(
    indexOfFirstEmailValue,
    indexOfLastEmailValue
  );

  const totalPaginationPages = Math.ceil(
    emailValues.length / emailValuesParPage
  );

  // pour lister les emails avec avec cet useEffet on recupere l'ensemble des email
  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/newsletter/liste"
        );

        setEmailValues(response.data.listeEmails);
        console.log(response, "reponse");

        console.log(emailValues);
      } catch (error) {
        console.error("Erreur lors de la récupération des emails:", error);
      }
    };
    fetchEmail();
  }, []);

  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-5">
        <div>
          <Button
            variant="primary"
            onClick={handleShow}
            // onClick={handleshowCategories}
            className="ms-4"
            style={{ backgroundColor: "#d46f4d", border: "none" }}
            id="buttonAjouter"
          >
            Partager un newsletter
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
                  // onChange={handleSearchChange}
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
        <h3>Liste des newsletter</h3>
        <table className="table border  border-1">
          <thead
            className=""
            id="hearder-color"
            style={{ backgroundColor: "#d46f4d" }}
          >
            <tr>
              <th style={{ backgroundColor: "#d46f4d", color: "#fff" }}>
                Email
              </th>
              <th style={{ backgroundColor: "#d46f4d", color: "#fff" }}>
                Date creation
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
            {currentEmailValues.map((emailValue) => (
              <tr key={emailValue.id}>
                <td style={{ color: "black" }}>{emailValue.email}</td>
                <td style={{ color: "black" }}>
                  {formatDate(emailValue.created_at)}
                </td>
                <td className="d-flex justify-content-evenly">
                  <Button
                    variant="primary"
                    onClick={handleShowOne}
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid #d46f4d",
                      color: "#d46f4d",
                    }}
                    id="buttonModifier"
                  >
                    <FontAwesomeIcon icon={faShare} />
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter message à partager</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image logo</Form.Label>
              <Form.Control type="file" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Object</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Contenu</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{
              backgroundColor: "#D46F4D",
              border: "none",
              width: "130px",
            }}
          >
            Partager
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            style={{
              backgroundColor: "#fff",
              border: "1px solid #D46F4D",
              width: "130px",
              color: "#D46F4D",
            }}
          >
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Envoi par personne */}
      <Modal show={showOne} onHide={handleCloseOne}>
        <Modal.Header closeButton>
          <Modal.Title>
            Ajouter message à partager avec une personne
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image logo</Form.Label>
              <Form.Control type="file" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Object</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Contenu</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{
              backgroundColor: "#D46F4D",
              border: "none",
              width: "130px",
            }}
          >
            Partager
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            style={{
              backgroundColor: "#fff",
              border: "1px solid #D46F4D",
              width: "130px",
              color: "#D46F4D",
            }}
          >
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
