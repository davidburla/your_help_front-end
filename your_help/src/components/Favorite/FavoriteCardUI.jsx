import React, {Component} from "react";

import personIcon from "../../asset/person-icon.jpg"
import "../Person/PersonCard-Style.css"

const favoriteCard = props =>{
  let view_offer = "/view-offer/" + props.favorite.offerId;
  let delete_favorite = "/delete-favorite/" + props.favorite.favoriteId;
  return(
  <div className="col-md-4" key={props.favorite.offerId}>
    <div className="card text-center shadow">
      <div className="card-body text-dark">
        <h2 className="card-title"> {props.favorite.nameOffer} </h2>
        <h4> <u>Categorie:</u> <i>{props.favorite.category_nameOffer} </i></h4>
        <h4> <u>Persoana:</u> <i>{props.favorite.namePersonOffer} {props.favorite.prenamePersonOffer} </i></h4>
        <h4> <u>Price:</u> <i>{props.favorite.priceOffer}</i> </h4>
        <a href={view_offer} className="btn btn-outline-success"> Detalii </a>
        <a href={delete_favorite} className="btn btn-outline-danger"> Elimina </a>
        <br/>
        <h4> <u>Favorit Person:</u> <i>{props.favorite.namePerson} {props.favorite.prenamePerson}</i> </h4>
      </div>
    </div>
  </div>
  );
}

export default favoriteCard;