import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function DetailTerrainAdmin() {
  // use params nous permet de recuperer les paramettre de mon url qui sont dans l'url comme l'id
  const { id } = useParams();
  const [terrainDetails, setTerrainDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTerrDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/terrain/detail/${id}`
        );

        if (response.data.terrain) {
          setTerrainDetails(response.data.terrain);
          console.log(response.data, "ici la reponse de detail");
        } else {
          console.error("La réponse de détail est undefined ou null.");
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails du terrain:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTerrDetails();
  }, [id]);

  console.log("terrainDetails:", terrainDetails);

  console.log("terrainDetails:", terrainDetails);

  return (
    <div>
      <p className="para">{terrainDetails && terrainDetails.addresse}</p>
      <p className="para">{terrainDetails && terrainDetails.superficie}</p>
      <p className="para">{terrainDetails && terrainDetails.prix}</p>
      <Image src={terrainDetails && terrainDetails.image} />
      <p className="para">{terrainDetails && terrainDetails.description}</p>
    </div>
  );
}
