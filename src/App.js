import React, { Component } from 'react';
import './App.css';
import Customers from './Customers';
import Navbar from './Navbar';
import Login from './Login';
import SignUp from './SignUp';
import Game from './Game';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
        
          <Navbar/>

          <Switch>
            <Route exact path= "/" render={() => (
              <Redirect to="/customerlist"/>
            )}/>
            
            <Route exact path='/customerlist' component={Customers} />
            <Route exact path='/game' component={Game} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
