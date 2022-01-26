import React, {Component} from "react";

import personIcon from "../../asset/person-icon.jpg"
import "./PersonCard-Style.css"

const personCard = props =>{
  let view_person = "/view-person/"+props.person.personId;
  let delete_person = "/delete-person/"+props.person.personId;
  return(
  <div className="col-md-4" key={props.person.personId}>
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={personIcon} alt="PersonIcon" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title"> {props.person.name} {props.person.prename} {props.person.personId} </h4>
        <p className="card-text text-secondary">
          Detalii persoana
        </p>
        <a href={view_person} className="btn btn-outline-success"> Detalii </a>
        <a href={delete_person} className="btn btn-outline-danger"> Elimina </a>
      </div>
    </div>
  </div>
  );
}

export default personCard;