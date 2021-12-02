import axios from 'axios';

const PERSON_API_BASE_URL = "http://localhost:8080/api/v1/persons";
class PersonService{
    getPersons()
    {
        return axios.get(PERSON_API_BASE_URL);
    }
    createPerson(person)
    {
        return axios.post(PERSON_API_BASE_URL, person);
    }
    getPersonById(personId)
    {
        return axios.get(PERSON_API_BASE_URL + '/' + personId);
    }
    updatePerson(person, personId)
    {
        return axios.put(PERSON_API_BASE_URL + '/' + personId, person);
    }
}

export default new PersonService