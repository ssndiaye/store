import React from 'react';
import {Switch,Route} from 'react-router-dom' ;
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import NavBar from './Components/Navbar' ;
import  ProductList from './Components/ProductList' ;
import Cart from './Components/Cart' ;
import Details from './Components/Details';
import Default from './Components/Default';

 
function App() {
  return (  

    <React.Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Route path="/details" component={Details} />
      <Route path="/cart" component={Cart} />
      <Route  component={Default} />

    
    </Switch>
 
    </React.Fragment>

  );
}

export default App;
