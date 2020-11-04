import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMapboxGl, { Layer, Popup } from "react-mapbox-gl";
import "../assets/scss/blk-design-system-react.scss";
import "../assets/css/nucleo-icons.css";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ComponentsNavbar from "../components/IndexNavbar";
import Footer from "./Footer";
import Carousel from "react-bootstrap/Carousel";
import ExamplesNavbar from "./ExamplesNavbar.js";
import { Card,CardBody } from "reactstrap";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "#181A43",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "80vh",
  },
});

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYXNtYTE2MyIsImEiOiJja2I0MnJwMm4wYnFvMnJvNnA2NjBmdnN2In0.QVk1j8vEHjmZA0YZOyv7VA",
});
const ProjectsMap = (props) => {
  const classes = useStyles();

  const [state, setState] = useState([]);

  useEffect(() => {
    //TODO currentUser in context or redux
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:9000/projects`, {});
      console.log(data);
      setState(data);
    };
    console.log(state);

    fetchData();
  }, []);

  return (
    // in render()
    <React.Fragment>
      <ExamplesNavbar />
      <div className='container'
        style={{
          marginTop: "10%",
          marginBottom: "5%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card>
          <CardBody>
          <Box>
          <Map
            style="mapbox://styles/asma163/ckbgkzh7457611io4q6k872re"
            containerStyle={{
              position: "relative",
              height: "50vh",
              // width: "70vw",
              borderRadius: "10px",
            }}
            center={[31.6306, 30.0917]}
            zoom={[13]}
          >
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}
            ></Layer>
            {state[0] !== undefined ? (
              state.map((p, i) => (
                <Popup
                  onClick={() => {
                    console.log(props.history.location.pathname);
                    if (
                      localStorage.getItem("token") &&
                      localStorage.getItem("role") === "DataEntry" &&
                      props.history.location.pathname ===
                        "/project/publictransport"
                    ) {
                      props.history.push("/dataEntry/publictransport");
                    } else if (
                      localStorage.getItem("token") &&
                      localStorage.getItem("role") === "DataEntry" &&
                      props.history.location.pathname === "/project/footpath"
                    ) {
                      props.history.push("/dataEntry/footpath");
                    }  else if (
                      localStorage.getItem("token") &&
                      localStorage.getItem("role") === "DataEntry" &&
                      props.history.location.pathname === "/project/cycleway"
                    ) {
                      props.history.push("/dataEntry/cycleway");
                    }else if (
                      localStorage.getItem("token") &&
                      localStorage.getItem("role") === "DataEntry" &&
                      props.history.location.pathname === "/project/stormwater"
                    ) {
                      props.history.push("/dataEntry/stormwater");
                    } else if (
                      localStorage.getItem("token") &&
                      localStorage.getItem("role") === "DecisionMaker" &&
                      props.history.location.pathname === "/projects/stormwater"
                    ) {
                      props.history.push("/dashboard/stormwater");
                    }else if (
                      localStorage.getItem("token") &&
                      localStorage.getItem("role") === "DecisionMaker" &&
                      props.history.location.pathname === "/projects/cycleway"
                    ) {
                      props.history.push("/dashboard/cycleway");
                    }else if (
                      localStorage.getItem("token") &&
                      localStorage.getItem("role") === "DecisionMaker" &&
                      props.history.location.pathname === "/projects/footpath"
                    ) {
                      props.history.push("/dashboard/footpath");
                    }else if (
                      localStorage.getItem("token") &&
                      localStorage.getItem("role") === "DecisionMaker" &&
                      props.history.location.pathname === "/projects/publictransport"
                    ) {
                      props.history.push("/dashboard/publictransport");
                    } else {
                      props.history.push("/");
                    }
                  }}
                  coordinates={p.location.coordinates}
                  offset={{
                    "bottom-left": [12, -38],
                    bottom: [0, -38],
                    "bottom-right": [-12, -38],
                  }}
                >
                  <img
                    src={`/project${i}.jpg`}
                    width="100px"
                    height="100px"
                    alt="Smiley face"
                  />
                </Popup>
              ))
            ) : (
              <Popup
                coordinates={[31.6306, 30.0917]}
                offset={{
                  "bottom-left": [12, -38],
                  bottom: [0, -38],
                  "bottom-right": [-12, -38],
                }}
              >
                <img
                  src="n08A8NO.jpg"
                  width="100px"
                  height="100px"
                  alt="Smiley face"
                />
              </Popup>
            )}
          </Map>
        </Box>
          </CardBody>
          </Card>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ProjectsMap;
