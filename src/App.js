import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import NotFound from './component/NotFound/NotFound';
import Contact from './component/Contact/Contact';
import Destination from './component/Destination/Destination';
import { createContext, useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header></Header>
      <Switch>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <PrivateRoute path="/destination/:vehiclesId">
              <Destination></Destination>
          </PrivateRoute>
          <Route path='/contact'>
              <Contact></Contact>
          </Route>
          <Route path="*">
              <NotFound></NotFound>
          </Route>

      </Switch>

    </Router>
    </UserContext.Provider>
  );
}

export default App;
