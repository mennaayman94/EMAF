import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { useEffect, useState} from "react";
import axios from "axios";
import { Layer,Feature, Popup} from "react-mapbox-gl";

function Stormwatermap(props) {
  const Map = ReactMapboxGl({
    accessToken:props.token
  });
  console.log(props.setStateToFeature)
  const [state, setState] = useState([]);

  useEffect(() => {
   const fetchData= async () => {

     await axios
       .get("http://localhost:9000/stormwater/",{})
       .then((res) => {
         console.log(res.data);
         setState(res.data)
        
       })
       .catch((error) => {
         console.log(error);
       });
      
   };
   fetchData();
   
 console.log(state)
 }, []);

const handleClick=(feature)=>{
props.setStateToFeature(feature)
console.log(feature)
}
 const onDrawCreate = ({ features }) => {
   console.log(features);
 };
 
  const onDrawUpdate = ({ features }) => {
    console.log(features);
  };
  
  return (
    <div>
      <Map
      center={props.center}
      zoom={[13]}
        style= {props.style} // eslint-disable-line
        containerStyle={{
          height: props.height,
          
        }}
      >
        <DrawControl onDrawCreate={onDrawCreate} onDrawUpdate={onDrawUpdate} />
        <Layer type="circle" id="marker" paint={{
                  'circle-color': "#e14eca",
                  'circle-stroke-width': 1,
                  'circle-stroke-color': '#fff',
                  'circle-stroke-opacity': 1
                }}>
          {state.map((p,) => (
            <Feature{...p} coordinates={p.geometry.coordinates} onClick={()=>handleClick(p)}  />))}
        </Layer>
      </Map>
    </div>
  );
}
export default Stormwatermap;
