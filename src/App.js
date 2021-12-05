import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import UserList from './components/UserList'
import AddUser from "./components/AddUser";


function App() {
  return (
    <Router>
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
 
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
             
           
      
      
    </ul>
        </div>
     </nav>
        <Switch>
        <Route path="/home">
            <UserList />
          </Route>
          <Route path="/add">
            <AddUser />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
