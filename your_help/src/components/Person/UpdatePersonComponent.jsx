import React, { Component } from 'react';
import PersonServices from '../../services/PersonServices';

class UpdatePersonComponent extends Component {
  constructor(props)
  {
      super(props)
      console.log("in update person: ", this.props);
      this.state = {
        id: this.props.match.params.id,
        nume: '',
        prenume: '',
        email: '',
        password: '',
        telefon: '',
        isDeleted: ''
      }
      this.changeNumeHandler = this.changeNumeHandler.bind(this);
      this.changePrenumeHandler = this.changePrenumeHandler.bind(this);
      this.changeEmailHandler = this.changeEmailHandler.bind(this);
      this.changeParolaHandler = this.changeParolaHandler.bind(this);
      this.changeTelefonHandler = this.changeTelefonHandler.bind(this);

      this.updatePerson = this.updatePerson.bind(this);
  }

  componentDidMount()
  {
    PersonServices.getPersonById(this.state.id).then( (res) => {
      let pers = res.data;
      console.log("person: ", pers);
      this.setState(
        {
          id: pers.personId,
          nume: pers.name,
          prenume: pers.prename,
          email: pers.email,
          password: pers.password,
          telefon: pers.phone,
          isDeleted: pers.isDeleted
        });
    });
  }

  updatePerson = ( event ) => {
    event.preventDefault();
    let person = {personId: this.state.id, name: this.state.nume, prename: this.state.prenume,
      email: this.state.email, password: this.state.password, phone: this.state.telefon,
      isDeleted: this.state.isDeleted};
    console.log('person => ' + JSON.stringify(person));
      

    PersonServices.updatePerson(person).then( res => {
       this.props.history.push('/persons');
    });

  }

  changeNumeHandler = ( event ) => {
    this.setState({nume: event.target.value});
  }
  changePrenumeHandler = ( event ) => {
    this.setState({prenume: event.target.value});
  }
  changeEmailHandler = ( event ) => {
    this.setState({email: event.target.value});
  }
  changeParolaHandler = ( event ) => {
    this.setState({password: event.target.value});
  }
  changeTelefonHandler = ( event ) => {
    this.setState({telefon: event.target.value});
  }

  cancel()
  {
    this.props.history.push('/persons');
  }
  render() {
    return (
      <div>
        <div className = "container">
          <div className = "row">
            <div className = "card col-md-6 offset-md-3 offset-md-3">
              <h3 className = "text-center"> Update person </h3>
              <div className = "card-body">
                <form action="">
                  <div className = "form-group">
                    <label> Nume: </label>
                    <input placeholder = "nume" name="nume" className = "form-control"
                      value = {this.state.nume} onChange={this.changeNumeHandler}/>
                  </div>
                  <div className = "form-group">
                    <label> Prenume: </label>
                    <input placeholder = "prenume" name="prenume" className = "form-control"
                      value = {this.state.prenume} onChange={this.changePrenumeHandler}/>
                  </div>
                  <div className = "form-group">
                    <label> Email: </label>
                    <input placeholder = "email" name="email" className = "form-control"
                      value = {this.state.email} onChange={this.changeEmailHandler}/>
                  </div>
                  <div className = "form-group">
                    <label> Parola: </label>
                    <input placeholder = "password" name="password" className = "form-control"
                      value = {this.state.password} onChange={this.changeParolaHandler}/>
                  </div>
                  <div className = "form-group">
                    <label> Telefon: </label>
                    <input placeholder = "telefon" name="telefon" className = "form-control"
                      value = {this.state.telefon} onChange={this.changeTelefonHandler}/>
                  </div>

                  <button className = "btn btn-success" onClick={this.updatePerson}>Update</button>
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

export default UpdatePersonComponent;