import { Route, Routes } from "react-router-dom";
import "./App.css";
import Inscription from "./Pages/Authentification/Inscription";
import Accueil from "./Pages/Accueil/Accueil";
import Connexion from "./Pages/Authentification/Connexion";
import Contacts from "./Pages/Contacts/Contacts";
import DashbordAdmin from "./Pages/DashbordAdmin/DashbordAdmin";
import Maisons from "./Pages/Maisons/Maisons";
import DetailMaison from "./Pages/Maisons/DétailMaison";
import Services from "./Pages/Services/Services";
import DetailServices from "./Pages/Services/DetailServices";
import Terrains from "./Pages/Terrains/Terrains";
import DetailTerrain from "./Pages/Terrains/DetailTerrain";
import Apropos from "./Pages/Apropos/Apropos";
// import Panier from "./Pages/Panier/Panier";
// import DetailArticles from "./Pages/Articles/DetailArticle";
import DetailFavorie from "./Pages/GestionFavorie/DetailFavorie";
import DetailServicesAdmin from "./Pages/GestionServices/DetailServicesAdmin";
import DetailMaisonAdmin from "./Pages/GestionMaison/DetailMaisonAdmin";
// import DetailTerrainAdmin from "./Pages/GestionMaison/DetailTerrainAdmin";



function App() {
  return (
    <div>
      <Routes>
        {/* Page utilisateur */}
        <Route path="/" element={<Accueil />}></Route>
        <Route path="inscription" element={<Inscription />}></Route>
        <Route path="connexion" element={<Connexion />}></Route>
        <Route path="contact" element={<Contacts />}></Route>
        <Route path="dashbordAdmin" element={<DashbordAdmin />}></Route>
        <Route path="maisons" element={<Maisons />}></Route>
        <Route path="detailmaison" element={<DetailMaison />}></Route>
        <Route path="services" element={<Services />}></Route>
        <Route path="detailservices" element={<DetailServices />}></Route>
        <Route path="terrains" element={<Terrains />}></Route>
        <Route path="detailterrain" element={<DetailTerrain />}></Route>
        
        <Route path="/a-propos" element={<Apropos />}></Route>
        {/* <Route path="/panier" element={<Panier />}></Route> */}
        {/* <Route path='/article' element={<Articles />}></Route> */}
        {/* <Route path="/detailarticle" element={<DetailArticles />}></Route> */}

        {/* Composant coté admin */}
        <Route path="detailFavorie" element={<DetailFavorie/>}></Route>
        <Route path="detailservicesadmin" element={<DetailServicesAdmin/>}></Route>
        <Route path="detailmaisonadmin" element={<DetailMaisonAdmin/>}></Route>
        {/* <Route path="detailterrainAdmin" element={<DetailTerrainAdmin/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;



// import Articles from "./Pages/Articles/Articles";
// import GestionMaison from "./Pages/GestionMaison/GestionMaison";
// import GestionCommentaire from "./Pages/GestionCommentaire/GestionCommentaire";
// import GestionServices from "./Pages/GestionServices/GestionServices";
// import GestionArticles from "./Pages/GestionArticles/GestionArticles";
// import GestionTerrain from "./Pages/GestionTerrain/GestionTerrain";
// import GestionUtilisateurs from "./Pages/GestionUtilisateurs/GestionUtilisateurs";
// import Panier from "./Pages/Panier/Panier";
// import GestionPayment from "./Pages/GestionPayment/GestionPayment";