import React from 'react'
import axios from "../../../Pages/Authentification/AxiosAuthIntercepteur";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';

export default function ButtonLogOut({ setIsAuthenticated }) {

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
  
            // Appeler la fonction setIsAuthenticated avec la valeur false pour indiquer la déconnexion réussie
            setIsAuthenticated(false);
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
    <div>
      <div className="d-flex me-3 " id='btnpabiernav'>
           
           <Button className=' btn btn-connection1' onClick={handleLogout} ><Nav.Link href='/connexion' >Deconnexion</Nav.Link></Button>
         </div>
    </div>
  )
}
