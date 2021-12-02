import React, { Component } from 'react';
import PersonServices from '../services/PersonServices';

class ListPersonComponent extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            persons:[]
        }
        this.addPerson = this.addPerson.bind(this);
        this.updatePerson = this.updatePerson.bind(this);
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
        this.props.history.push(`/view-person/${id}`);
    }
    render() {
        return (
            <div>
                <h2 className="text-center"> Persons list </h2>
                <div className = "row">
                    <button className = "btn btn-primary" onClick={this.addPerson}> Add Person </button>
                </div>
                <div  className= "row">
                    <table className = "table table-stripped table-bordered">
                        <thead>
                            <tr>
                                <th> Nume </th>
                                <th> Prenume </th>
                                <th> Email </th>
                                <th> Telefon </th>
                                <th> Actions </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.persons.map(
                                    person => 
                                    <tr key = {person.id}>
                                        <td> {person.nume} </td>
                                        <td> {person.prenume} </td>
                                        <td> {person.email} </td>
                                        <td> {person.telefon} </td>
                                        <td> 
                                            <button className = "btn btn-primary" onClick= {() => this.updatePerson(person.id)}> Update </button>
                                            
                                            <button className = "btn btn-primary" onClick= {() => this.viewPerson(person.id)}> View </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListPersonComponent;