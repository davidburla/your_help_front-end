import React, {Component} from "react";

import personIcon from "../../asset/person-icon.jpg"
import "../Person/PersonCard-Style.css"

const personCard = props =>{
  let view_offer = "/view-offer/" + props.offer.offerId;
  let delete_offer = "/delete-offer/" + props.offer.offerId;
  return(
  <div className="col-md-4" key={props.offer.offerId}>
    <div className="card text-center shadow">
      <div className="card-body text-dark">
        <h2 className="card-title"> {props.offer.name} {props.offer.offerId} </h2>
        <h4> <u>Categorie:</u> <i>{props.offer.category_name} </i></h4>
        <h4> <u>Persona:</u> <i>{props.offer.namePerson} {props.offer.prenamePerson} </i></h4>
        <h4> <u>Price:</u> <i>{props.offer.price}</i> </h4>
        <a href={view_offer} className="btn btn-outline-success"> Detalii </a>
        <a href={delete_offer} className="btn btn-outline-danger"> Elimina </a>
      </div>
    </div>
  </div>
  );
}

export default personCard;