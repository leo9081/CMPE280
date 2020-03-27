import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component"
import Demographocs from "./components/demographocs.component"
import HealthVitals from "./components/healthvitals.component"
import Reports from "./components/reports.component"

function App() {
  return (
    <Router basename="/hvFrontEnd">
        <div className={"container"}>
      <Navbar />
      <br />
      <Route path={"/Demographocs"} exact component={Demographocs}/>
      <Route path={"/HealthVitals"} exact component={HealthVitals}/>
      <Route path={"/Reports"} exact component={Reports}/>
      {/*<Link to={"Demographocs"}>Demographocs</Link>*/}
        </div>
    </Router>
  );
}

export default App;
