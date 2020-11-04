import React from "react";
import ExamplesNavbar from '../components/ExamplesNavbar';
import Dashboard from '../views/Dashboard';
// core components

var ps;

class DecisionMaker extends React.Component {


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

export default DecisionMaker;
