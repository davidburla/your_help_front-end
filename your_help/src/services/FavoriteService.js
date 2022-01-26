import axios from 'axios';

const FAVORITE_API_BASE_URL = "http://localhost:8080/api/v1/favorites";
class FavoriteService{
    getFavorite()
    {
      console.log("get favorites");
        return axios.get(FAVORITE_API_BASE_URL+ '/valid');
    }
    createFavorite(favorite)
    {
        return axios.post(FAVORITE_API_BASE_URL, favorite);
    }
    // getPersonById(personId)
    // {
    //     return axios.get(PERSON_API_BASE_URL + '/' + personId);
    // }
    // updatePerson(person, personId)
    // {
    //     console.log("person > " + JSON.stringify(person) + " - id: " + personId);
    //     return axios.put(PERSON_API_BASE_URL + '/' + personId, person);
    // }
    deleteFavorite(favoriteId)
    {
        console.log("delete favorite", favoriteId);
        return axios.delete(FAVORITE_API_BASE_URL+ '/delete/' + favoriteId);
    }
}

export default new FavoriteService