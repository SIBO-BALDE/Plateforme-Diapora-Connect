import { faChartLine, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Tableaux.css";

export default function Tableaux() {
  return (
    <div
      className="d-flex justify-content-evenly"
      style={{ height: "content" }}
    >
      <div className="card1-admin">
        <div className="d-flex justify-content-around mt-2 ">
          <div>
            <FontAwesomeIcon icon={faHome} id="icon-content-admin" />
          </div>
          <div>
            <h4>Maisons construits</h4>
          </div>
        </div>
        <h1 className="text-center mt-1 ">150</h1>
      </div>
      <div className="card1-admin">
        <div className="d-flex justify-content-around mt-2 ">
          <div>
            <FontAwesomeIcon icon={faHome} id="icon-content-admin" />
          </div>
          <div>
            <h4>Maisons construits</h4>
          </div>
        </div>
        <h1 className="text-center mt-1 ">150</h1>
      </div>
      <div className="card1-admin">
        <div className="d-flex justify-content-around mt-2 ">
          <div>
            <FontAwesomeIcon icon={faHome} id="icon-content-admin" />
          </div>
          <div>
            <h4>Maisons construits</h4>
          </div>
        </div>
        <h1 className="text-center mt-1 ">150</h1>
      </div>
    </div>
  );
}
