import React, { Component } from 'react';
import FavoriteService from '../../services/FavoriteService';
import FavoriteCardUI from './FavoriteCardUI'

class ListFavoriteComponent extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            favorites:[]
        }
        this.addFavorite = this.addFavorite.bind(this);
        this.deleteFavorite = this.deleteFavorite.bind(this);
    }
    componentDidMount()
    {
      console.log("in component Favorite");
        FavoriteService.getFavorite().then((res) => {
            this.setState({favorites: res.data});
        });
    }
    addFavorite()
    {
        this.props.history.push('/add-favorite');
    }
    deleteFavorite(id)
    {
        this.props.history.push(`/delete-favorite/${id}`);
    }
    renderCard (favorite)
    {
        return (<FavoriteCardUI favorite={favorite}/>)
    }
    render() {
        return (
            <div>
                <h2 className="text-center"> Favorites list </h2>
                <div className = "row">
                    <button className = "btn btn-primary" onClick={this.addFavorite}> Add Favorite </button>
                </div>
                <div  className= "container-fluid d-flex justify-content-center">
                    <div className='row'>
                        {this.state.favorites.map(this.renderCard)}
                    </div>
                </div>
            </div>
        );
    }
}

export default ListFavoriteComponent;