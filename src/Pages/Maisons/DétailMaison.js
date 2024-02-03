import React, { useEffect, useState } from "react";
import NavbarAccueil from "../../Components/Navbars/NavbarAccueil/NavbarAccueil";
import Footer from "../../Components/Footer/Footer";
import Underline from "../../Components/Underline/Underline";
import detaimaison from "../../fichiers/bann accueil.jpeg";
import { Button, Image } from "react-bootstrap";
import "./DétailMaison.css";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faGlobe,
  faHouse,
  faLocationDot,
  faSink,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function DétailMaison() {
  const { id } = useParams();
  const [maisonDetails, setMaisonDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchMaisonDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/maison/detail/${id}`
        );

        if (response.data.maison) {
          setMaisonDetails(response.data.maison);
          console.log(response.data, "ici la reponse de detail");
        } else {
          // console.error("La réponse de détail est undefined ou null.");
        }
      } catch (error) {
        // console.error(
        //   "Erreur lors de la récupération des détails de la maison:",
        //   error
        // );
      } finally {
        setLoading(false);
      }
    };

    fetchMaisonDetails();
  }, [id]);

  console.log("maisonDetails:", maisonDetails);

  console.log("maisonDetails:", maisonDetails);

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

  return (
    <div>
      <NavbarAccueil />
      <div id="content-main-detail-maison-content">
        <Underline text="Detail maison" />
        <div className="d-flex content-main-detailmaison container ">
          <div className="one-img-left">
            <div className="img-main-detail-maison">
              <Image
                src={maisonDetails && maisonDetails.image}
                className="content-img-detail-maison1"
              />
            </div>
            {/* <div className='d-flex justify-content-between mt-4'>
            <div><Image  src={detaimaison} className='image-intermédiaire' /></div>
            <div><Image  src={detaimaison} className='image-intermédiaire' /></div>
            <div><Image  src={detaimaison} className='image-intermédiaire' /></div>
           
          </div> */}
          </div>
          <div className="second-img-right">
            <div className="second-img-right1">
              <h1>Maison</h1>
              <p>{maisonDetails && maisonDetails.description}</p>
              <div className="d-flex justify-content-evenly">
                <div>
                  <div>
                    <span>
                      <FontAwesomeIcon icon={faGlobe} id="icon-details-right" />
                    </span>
                    <span>{maisonDetails && maisonDetails.superficie} m2</span>
                  </div>
                  <div>
                    <span>
                      <FontAwesomeIcon icon={faTag} id="icon-details-right" />
                    </span>
                    <span>{maisonDetails && maisonDetails.prix} FCFA</span>
                  </div>
                  <div>
                    <span>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        id="icon-details-right"
                      />
                    </span>
                    <span>{maisonDetails && maisonDetails.addresse}</span>
                  </div>
                </div>
                <div>
                  <div>
                    <span>
                      <FontAwesomeIcon icon={faHouse} id="icon-details-right" />
                    </span>{" "}
                    Categorie:
                    {maisonDetails.categories_id &&
                      categories &&
                      categories.map((cat, index) => {
                        // Vérifiez si la catégorie actuelle correspond à la catégorie de la maison
                        if (cat.id === maisonDetails.categories_id) {
                          return (
                            <span key={index} value={cat.id}>
                              {cat.titre}
                            </span>
                          );
                        }
                        return null;
                      })}
                  </div>
                  <div></div>
                  <div>
                    <span>
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        id="icon-details-right"
                      />
                    </span>
                    <span>
                      {" "}
                      Date construction: {maisonDetails.annee_construction}
                    </span>
                  </div>
                  {/* <div><span><FontAwesomeIcon icon={faSink} id='icon-details-right' /></span><span>10 Salles de bains</span></div> */}
                </div>
              </div>
              <div className="d-flex justify-content-center mt-5 btn-content">
                <Button
                  id="btn-btn-ajouter-panier "
                  className="w-100"
                  style={{ backgroundColor: "#D46F4D", border: "none" }}
                >
                  <Link
                    to={"/panier"}
                    style={{ textDecoration: "none", color: "white" }}
                    id="panier-btn-hover"
                  >
                    Plus d'infos
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
