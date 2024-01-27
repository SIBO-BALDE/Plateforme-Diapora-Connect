import React from 'react'
import './Pagination.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Pagination() {
  return (
    <div>
     <nav aria-label="Page navigation example" id='navigation'>
        <ul className="pagination">
            <li className="page-item" id='page-item'><a className="page-link" href="#"><FontAwesomeIcon icon={faChevronLeft} id='iconpagination' /> </a></li>
            <li className="page-item" id='page-item1'><a className="page-link" href="#">1</a></li>
            <li className="page-item" id='page-item'><a className="page-link" href="#">2</a></li>
            <li className="page-item" id='page-item'><a className="page-link" href="#">3</a></li>
            <li className="page-item" id='page-item'><a className="page-link" href="#"><FontAwesomeIcon icon={faChevronRight} id='iconpagination'/> </a></li>
        </ul>
    </nav>
    </div>
  )
}
