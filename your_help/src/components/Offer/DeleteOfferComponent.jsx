import React, { Component } from 'react';
import OfferService from '../../services/OfferServices';

class DeleteOfferComponent extends Component {
  constructor(props)
  {
      super(props)
      console.log("in delete Offer: ", this.props);
      this.state = {
        id: this.props.match.params.id
      }
  }

  componentDidMount()
  {
  }

  delete = (event) => 
  {
    event.preventDefault();

    OfferService.deleteOffer(this.state.id).then( res => {
      console.log("response" + res);
      this.props.history.push('/offers');
    });
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
              <h3 className = "text-center"> Verificare stergere </h3>
              <div className = "card-body">
                <form action="">
                  <div className = "form-group">
                    <label> Sigur stergeti? </label>
                  </div>
                  <button className = "btn btn-success" onClick = {this.cancel.bind(this)} style = {{marginLeft: "10px"}}>Nu</button>
                  <button className = "btn btn-danger" onClick = {this.delete.bind(this)} style = {{marginLeft: "10px"}}>Da</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteOfferComponent;