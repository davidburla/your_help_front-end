import React, { Component } from 'react';

class FooterComponent extends Component {
  constructor(props)
  {
      super(props)
      this.state = {
      }
  }

  render() {
    return (
      <div>
        <footer className = "footer">
          <span className = "text-muted"> All Rights Reserved David Burla - Provided by Belciug-Giza Felicia</span>
          <br/>
          <span className = "text-muted"> Dezvoltat in cadrul laboratorului PPAW  </span>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;