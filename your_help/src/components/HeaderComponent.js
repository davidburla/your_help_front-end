 import React, { Component } from 'react';
 
 class HeaderComponent extends Component {
    constructor(props)
    {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/persons">Persoane</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/offers">Servicii</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/favorites">Favorite</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Despre</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </nav>
                </header>
            </div>
        );
    }
 }
 
 export default HeaderComponent;