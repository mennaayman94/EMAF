import React from 'react'
import ExamplesNavbar from '../components/ExamplesNavbar'
import Footer from '../components/Footer'
 import Publictransportform from '../components/Publictransportform'
 import Publictransportmap from'../components/Publictransportmap'
import './layoutStyles.css';
import DashboardMap from '../components/Map';
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
  } from "reactstrap";

const  Dataentrypublictransport = (props) => {
   
    console.log(props)
    return ( 
    <div>  
      <ExamplesNavbar/>
                <div className="page-header container" id='dataentry'>
                    <Card id="dataentryMap">
                        <CardBody>
                            <Publictransportmap style='mapbox://styles/mapbox/satellite-v9' center={[31.6306, 30.0917]} token="pk.eyJ1IjoiYXNtYTE2MyIsImEiOiJja2I0MnJwMm4wYnFvMnJvNnA2NjBmdnN2In0.QVk1j8vEHjmZA0YZOyv7VA" height= "39.5vw" />
                        </CardBody>
                    </Card> 
                    <Publictransportform/>
                </div>
        <Footer/>
        </div>
     );
}
 
export default Dataentrypublictransport;