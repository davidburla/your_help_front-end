import React, { Component } from 'react';
import PersonServices from '../../services/PersonServices';
import PersonCardUI from './PersonCardUI';
import './PersonCard-Style.css'
class ListPersonComponent extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            persons:[]
        }
        this.addPerson = this.addPerson.bind(this);
        this.updatePerson = this.updatePerson.bind(this);
        this.deletePerson = this.deletePerson.bind(this);
    }
    componentDidMount()
    {
        PersonServices.getPersons().then((res) => {
            this.setState({persons: res.data});
        });
    }
    addPerson()
    {
        this.props.history.push('/add-person');
    }
    updatePerson(id)
    {
        this.props.history.push(`/update-person/${id}`);
    }
    viewPerson(id)
    {
        console.log("peson in list", id);
        this.props.history.push(`/view-person/${id}`);
    }
    deletePerson(id)
    {
        this.props.history.push(`/delete-person/${id}`);
    }

    renderCard (person)
    {
        return (<PersonCardUI person={person}/>)
    }

    render() {
        return (
            <div>
                <h2 className="text-center"> Persone </h2>
                <div className = "row">
                    <button className = "btn btn-primary" onClick={this.addPerson}> Add Person </button>
                </div>
                <div  className= "container-fluid d-flex justify-content-center">
                    <div className='row'>
                        {this.state.persons.map(this.renderCard)}
                    </div>
                </div>
            </div>
        );
    }
}

export default ListPersonComponent;