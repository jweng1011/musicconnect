import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {Events} from "./pages/Events";
import {EventListingModal} from "./features/events/eventListing/EventListingModal";
import {RegisterUser} from "./pages/RegisterUser";
import {ApplyEventModal} from "./features/applications/applyEventModal/ApplyEventModal";
import {EventsDashboard} from "./pages/EventsDashboard";
import {SignIn} from "./pages/SignIn";
import {Applications} from "./pages/Applications";
import {Profile} from "./pages/Profile";

function App() {
  return (
      <>
          <Router>
              <Switch>
                  <Route exact path="/events" component={Events} />
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/eventDashboard" component={EventsDashboard} />
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
