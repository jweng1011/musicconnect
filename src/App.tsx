import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {Events} from "./pages/Events";
import {EventListingModal} from "./features/events/eventListing/EventListingModal";
import {RegisterUser} from "./pages/RegisterUser";
import {ApplyEventModal} from "./features/applications/applyEventModal/ApplyEventModal";
import {MyEvents} from "./pages/MyEvents";
import {SignIn} from "./pages/SignIn";
import {Applications} from "./pages/Applications";

function App() {
  return (
      <>
          <Router>
              <Switch>
                  <Route exact path="/events" component={Events} />
                  <Route exact path="/myEvents" component={MyEvents} />
                  <Route exact path="/applications" component={Applications} />
                  <Route exact path="/register" component={RegisterUser} />
                  <Route exact path="/event/:eventId" component={EventListingModal} />
                  <Route exact path="/login" component={SignIn}/>
                  <Redirect to="/login" />
              </Switch>
          </Router>
      </>
  );
}

export default App;
