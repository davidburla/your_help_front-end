import React, { Component } from 'react';
import FavoriteServices from '../../services/FavoriteService';

class CreateFavoriteComponent extends Component {
  constructor(props)
  {
      super(props)
      this.state = {
        personId:'',
        offerId:''
      }
      this.changeFavoriteIdHandler = this.changeFavoriteIdHandler.bind(this);
      this.changeFavoriteOfferIdHandler = this.changeFavoriteOfferIdHandler.bind(this);
      this.saveFavorite = this.saveFavorite.bind(this);
  }

  saveFavorite = ( event ) => {
    event.preventDefault();
    let Favorite = {personId: this.state.personId, offerId: this.state.offerId};
    console.log('Favorite => ' + JSON.stringify(Favorite));
      FavoriteServices.createFavorite(Favorite).then( res => {
        this.props.history.push('/favorites');
      });
  }
  changeFavoriteIdHandler = ( event ) => {
    this.setState({personId: event.target.value});
  }

  changeFavoriteOfferIdHandler = ( event ) => {
    this.setState({offerId: event.target.value});
  }

  cancel()
  {
    this.props.history.push('/favorites');

  }
  render() {
    return (
      <div>
        <div className = "container">
          <div className = "row">
            <div className = "card col-md-6 offset-md-3 offset-md-3">
              <h3 className = "text-center"> Add Favorite </h3>
              <div className = "card-body">
                <form action="">
                  <div className = "form-group">
                    <label> Id Persoana: </label>
                    <input placeholder = "personId" name="personId" className = "form-control"
                      value = {this.state.personId} onChange={this.changeFavoriteIdHandler}/>
                  </div>
                  <div className = "form-group">
                    <label> Id Oferta: </label>
                    <input placeholder = "offerId" name="offerId" className = "form-control"
                      value = {this.state.offerId} onChange={this.changeFavoriteOfferIdHandler}/>
                  </div>

                  <button className = "btn btn-success" onClick={this.saveFavorite}>Save</button>
                  <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft: "10px"}}>Cancel</button>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateFavoriteComponent;