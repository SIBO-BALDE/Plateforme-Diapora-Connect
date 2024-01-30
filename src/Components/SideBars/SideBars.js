import React from "react";
import "./SideBars.css";
// import profile from "../../Assets/profile.png";
import profile from '../../fichiers/profile.png'
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
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
    path: "gestionfavorie",
    text: "Gestion Favoris",
    icon: faHeart,
  },
];

export default function SideBars({ isOpen, name, handleChangePath }) {
  return (
    <div style={{ display: !isOpen ? "block" : "none" }}>
      <div className="contentOneSidebar">
        <div className="contentimage">
          <div className="d-flex justify-content-center ">
            {" "}
            <Image src={profile} alt="" id="image-contenu" />
          </div>
          <p className="text-center">Moussa Basse</p>
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
            <Button className="logout d-flex justify-content-center align-items-center " id="logout">
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