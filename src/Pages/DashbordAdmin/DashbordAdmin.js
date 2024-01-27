import React, { useState } from "react";
import "./DashbordAdmin.css";
import NavbarAdmin from "../../Components/Navbars/NavbarAdmin/NavbarAdmin";
import SideBars from "../../Components/SideBars/SideBars";
import { Image } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
import Tableaux from "../Tableaux/Tableaux";
import profile from "../../fichiers/profile.png";
import Chart from "../../Components/Charts/Charts";
import GestionUtilisateurs from "../GestionUtilisateurs/GestionUtilisateurs";
import GestionMaison from "../GestionMaison/GestionMaison";
import GestionTerrain from "../GestionTerrain/GestionTerrain";
// import GestionCommentaire from "../GestionCommentaire/GestionCommentaire";
import GestionServices from "../GestionServices/GestionServices";
// import GestionArticles from "../GestionArticles/GestionArticles";
// import GestionPayment from "../GestionPayment/GestionPayment";
import GestionFavorie from "../GestionFavorie/GestionFavorie";
import GestionCategorie from "../GestionCategorie/GestionCategorie";

function KPI() {
  return (
    <div className="contenueprincipal container ">
      <div className="dashbord-content-main-one container" id="vv">
        <div className="content-left-admin-dashbord">
          <table className="table mb-5">
            <thead className="table-light" id="hearder-color">
              <tr>
                <th style={{backgroundColor:'#d46f4d' , color:'#fff'}}>Profile</th>
                <th style={{backgroundColor:'#d46f4d' , color:'#fff'}}>Prenom</th>
                <th style={{backgroundColor:'#d46f4d' , color:'#fff'}}>Nom</th>
                <th style={{backgroundColor:'#d46f4d' , color:'#fff'}}>Email</th>
                <th style={{backgroundColor:'#d46f4d' , color:'#fff'}}>Téléphone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Image src={profile} className="img-profile-tab-admin" />
                </td>
                <td>Amady</td>
                <td>Fall</td>
                <td>bass@gmail.com</td>
                <td>778529967</td>
              </tr>
              <tr>
                <td>
                  <Image src={profile} className="img-profile-tab-admin" />
                </td>
                <td>Moussa</td>
                <td>Bass</td>
                <td>bass@gmail.com</td>
                <td>778529967</td>
              </tr>
            </tbody>
          </table>
          <div className="conten-admin-2">
            <div className="title-progressbar-admin px-4 ">
              <p>Progression des projets</p>
            </div>
            <span>
              Pourcentage de complétion des demandes de papier administratifs
            </span>
            <div
              className="progress mt-4"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="98"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar"
                id="progress-bar"
                style={{ width: "98%", color: "white" }}
              >
                98%
              </div>
            </div>
            <span>
              Pourcentage de complétion des demandes de papier administratifs
            </span>
            <div
              className="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar"
                id="progress-bar"
                style={{ width: "50%", color: "white" }}
              >
                50%
              </div>
            </div>
          </div>
        </div>
        <div className="content-diagramme-circulaire-right-conten-2">
          <div className="">
            <Chart />
            <p className="text-center mt-2 ">
              Nombre de projet de construction <br></br> terminé par rapport au
              projet total <br></br> 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RenderContent(name) {
  switch (name) {
    case "dashbordAdmin":
      return <KPI />;
    case "gestionuser":
      return <GestionUtilisateurs />;
    case "gestionmaison":
      return <GestionMaison />;
    case "gestionterrain":
      return <GestionTerrain />;
    // case "gestioncommenentaire":
    //   return <GestionCommentaire />;
    case "gestionservices":
      return <GestionServices />;
    // case "gestionarticle":
    //   return <GestionArticles />;
    case "gestionfavorie":
      return <GestionFavorie />;
    case "gestioncategorie":
      return <GestionCategorie />;
    // case "gestionpayment":
    //   return <GestionPayment />;
    default:
      return <KPI />;
  }
}

export default function DashbordAdmin() {
  // l'etat pour verifier si le sidebar est ouvert ou pas
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [name, setName] = useState("dashbordAdmin");

  // function pour changer l'eta
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  function handleChangePath(path) {
    setName(path);
  }

  return (
    <div className="">
      <div
        className={`maincontent-dashbord-static ${
          isSidebarOpen ? "hidden" : ""
        }`}
      >
        <div className="contentsidebar">
          <SideBars
            isOpen={isSidebarOpen}
            name={name}
            handleChangePath={handleChangePath}
            id='sidebar-content'
          />
        </div>
        <div className="secondecontent">
          <div className="">
            <NavbarAdmin onMenuClick={toggleSidebar} />
          </div>
          <Tableaux />
          {/* contenue selon le lien clicker */}
          {RenderContent(name)}
        </div>
      </div>
    </div>
  );
}
