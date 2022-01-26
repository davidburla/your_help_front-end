import React, { Component } from 'react';
import OfferServices from '../../services/OfferServices';

class ViewOfferComponent extends Component {
  constructor(props)
  {
      super(props)
      console.log("in view Offer: ", this.props);
      this.state = {
        id: this.props.match.params.id,
        name: '',
        category: '',
        price: '',
        description: '',
        zona: '',
        namePersona:'',
        prenamePerson: '',
        emailPerson: '',
        phonePerson: ''
      }
  }

  componentDidMount()
  {
    OfferServices.getOfferById(this.state.id).then( (res) => {
      let offer = res.data;
      console.log("Offer: ", + JSON.stringify(offer));
      this.setState(
        {
          name: offer.name,
          category: offer.category_name,
          price: offer.price,
          description: offer.description,
          zona: offer.zona,
          namePersona: offer.namePerson,
          prenamePerson: offer.prenamePerson,
          emailPerson: offer.emailPerson,
          phonePerson: offer.phonePerson
        });
    });
  }

  cancel()
  {
    this.props.history.push('/Offers');
  }
  render() {
    return (
      <div>
        <div className = "container">
          <div className = "row">
            <div className = "card col-md-6 offset-md-3 offset-md-3">
              <h3 className = "text-center"> Detalii Oferta </h3>
              <div className = "card-body">
                <form action="">
                  <div className = "form-group">
                    <label> Nume: </label>
                    <input placeholder = "nume" name="nume" className = "form-control"
                      value = {this.state.name} />
                  </div>
                  <div className = "form-group">
                    <label> Categorie: </label>
                    <input placeholder = "categorie" name="categorie" className = "form-control"
                      value = {this.state.category} />
                  </div>
                  <div className = "form-group">
                    <label> Pret: </label>
                    <input placeholder = "pret" name="pret" className = "form-control"
                      value = {this.state.price} />
                  </div>
                  <div className = "form-group">
                    <label> Descriere: </label>
                    <input placeholder = "descriere" name="descriere" className = "form-control"
                      value = {this.state.description} />
                  </div>
                  <div className = "form-group">
                    <label> Persoana: </label>
                    <input placeholder = "numePers" name="numePers" className = "form-control"
                      value = {this.state.namePersona} />
                  </div>
                  <div className = "form-group">
                    <label> Email: </label>
                    <input placeholder = "email" name="email" className = "form-control"
                      value = {this.state.emailPerson} />
                  </div>
                  <div className = "form-group">
                    <label> Telefon: </label>
                    <input placeholder = "telefon" name="telefon" className = "form-control"
                      value = {this.state.phonePerson} />
                  </div>
                  <button className = "btn btn-success" onClick = {this.cancel.bind(this)} style = {{marginLeft: "10px"}}>OK</button>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewOfferComponent;