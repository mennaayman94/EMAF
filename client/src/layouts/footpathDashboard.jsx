import React from "react";
import ExamplesNavbar from "../components/ExamplesNavbar";
import Dashboard from "../views/FootpathDashboard";
// core components

var ps;

class FootPathDashboard extends React.Component {
  render() {
    return (
      <>
        <ExamplesNavbar />

        <div className="wrapper">
          <div className="main-panel" ref="mainPanel">
            <div className="page-header" style={{ marginTop: "7%" }}>
              <Dashboard />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FootPathDashboard;
