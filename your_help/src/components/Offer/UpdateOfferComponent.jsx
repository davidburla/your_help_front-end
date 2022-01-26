import React, { Component } from 'react';
import OfferService from '../../services/OfferServices';

class UpdateOfferComponent extends Component {
  constructor(props)
  {
      super(props)
      this.state = {
        id: this.props.match.params.id,
        name: '',
        category: '',
        price: '',
        description: '',
        zona: '',
        personId: '',
        isValid: true
      }
      this.changeNameHandler = this.changeNameHandler.bind(this);
      this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
      this.changePriceHandler = this.changePriceHandler.bind(this);
      this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
      this.changeZonaHandler = this.changeZonaHandler.bind(this);
      this.changePersonIdHandler = this.changePersonIdHandler.bind(this);
      this.updateOffer = this.updateOffer.bind(this);
  }

  componentDidMount()
  {
    OfferService.getOfferById(this.state.id).then( (res) => {
      let offer = res.data;
      console.log("offer: ", offer);
      this.setState(
        {
          name: offer.name,
          category: offer.category_name,
          price: offer.price,
          description: offer.description,
          zona: offer.zona,
          personId: offer.personId
        });
    });
  }

  updateOffer = ( event ) => {
    event.preventDefault();
    let offer = {offerId: this.state.id, name: this.state.name, category_name: this.state.category,
      price: this.state.price, description: this.state.description, zona: this.state.zona,
      isValid: this.state.isValid, personId: this.state.personId};
    
    console.log('offer => ' + JSON.stringify(offer));
      OfferService.updateOffer(offer).then( res => {
        this.props.history.push('/offers');
      });
  }

  changeNameHandler = ( event ) => {
    this.setState({name: event.target.value});
  }
  changeCategoryHandler = ( event ) => {
    this.setState({category: event.target.value});
  }
  changePriceHandler = ( event ) => {
    this.setState({price: event.target.value});
  }
  changeDescriptionHandler = ( event ) => {
    this.setState({description: event.target.value});
  }
  changeZonaHandler = ( event ) => {
    this.setState({zona: event.target.value});
  }
  changePersonIdHandler = ( event ) => {
    this.setState({personId: event.target.value});
  }

  cancel()
  {
    this.props.history.push('/offers');

  }
  render() {
    return (
      <div>
        <div className = "container">
          <div className = "row">
            <div className = "card col-md-6 offset-md-3 offset-md-3">
              <h3 className = "text-center"> Modifica Oferta </h3>
              <div className = "card-body">
                <form action="">
                  <div className = "form-group">
                    <label> Nume: </label>
                    <input placeholder = "name" name="name" className = "form-control"
                      value = {this.state.name} onChange={this.changeNameHandler}/>
                  </div>
                  <div className = "form-group">
                    <label> Categorie: </label>
                    <input placeholder = "Categorie" name="Categorie" className = "form-control"
                      value = {this.state.category} onChange={this.changeCategoryHandler}/>
                  </div>
                  <div className = "form-group">
                    <label> Descriere: </label>
                    <input placeholder = "Descriere" name="Descriere" className = "form-control"
                      value = {this.state.description} onChange={this.changeDescriptionHandler}/>
                  </div>
                  <div className = "form-group">
                    <label> Pret: </label>
                    <input placeholder = "Pret" name="Pret" className = "form-control"
                      value = {this.state.price} onChange={this.changePriceHandler}/>
                  </div>
                  <div className = "form-group">
                    <label> Zona: </label>
                    <input placeholder = "Zona" name="Zona" className = "form-control"
                      value = {this.state.zona} onChange={this.changeZonaHandler}/>
                  </div>
                  <div className = "form-group">
                    <label> Person Id: </label>
                    <input placeholder = "personId" name="personId" className = "form-control"
                      value = {this.state.personId} onChange={this.changePersonIdHandler}/>
                  </div>

                  <button className = "btn btn-success" onClick={this.updateOffer}>Update</button>
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

export default UpdateOfferComponent;