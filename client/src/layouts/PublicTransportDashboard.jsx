import React from "react";
import ExamplesNavbar from '../components/ExamplesNavbar';
import Dashboard from '../views/PublicTransportDashboard';
// core components

var ps;

class PublicTransportDashboard extends React.Component {


  render() {
    return (
      <>
      <ExamplesNavbar/>

        <div className="wrapper">
          <div
            className="main-panel"
            ref="mainPanel"
          >
          <div className="page-header" style={{marginTop:"7%"}}>
          <Dashboard/>

          </div>
          </div>
        </div>
      </>
    );
  }
}

export default PublicTransportDashboard;