import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {Events} from "./features/events/Events";
import {EventListingModal} from "./features/events/eventListing/EventListingModal";
import {NavBar} from "./ui-components/navBar/NavBar";
import {RegisterUser} from "./features/users/registerUser/RegisterUser";
import {ApplyEventModal} from "./features/applications/applyEventModal/ApplyEventModal";
import {Listings} from "./features/events/Listings";

function App() {
  return (
      <>
          <Router>
              <Switch>
                  <Route exact path="/events" component={Events} />
                  {/*<Route exact path="/:userId" component={ApplyEventModal} />*/}
                  <Route exact path="/listings" component={Listings} />
                  <Route exact path="/register" component={RegisterUser} />
                  <Route exact path="/event/:id" component={EventListingModal} />
                  <Redirect to="/events" />
              </Switch>
          </Router>
      </>
  );
}

export default App;
