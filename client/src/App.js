import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dataentrypublictransport from "./layouts/Dataebtrypublictransport.jsx";
import Dataentrystormwater from "./layouts/Dataentrystormwater.jsx";
import ProjectsMap from "./components/projectsMap";
import LandingPage from "./components/LandingPage";
import DecisionMaker from "./layouts/decisionMaker";
import DataEntry from "./layouts/DataEntry";
import Login from "./layouts/Login";
import Admin from "./layouts/Admin.jsx";
import "./index.css";
// import ProjectsMap from './components/projectsMap'
import AdminProjects from "./layouts/AdminProjects";
import Footer from "./components/Footer";
import Departments from "./layouts/Departments";
import DataentryCycleway from "./layouts/DataentryCycleway.jsx";
import About from "./components/About";
import Contact from "./components/Contact";
import FootPathDashboard from "./layouts/footpathDashboard.jsx";
import StormWaterDashboard from "./layouts/stormwaterDashboard.jsx";
import CyclewayDashboard from './layouts/CyclewayDashboard'
import PublicTransportDashboard from './layouts/PublicTransportDashboard'
function App() {
  const [state, setState] = useState({
    columns: [
      { title: "Category", field: "category" },
      { title: "Name", field: "name" },
      { title: "Owner", field: "owner" },
      { title: "Manager", field: "manager" },
      { title: "Status", field: "status" },
      { title: "Start Date", field: "start_date", type: "date" },
      { title: "End Date", field: "end_date", type: "date" },
    ],
    data: [],
    project: [],
  });

  return (
    <BrowserRouter>
      <div className="App">
        {/* <ExamplesNavbar/> */}
        <Switch>
          <Route path="/dashboard" exact render={() => <DecisionMaker />} />
          <Route path="/login" render={(props) => <Login {...props} />}></Route>

          {/* render={() => <UserProject></UserProject>}
        /> */}
          <Route exact path="/admin" render={(props) => <Admin />} />
          {/* <Route path="/project/:projectid" component={ProjectProfile} /> */}
          {/* <Route
            path="/project"
            render={(props) => <ProjectsMap {...props} />}
          /> */}
          <Route
            path="/project/publictransport"
            render={(props) => <ProjectsMap {...props} />}
          />
          <Route
            path="/project/footpath"
            render={(props) => <ProjectsMap {...props} />}
          />
          <Route
            path="/project/stormwater"
            render={(props) => <ProjectsMap {...props} />}
          />
          <Route
            path="/project/cycleway"
            render={(props) => <ProjectsMap {...props} />}
          />
          <Route
            path="/projects/publictransport"
            render={(props) => <ProjectsMap {...props} />}
          />
          <Route
            path="/projects/footpath"
            render={(props) => <ProjectsMap {...props} />}
          />
          <Route
            path="/projects/stormwater"
            render={(props) => <ProjectsMap {...props} />}
          />
          <Route
            path="/projects/cycleway"
            render={(props) => <ProjectsMap {...props} />}
          />
          <Route
            path="/dashboard/footpath" exact
            render={()=> <FootPathDashboard/>}
          />
          <Route
            path="/dashboard/stormwater" exact
            render={()=> <StormWaterDashboard/>}
          />
          <Route
            path="/dashboard/cycleway" exact
            render={()=> <CyclewayDashboard/>}
          />
          <Route
            path="/dashboard/publictransport" exact
            render={()=> <PublicTransportDashboard/>}
          />
          <Route
            path="/admin/projects"
            render={(props) => (
              <AdminProjects {...props} state={state} setState={setState} />
            )}
          />
          <Route
            path="/dataEntry/cycleway"
            render={() => <DataentryCycleway />}
          />
          <Route
            path="/dataEntry/footpath"
            render={() => <DataEntry/>}
          />
          <Route
            path="/dataEntry/publictransport"
            render={() => <Dataentrypublictransport />}
          />
          <Route
            path="/dataEntry/stormwater"
            render={() => <Dataentrystormwater />}
          />
          <Route path="/admin/departments" component={Departments} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

          <Route
            path="/"
            render={() => (
              <>
                <LandingPage />
              </>
            )}
          />
        </Switch>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
