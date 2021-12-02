import React, { Component } from 'react';
import PersonServices from '../services/PersonServices';

class ViewPersonComponent extends Component {
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
        telefon: ''
      }
  }

  componentDidMount()
  {
    PersonServices.getPersonById(this.state.id).then( (res) => {
      let pers = res.data;
      this.setState(
        {
          nume: pers.nume,
          prenume: pers.prenume,
          email: pers.email,
          password: pers.password,
          telefon: pers.telefon
        });
    });
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
              <h3 className = "text-center"> Details person </h3>
              <div className = "card-body">
                <form action="">
                  <div className = "form-group">
                    <label> Nume: </label>
                    <input placeholder = "nume" name="nume" className = "form-control"
                      value = {this.state.nume} />
                  </div>
                  <div className = "form-group">
                    <label> Prenume: </label>
                    <input placeholder = "prenume" name="prenume" className = "form-control"
                      value = {this.state.prenume} />
                  </div>
                  <div className = "form-group">
                    <label> Email: </label>
                    <input placeholder = "email" name="email" className = "form-control"
                      value = {this.state.email} />
                  </div>
                  <div className = "form-group">
                    <label> Parola: </label>
                    <input placeholder = "password" name="password" className = "form-control"
                      value = {this.state.password} />
                  </div>
                  <div className = "form-group">
                    <label> Telefon: </label>
                    <input placeholder = "telefon" name="telefon" className = "form-control"
                      value = {this.state.telefon} />
                  </div>
                  <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft: "10px"}}>OK</button>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPersonComponent;