import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import photo from "../../fichiers/profile.png";
import { Button, Form, Image } from "react-bootstrap";
import "./Auth.css";
import axios from "axios";

import { useAuth } from "../Authentification/AuthContext";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        credentials
      );
      // console.log(response, "dta");
      if (response.data.status === 403) {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Acces interdit, Vous etes bloqué!",
        });
      } else if (response.status === 200) {
        const data = response.data;
        console.log(data, 'dataverif')

        // Recuperer le token et stoker dans la varable tokenauth
        const tokenauth = data.access_token[0] ;
        console.log(tokenauth, 'cest le token')

        // recuperer le role pour le stocker dans la variable userRole
        const userRole = data.access_token[1].role;

         // Stocker le token dans le localStorage
        localStorage.setItem("tokencle", tokenauth);
        localStorage.setItem("rolecle", userRole);

        login(userRole);

        if (userRole === "admin") {
          navigate("/dashbordAdmin");
        } else {
          navigate("/dashbordUser");
        }
      }
    } catch (error) {
      console.log({error})
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Ce compte n'hesite pas!",
      });
    }
  };
  const handleCancel = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Vous etes sur?",
      text: "De vouvoiloir annuler la connexion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D46F4D",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, annuler!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Annulé!",
          text: "La requete à été annulé.",
          icon: "success"
        });
      }
    });
    setEmail("");
      setPassword("");

  }

  // mettre a jour la connexion
  // useEffect(() => {
  //   const checkAuthentication = async () => {
      
  //     const token = localStorage.getItem("tokencle");
  
  //     if (token) {
  //       try {
  //         // Effectuer une requête pour récupérer les informations de l'utilisateur côté serveur
  //         const response = await axios.post(
  //           "http://localhost:8000/auth/api/me",
  //           {},
  //           {
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //             },
  //           }
  //         );
  
  //         // La réponse doit contenir les informations de l'utilisateur
  //         const user = response.data;
  
  //         // Mettre à jour le state d'authentification avec le rôle de l'utilisateur (ajustez cela en fonction de votre structure de données côté serveur)
  //         const userRole = user.role;
  //         login(userRole);
  //       } catch (error) {
  //         // Une erreur s'est produite lors de la récupération des informations de l'utilisateur, déconnecter l'utilisateur
  //         logout();
  //       }
  //     } else {
  //       // Aucun token n'est présent, déconnecter l'utilisateur
  //       logout();
  //     }
  //   };
  
  //   checkAuthentication();
  // }, [login, logout]);
  
  

  return (
   
    <div className="container   content-flex-signin">
      <div className="img-content-form1" id="signin-form">
        <Image src={photo} alt="" id="image-form" />
      </div>
      <div className="content-left-form">
        <Form onSubmit={handleSubmit}>
          <h3 className="text-center mt-3 mb-3"> CONNEXION</h3>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Email</Form.Label><span style={{color:'red'}}>*</span>
            <Form.Control
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label>Mot de pass</Form.Label><span style={{color:'red'}}>*</span>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="btn-content-position">
            <Button type="submit" className="btn-colour">
              Se connecter
            </Button>
            <Button
            onClick={handleCancel}
              type="submit"
              className="btn-colour1"
              id="btn-colour1"
              style={{ marginLeft: "10px" }}
            >
              Annuler
            </Button>
            {/* onClick={handleCancel} */}
          </div>
          <Link to={"/inscription"} className="content-link" style={{color:'#D46F4D'}}>
            Vous avez dejas un? connectez vous
          </Link>
        </Form>
      </div>
    </div>
    
  );
}
