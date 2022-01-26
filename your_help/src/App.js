import './App.css';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ListPersonComponent from './components/Person/ListPersonComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreatePersonComponent from './components/Person/CreatePersonComponent';
import UpdatePersonComponent from './components/Person/UpdatePersonComponent';
import ViewPersonComponent from './components/Person/ViewPersonComponent';
import DeletePersonComponent from './components/Person/DeletePersonComponent';
import ListFavoriteComponent from './components/Favorite/ListFavoriteComponent';
import DeleteFavoriteComponent from './components/Favorite/DeleteFavoriteComponent';
import CreateFavoriteComponent from './components/Favorite/CreateFavoriteComponent';
import ListOfferComponent from './components/Offer/ListOfferComponent';
import AddOfferComponent from './components/Offer/AddOfferComponent';
import HomeComponent  from './components/Home/HomeComponent';
import ViewOfferComponent from './components/Offer/ViewOfferComponent';
import DeleteOfferComponent from './components/Offer/DeleteOfferComponent';
import UpdateOfferComponent from './components/Offer/UpdateOfferComponent';

function App() {
  return (
    <div>
      <Router> 
          <HeaderComponent />
            <div className="container">
              <Switch> 
                <Route path = "/" exact component = {HomeComponent}></Route>
                <Route path = "/persons" component = {ListPersonComponent}></Route>
                <Route path = "/add-person" component = {CreatePersonComponent}></Route>
                <Route path = "/update-person/:id" component = {UpdatePersonComponent}></Route>
                <Route path = "/view-person/:id" component = {ViewPersonComponent}></Route>
                <Route path = "/delete-person/:id" component = {DeletePersonComponent}></Route>
                <Route path = "/favorites" component = {ListFavoriteComponent}></Route>
                <Route path = "/delete-favorite/:id" component = {DeleteFavoriteComponent}></Route>
                <Route path = "/add-favorite" component = {CreateFavoriteComponent}></Route>
                <Route path = "/offers" component = {ListOfferComponent}></Route>
                <Route path = "/add-offer" component = {AddOfferComponent}></Route>
                <Route path = "/delete-offer/:id" component = {DeleteOfferComponent}></Route>
                <Route path = "/view-offer/:id" component={ViewOfferComponent}></Route>
                <Route path = "/update-offer/:id" component={UpdateOfferComponent}></Route>
              </Switch>
            </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
