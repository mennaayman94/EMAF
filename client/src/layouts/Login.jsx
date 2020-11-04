import React from "react";
import LoginPage from "../components/LoginPage";
import ExamplesNavbar from "../components/ExamplesNavbar";
import "./layoutStyles.css";

const Login = (props) => {
  return (
    <>
      <ExamplesNavbar/>
      <div class="background-image"></div>
      <div class="content">
        <ExamplesNavbar />
        <div className="page-header">
          <div className="content" id="loginContainer">
            <LoginPage {...props} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
