import React, { useEffect, useState } from 'react'
import Pagination from '../../Components/Pagination/Pagination';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function GestionNewsLetter() {
  
    // Tableau ou stocker la liste des emails
    const [emailValues, setEmailValues] = useState([]);
    // recherche champ input
    const [searchValue, setSearchValue] = useState('');
        // recherche
    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };
  
    const filteredEmailValues = emailValues.filter((emailValue) =>
    emailValue.email.toLowerCase().includes(searchValue.toLowerCase()) ||
    emailValue.created_at.toLowerCase().includes(searchValue.toLowerCase())
  );
  
  const displayEmailValues = searchValue === '' ? emailValues : filteredEmailValues;
  
  
  // pour la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const emailValuesParPage = 4;
  
  // pagination
  const indexOfLastEmailValue = currentPage * emailValuesParPage;
  const indexOfFirstEmailValue = indexOfLastEmailValue - emailValuesParPage;
  const currentEmailValues =filteredEmailValues.slice(indexOfFirstEmailValue, indexOfLastEmailValue);
  
  const totalPaginationPages = Math.ceil(emailValues.length /emailValuesParPage);


  // pour lister les emails avec avec cet useEffet on recupere l'ensemble des email
  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/newsletter/liste"
        );
        
        setEmailValues(response.data.listeEmails);
        console.log(response, 'reponse')
  
        console.log(emailValues);
      } catch (error) {
        console.error("Erreur lors de la récupération des emails:", error);

      }
    };
    fetchEmail();
  }, []);

  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const day = date.getDate().toString().padStart(2, '0'); 
  
    return `${year}-${month}-${day}`;
  };
  


  return (
    <div>
         <div className="flex-grow-1 d-flex justify-content-end ">
          <div className="champsRecherche mt-2 mb-3 w-50">
            <Form>
              <div
                className="input-group flex-nowrap "
                style={{ borderColor: "#d46f4d" }}
              >
                <Form.Control
                  type="search"
                  className="form-control w-50   "
                  placeholder="Rechercher un utilisateur"
                  aria-label="user"
                  aria-describedby="addon-wrapping"
                  value={searchValue}
                  onChange={handleSearchChange}
                />
                <span
                  className="input-group-text text-white me-4"
                  id="addon-wrapping"
                  style={{ backgroundColor: "#d46f4d" }}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
              </div>
            </Form>
          </div>
        </div>
       <div className="mt-4 ms-3  me-3">
        <table className="table border  border-1">
          <thead
            className=""
            id="hearder-color"
            style={{ backgroundColor: "#d46f4d" }}
          >
            <tr>
              <th style={{ backgroundColor: "#d46f4d", color: "#fff" }}>
                Email
              </th>
              <th style={{ backgroundColor: "#d46f4d", color: "#fff" }}>
                Date creation
              </th>
              <th
                className="d-flex  justify-content-center "
                style={{
                  backgroundColor: "#d46f4d",
                  color: "#fff",
                  marginLeft: "3rem",
                }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentEmailValues.map((emailValue) => (
              <tr key={emailValue.id}>
                <td style={{ color: "black" }}>{emailValue.email}</td>
                <td style={{ color: "black" }}>{formatDate(emailValue.created_at)}</td>
                <td className="d-flex justify-content-evenly">
                  <Button
                    variant="primary"
                   
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid #d46f4d",
                      color: "#d46f4d",
                    }}
                    id="buttonModifier"
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
         currentPage={currentPage}
         totalPaginationPages={totalPaginationPages}
         setCurrentPage={setCurrentPage}
         
         />
      </div>
    </div>
  )
}
