import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form, Image, Modal } from "react-bootstrap";
import { faEnvelope, faHome, faPhone, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import "./DashboardUser.css";
import Swal from "sweetalert2";

export default function DashboardUser() {
  const [utilisateur, setUtilisateur] = useState([]);
  console.log(utilisateur, "usertab");

  // pour le modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // Récupérez le token et le role  du localStorage
    const token = localStorage.getItem("tokencle");
    const role = localStorage.getItem("rolecle");

    // Si le token ou le role  existe, faites une requête à l'API pour récupérer les informations de l'utilisateur
    if (token || role==='user') {
      axios
        .post(
          "http://localhost:8000/api/auth/me",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        .then((response) => {
          const userData = response.data;
          setUtilisateur(userData);
          console.log(userData, "userdATA Dashboard");
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la récupération des informations de l'utilisateur :",
            error
          );
        });
    }
  }, []);


  const navigate = useNavigate();
  const role = localStorage.getItem("rolecle");
  // const token = localStorage.getItem("tokencle");
  useEffect(() => {
   
    if ( role !== "user") {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Acces interdit, vueillez et connectez vous!",
      });
      navigate("/"); 
    }
  }, [ role , navigate]);


  // Gestionnaire de clic pour le bouton de modification
  const handleShowEditProfiles = (utilisateur) => {
    setEditProfileData({
      id: utilisateur.id,
      nom: utilisateur.nom,
      prenom: utilisateur.prenom,
      email: utilisateur.email,
      // password: utilisateur.password,
      image: utilisateur.image,
      telephone: utilisateur.telephone,
    });
    handleShow();
    // console.log(editTerrainData, "editTerrainData recuperation")
    // console.log('Prix after adding to  mis a jour handleShowEditTerrains:', terrain.prix);
  };

  //  etat pour modifier categorie
  const [editProfileData, setEditProfileData] = useState({
    id: null,
    nom: "",
    prenom: "",
    email: "",
    // password: "",
    image: "",
    telephone: "",
  });

  const [newFile, setNewFile] = useState("");
  const handleFileChange = (file) => {
    setNewFile(file);
  };

  // Fonction pour mettre à jour une le profile
  const modifierProfile = async () => {
    const role = localStorage.getItem("rolecle");
    const token = localStorage.getItem("tokencle");

    const formData = new FormData();
    // console.log('Prix before adding to formData:', editTerrainData.prix);
    formData.append("id", editProfileData.id);
    formData.append("nom", editProfileData.nom);
    formData.append("prenom", editProfileData.prenom);
    formData.append("email", editProfileData.email);
    // console.log('Prix after adding to formData:', editProfileData.prix);
    formData.append("telephone", editProfileData.telephone);

    if (newFile instanceof File) {
      formData.append("image", newFile);
    } else {
      formData.append("image", editProfileData.image);
    }
    // console.log(formData, "formData")

    try {
      if (token || role === "user") {
        const response = await axios.post(
          `http://localhost:8000/api/update/${editProfileData.id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
       
        if (response.status === 200) {
          const updatedUser = response.data.user;
          console.log(response.data.user);
        // si id updateUser = id utilisateur
          if (updatedUser.id == utilisateur.id) {
            setUtilisateur(updatedUser)
          }
         
          handleClose();
          Swal.fire({
            icon: "success",
            title: "Succès!",
            text: "Profile mise à jour avec succès!",
          });
        } else {
          console.error("erreur lors de la modification de la terrain");
        }
      }
      //  console.log(newFile, 'newFile')
    } catch (error) {
      console.error("une erreur  Axios:", error);
    }
  };

  const handleLogout = async () => {
    const role = localStorage.getItem("rolecle");
    const token = localStorage.getItem("tokencle");
    
  try {
    // Utilisez votre instance Axios configurée
    if (token || role === "user"){
      const response = await axios.post("http://localhost:8000/api/auth/logout"
      , {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      );
  
      if (response.status === 200) {
        // Votre code de déconnexion réussie ici
  
        Swal.fire({
          title: "Etes-vous sûr ?",
          text: "De vouloir se déconnecter!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Oui, bien sûr!"
        }).then((result) => {
          if (result.isConfirmed) {
            localStorage.removeItem("tokencle");
            localStorage.removeItem("rolecle");
  
            Swal.fire({
              title: "Deconnexion!",
              text: "Vous êtes déconnecté avec succès.",
              icon: "success"
            });
            navigate("/connexion");
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Échec de déconnexion!",
        });
      }
    }
  } catch (error) {
    console.error("Erreur lors de la déconnexion :", error);
  }
};
 

  return (
    <div>
      <div className="cardtemoinhom">
        <div className="d-flex justify-content-between  ">
          <div>
          <Button className="logout d-flex justify-content-center align-items-center " id="logout" onClick={handleLogout}>
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className="logouticon "
              />
            </Button>
          </div>
          <div className="logouticon ">
            
            <Link to={"/"} style={{ textDecoration: "none", color: "#D46F4D" }} >
              <FontAwesomeIcon icon={faHome} />
            </Link>{" "}
          </div>
        </div>
        <div className="cardtemoinhome1">
          {utilisateur && utilisateur.image && (
            <Image
              src={`http://localhost:8000/storage/${utilisateur.image}`}
              style={{ borderRadius: "50%", border: "10px solid #fff", width:"200px", height:"200px" }}
            />
          )}
        </div>
        <div className="cardtemoinhome2 mt-5 ">
          {utilisateur && (
            <>
             <h6 className="text-center title-temoinhome text-light">
             <span><FontAwesomeIcon icon={faUser} style={{marginRight:'10px'}} /></span>{utilisateur.prenom} {utilisateur.nom}
              </h6>
              <p className="text-center  text-light"> <span><FontAwesomeIcon icon={faEnvelope} style={{marginRight:'10px'}} /></span>{utilisateur.email} </p>
              <p className="text-center  text-light">
              <span><FontAwesomeIcon icon={faPhone} style={{marginRight:'10px'}} /></span>{utilisateur.telephone}{" "}
              </p>

              <p className="text-center text-light paratextcontenthome">
                <span></span> <br />
              </p>
            </>
          )}

          {utilisateur && (
            <div className="d-flex justify-content-center ">
              <Button
                style={{
                  backgroundColor: "#fff",
                  color: "#D46F4D",
                  border: "none",
                }}
                variant="primary"
                onClick={() => handleShowEditProfiles(utilisateur)}
              >
                Modifier mon profil
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* modal modifier user */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier votre profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="d-flex justify-content-around ">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={editProfileData.nom}
                  onChange={(e) =>
                    setEditProfileData({
                      ...editProfileData,
                      nom: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Prenom</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={editProfileData.prenom}
                  onChange={(e) =>
                    setEditProfileData({
                      ...editProfileData,
                      prenom: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </div>
            <div className="d-flex justify-content-around ">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={editProfileData.email}
                  onChange={(e) =>
                    setEditProfileData({
                      ...editProfileData,
                      email: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput4"
              >
                <Form.Label>Telephone</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder=""
                  value={editProfileData.telephone}
                  onChange={(e) =>
                    setEditProfileData({
                      ...editProfileData,
                      telephone: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </div>
           
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div>
                <Form.Label htmlFor="inputimage">Image</Form.Label>
              </div>

              {newFile ? (
                // Si newFile existe, afficher la nouvelle image
                <Image
                  src={URL.createObjectURL(newFile)}
                  width={200}
                  height={50}
                />
              ) : (
                // Sinon, afficher l'image existante
                <Image
                  src={`http://localhost:8000/storage/${editProfileData.image}`}
                  width={200}
                  height={50}
                />
              )}
              <Form.Control
                type="file"
                onChange={(e) => handleFileChange(e.target.files[0])}
                id="inputimage"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant=""  onClick={modifierProfile} 
              style={{backgroundColor:'#D46F4D', border:'none', width:'130px' , color:'white'}}>
            Modifier
          </Button>
          <Button variant="" onClick={handleClose} style={{backgroundColor:'#fff', border:'1px solid #D46F4D' , width:'130px', color:'#D46F4D'}} >
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

      {/* nouveau */}
    </div>
  );
}
