import React from "react";
import "./SideBars.css";
// import profile from "../../Assets/profile.png";
import profile from '../../fichiers/profile.png'
import { Button, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faFile,
  faGear,
  faUser,
  faSignOutAlt,
  faHouse,
  faGauge,
  faLayerGroup,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import axios from "../../Pages/Authentification/AxiosAuthIntercepteur";
import Swal from "sweetalert2";



const links = [
  {
    path: "dashbordAdmin",
    text: "Dashboard",
    icon: faGauge,
  },
  {
    path: "gestionuser",
    text: "Gestion Utilisateurs",
    icon: faUser,
  },
  {
    path: "gestionmaison",
    text: "Gestion Maisons",
    icon: faHouse,
  },
  {
    path: "gestionterrain",
    text: "Gestion Terrains",
    icon: faHouse,
  },
  {
    path: "gestionservices",
    text: "Gestion Services",
    icon: faGear,
  },
  // {
  //   path: "gestioncommenentaire",
  //   text: "Gestion Commentaire",
  //   icon: faComment,
  // },
  // {
  //   path: "gestionarticle",
  //   text: "Gestion Articles",
  //   icon: faFile,
  // },
  {
    path: "gestioncategorie",
    text: "Gestion Catégories",
    icon: faLayerGroup,
  },
  {
    // path: "gestionfavorie",
    // text: "Gestion Favoris",
    // icon: faHeart,
  },
];

export default function SideBars({ isOpen, name, handleChangePath }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    
  try {
    // Utilisez votre instance Axios configurée
    const response = await axios.post("http://localhost:8000/api/auth/logout");

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
          // Supprimer le token du localStorage lors de la déconnexion
          localStorage.removeItem("token");

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
  } catch (error) {
    console.error("Erreur lors de la déconnexion :", error);
  }
};



  return (
    <div style={{ display: !isOpen ? "block" : "none", border:'none' }}>
      <div className="contentOneSidebar">
        <div className="contentimage">
          <div className="d-flex justify-content-center ">
            {" "}
            <Image src={profile} alt="" id="image-contenu" />
          </div>
          <p className="text-center"><Link to={'/'} style={{textDecoration:'none', color:'black'}}>Moussa Basse</Link></p>
          <hr />
        </div>
        <div id="content-try-content">
          {links.map((link, index) => (
            <div key={index}
              className={`contentlink mt-4 ${
                name === link.path && "active text-light"
              }`}
            >
              <FontAwesomeIcon icon={link.icon} className="ms-2" />
              <Button
                className="linkcontent"
                onClick={() => handleChangePath(link.path)}
              >
                <span
                  className={`linktext ${name === link.path && "text-light"}`}
                  id="lktinext"
                >
                  {link.text}
                </span>
              </Button>
            </div>
          ))}
        </div>
        <div className="mainContentBottom">
          <div className="d-flex  justify-content-center">
            <Button className="logout d-flex justify-content-center align-items-center " id="logout" onClick={handleLogout}>
              <FontAwesomeIcon
                icon={faSignOutAlt}
                className="logouticon  "
              />
            </Button>
          </div>
        </div>
      </div>
      
    </div>
  );
}