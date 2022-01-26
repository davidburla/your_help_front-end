import React, { Component } from 'react';
import OfferServices from '../../services/OfferServices';
import OfferCardUI from './OfferCardUI'
import '../Person/PersonCard-Style.css'

class ListOfferComponent extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            offers:[]
        }
        this.addOffer = this.addOffer.bind(this);
        this.updateOffer = this.updateOffer.bind(this);
        this.deleteOffer = this.deleteOffer.bind(this);
    }
    componentDidMount()
    {
        OfferServices.getOffers().then((res) => {
          this.setState({offers: res.data});
        });
        console.log(this.state.offers);
    }
    addOffer()
    {
        this.props.history.push('/add-offer');
    }
    updateOffer(id)
    {
        this.props.history.push(`/update-offer/${id}`);
    }
    viewOffer(id)
    {
        console.log("offer in list", id);
        this.props.history.push(`/view-offer/${id}`);
    }
    deleteOffer(id)
    {
        this.props.history.push(`/delete-offer/${id}`);
    }

    renderCard(offer)
    {
      console.log(offer)
      return (<OfferCardUI offer={offer}/>)
    }
    render() {
      console.log("render");
        return (
            <div>
                <h2 className="text-center"> Oferte </h2>
                <div className = "row">
                    <button className = "btn btn-primary" onClick={this.addOffer}> Add Offer </button>
                </div>
                
                <div  className= "container-fluid d-flex justify-content-center">
                  <div className='row'>
                    {this.state.offers.map(this.renderCard)}
                {/* <div  className= "row">
                    <table className = "table table-stripped table-bordered">
                        <thead>
                            <tr>
                                <th> Nume </th>
                                <th> Categorie </th>
                                <th> Pret </th>
                                <th> Descriere </th>
                                <th> Zona </th>
                                <th> IdPersoana </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.offers.map(
                                    offer => 
                                    <tr key = {offer.offerId}>
                                        <td> {offer.name} </td>
                                        <td> {offer.category_name} </td>
                                        <td> {offer.price} </td>
                                        <td> {offer.description} </td>
                                        <td> {offer.zona} </td>
                                        <td> {offer.personId} </td>
                                        <td> 
                                            <button className = "btn btn-primary" onClick= {() => this.updateOffer(offer.offerId)}> Update </button>
                                            
                                            <button className = "btn btn-primary" onClick= {() => this.viewOffer(offer.offerId)}> View </button>
                                            <button className = "btn btn-primary" onClick= {() => this.deleteOffer(offer.offerId)}> Delete </button>
                                        </td>
                                    </tr>
                                    
                                )
                            }
                        </tbody>
                    </table>
                </div> */}
                </div>
              </div>
            </div>
        );
    }
}

export default ListOfferComponent;