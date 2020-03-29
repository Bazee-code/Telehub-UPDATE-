import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

// local
import './App.css';
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js';
import Productdetails from './components/ProductDetails.js';
import Cart from './components/Cart.js';
import SignIn from './components/SignIn.js';
import Signup from './components/Signup.js';
import Modal from './components/Modal.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/details" component={Productdetails}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/signin" component={SignIn}/>
          <Route  path="/signup" component={Signup}/>
          <Route default="/error" />
          </Switch>
          <Modal />
        </Router>
      </React.Fragment>
    )
  }
}

export default App;

// react router works on the client side
// it renders our components instead of req data from a server
// route renders component that matches the specified url
// switch renders the first component .............
