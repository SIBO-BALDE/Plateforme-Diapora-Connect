import React, { useEffect, useState } from 'react'
import "./DetailMessage.css";
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMessage } from '@fortawesome/free-solid-svg-icons';

export default function DetailMessageAdmin() {



    // tableau ou stocker la liste des messages
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchMessage = async () => {
      const role = localStorage.getItem("rolecle");
      const token = localStorage.getItem("tokencle");

      try {
        if (token || role === "admin") {
          const response = await axios.get(
            `http://localhost:8000/api/messages/details/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setMessages(response.data.messages);

          console.log(messages);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des messages:", error);
      }
    };
    fetchMessage();
  }, []);




 

  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  };
  return (
    <div>
    <div className="container profile-page">
    <div className="row">
        <div className="col-xl-6 col-lg-7 col-md-12">
            <div className="card profile-header">
                <div className="body">
                <Link to={'/dashbordAdmin'} 
                    style={{color:'#D46F4D', textDecoration:'none', fontWeight:'bold', marginTop:'20px'}}>
                    <FontAwesomeIcon  icon={faHouse}/> DASHBOARD ADMIN</Link>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="profile-image float-md-right"> <FontAwesomeIcon icon={faMessage} /></div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-12">
                            <h4 className="m-t-0 m-b-0"><strong>{messages.email} </strong></h4>
                            <h4 className="m-t-0 m-b-0"><strong>{formatDate(messages.created_at)} </strong></h4>
                            <p>{messages.message} </p>
                        </div>                
                    </div>
                </div>                    
            </div>
        </div>
      
    </div>
    </div>
    </div>
  )
}
