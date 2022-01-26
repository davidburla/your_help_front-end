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
    updatePerson(person)
    {
        console.log("person > " + JSON.stringify(person));
        return axios.put(PERSON_API_BASE_URL, person);
    }
    deletePerson(personId)
    {
        console.log("delete person");
        return axios.delete(PERSON_API_BASE_URL+ '/delete/' + personId);
    }
}

export default new PersonService