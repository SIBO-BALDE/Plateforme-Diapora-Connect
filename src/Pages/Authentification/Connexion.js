import React, { useState } from "react";
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
        const tokenauth = data.access_token ;
        console.log(data.access_token, 'cest le token')
         // Stocker le token dans le localStorage
        localStorage.setItem("tokencle", tokenauth);
        console.log(data.access_token[1].role);
        // setIsAuthenticated(true);

        login();

        if (data.access_token[1].role === "admin") {
          navigate("/dashbordAdmin");
        } else {
          navigate("/dashbordUser");
        }
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Ce compte n'hesite pas!",
      });
    }
  };

  return (
    <div className="container  content-flex-signin">
      <div className="img-content-form">
        <Image src={photo} alt="" id="image-form" />
      </div>
      <div className="content-left-form">
        <Form onSubmit={handleSubmit}>
          <h3 className="text-center mt-3 mb-3"> CONNEXION</h3>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label>Mot de pass</Form.Label>
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
              type="submit"
              className="btn-colour1"
              id="btn-colour1"
              style={{ marginLeft: "10px" }}
            >
              Annuler
            </Button>
            {/* onClick={handleCancel} */}
          </div>
          <Link to={"/inscription"} className="content-link">
            Vous avez dejas un? connectez vous
          </Link>
        </Form>
      </div>
    </div>
  );
}
