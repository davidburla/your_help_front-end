import axios from 'axios';

const OFFER_API_BASE_URL = "http://localhost:8080/api/v1/offers";
class OfferService{
    getOffers()
    {
        return axios.get(OFFER_API_BASE_URL);
    }
    createOffer(offer)
    {
        return axios.post(OFFER_API_BASE_URL, offer);
    }
    getOfferById(offerId)
    {
        return axios.get(OFFER_API_BASE_URL + '/' + offerId);
    }
    updateOffer(offer)
    {
        console.log("offer > " + JSON.stringify(offer));
        return axios.put(OFFER_API_BASE_URL, offer);
    }
    deleteOffer(offerId)
    {
        console.log("delete offer");
        return axios.delete(OFFER_API_BASE_URL+ '/delete/' + offerId);
    }
}

export default new OfferService