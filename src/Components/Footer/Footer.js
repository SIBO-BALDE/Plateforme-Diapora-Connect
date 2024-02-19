import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';
import axios from 'axios';

import './Footer.css';
import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';



export default function Footer() {
  

  const [emailData, setEmailData] = useState({
    email: "",
    
  });
  const [emailVal, setEmailVal] = useState([]);

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleSubscribe = async (e) => {
  //   e.preventDefault();
  //   // Envoyer la requête POST vers votre backend avec l'email en utilisant Axios
  //  await axios.post('http://votre-backend.com/newsletter/create', { email })
  //     .then(response => {
  //       // Gérer la réponse du backend (par exemple, afficher un message de succès)
  //       console.log('Réponse du backend:', response.data);
  //     })
  //     .catch(error => {
  //       console.error('Erreur lors de l\'envoi de la newsletter:', error);
  //     });
  // };
  const handleSubscribe = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/newsletter/create",
        emailData
      );

      // Vérifiez si la requête a réussi
      if (response.status === 200) {
        // Ajoutez la nouvelle maison à la liste existante
        setEmailVal([...emailVal, response.data]);
        // Réinitialisez les valeurs du formulaire après avoir ajouté la maison
        setEmailData({
          email: "",
          
        });
        Swal.fire({
          icon: "success",
          title: "Succès!",
          text: "subscription de newsletter a reussi !",
        });
       
      } else {
        console.error("Erreur dans lajout de maison");
      }
    } catch (error) {
      // Gestion des erreurs Axios
      console.error("Erreur Axios:", error);
    }
  };




  return (
<div>
<footer className='mt-5'>
  <div className="Footer_Container">
   <br /> <br />
   {/* <!---------------- Debut Section Newsletters -------------> */}
    <div className="Section_Footer_Newsletters">
      <div className="Section_Footer_Containt">
        <div className="Section_Footer_Newsletters_Text">
          <h2>Inscrivez-Vous a la NewsLetters</h2>
          <p>Inscrivez-vous recevoir toutes les
            nouvelles Actualités !</p>
        </div>
        <div className="Section_Footer_Newsletters_Input">
          <Form>
            <Form.Group>
            <div className='d-flex' id='input-footer-newsletter'>
            <div>
            <Form.Control
             type="email" placeholder="Saisissez Votre e-mail" id="email" 
             value={emailData.titre}
             onChange={(e) =>
              setEmailData({ ...emailData, email: e.target.value })
             }
            
            />
            </div>
          <div id='input-footer-newsletter_btn'>
            <Button  id="incription1"
            onClick={ handleSubscribe}>S'inscrire</Button>
          </div>
            </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
    {/* <!--------------- Fin Section Newsletters ---------------> */}
    <div className="Section_Footer">
      <div className="Section_Footer_logo">
        <h3>Diaspora-Connect</h3>
        <p>Diaspora Connect vous accompagne sur vos projets d’investissement au sénégal</p>
        <span className='Social_Media d-flex'>
        <span className='content-icon-topbar'><FontAwesomeIcon icon={faFacebookF} className='icons-content1' /></span>
            <span className='content-icon-topbar'><FontAwesomeIcon icon={faTwitter} className='icons-content1' /></span>
            <span className='content-icon-topbar'><FontAwesomeIcon icon={faInstagram} className='icons-content1' /></span>
            <span className='content-icon-topbar'><FontAwesomeIcon icon={faLinkedinIn} className='icons-content1' /></span>
        </span>
      </div>
      <div>
        <h3>Liens Utiles</h3>
        <p> <Link to={'/contact'}>Contact</Link> </p>
        <p> <Link to={'/a-propos'}>a-propos</Link> </p>
        <p> <Link to={'/services'}>services</Link> </p>
        
      </div>
      <div>
        <h3>FAQ</h3>
        <p>Qui sommes nous ?</p>
        <p>FAQ</p>
      </div>
      <div>
        <h3>Autre</h3>
        <p><Link to={'/mentionlegal'}>Mention Légale</Link></p>
        <p><Link to={'/confidentialite'}>Confidentialité</Link></p>
        <p><Link to={'conditionutiliation'}>Condition d'utilisation</Link></p>
      </div>
    </div>
    <br />  <br />
    <hr  className='reference'/>
    <p className="Copyright">Copyright &nbsp;<i className="fa-solid fa-copyright"></i> &nbsp;2023 Diaspora-Connect</p>
    <br />
  </div>
</footer>
</div>
  )
}
