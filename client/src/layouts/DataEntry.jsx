import React from 'react'
import ExamplesNavbar from '../components/ExamplesNavbar'
import Footer from '../components/Footer'
import Maps from '../components/maps';
import Forms from '../components/Forms'
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

const DataEntry = (props) => {
   
    console.log(props)
    return ( 
    <div>   
      <ExamplesNavbar/>
                <div className="page-header container" id='dataentry'>
                    <Card id="dataentryMap">
                        <CardBody>
                            <Maps style='mapbox://styles/mapbox/satellite-v9' token="pk.eyJ1IjoiYXNtYTE2MyIsImEiOiJja2I0MnJwMm4wYnFvMnJvNnA2NjBmdnN2In0.QVk1j8vEHjmZA0YZOyv7VA" height="39.5vw" center={[31.6306, 30.0917]} />
                        </CardBody>
                    </Card> 
                    <Forms/>
                </div>
        <Footer/>
        </div>
     );
}
 
export default DataEntry;