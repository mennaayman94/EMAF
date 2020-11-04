import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMapboxGl, { Layer, Popup, Feature } from "react-mapbox-gl";
import "../assets/scss/blk-design-system-react.scss";
import "../assets/css/nucleo-icons.css";

const DashboardMap = (props) => {

  const[state,setState] = useState({
    type:"FeatureCollection", features: [
      {type:"Feature",geometry:{type:"Point",coordinates:[31.613116,30.089831]},properties:{"FID_1":"04bbb223d23feaa00d3676bd025ff2c5",stop_name:"station_0",Overall_ra:1,Rating_Dat:"1899-11-30T00:00:00.000Z",ACR_distri:0,Oper_statu:"in use",general_co:50,Remain_lif:5,Asset_age:20}},
      {type:"Feature",geometry:{type:"Point",coordinates:[31.64279,30.102447]},properties:{"FID_1":"06280b61e938ec0849934806d32cadc7",stop_name:"station_1",Overall_ra:1,Rating_Dat:"1899-11-30T00:00:00.000Z",ACR_distri:0,Oper_statu:"dismissed",general_co:60,Remain_lif:10,Asset_age:10}},
      {type:"Feature",geometry:{type:"Point",coordinates:[31.608155,30.091189]},properties:{"FID_1":"103fbd54bb3c9a2034cbe4a4a331b5de",stop_name:"station_2",Overall_ra:2,Rating_Dat:"1899-11-30T00:00:00.000Z",ACR_distri:0,Oper_statu:"removed",general_co:57,Remain_lif:10,Asset_age:15}},
      {type:"Feature",geometry:{type:"Point",coordinates:[31.620251,30.094267]},properties:{"FID_1":"1d5a69a464237a47cbd3260dbe79e318",stop_name:"station_3",Overall_ra:2,Rating_Dat:"1899-11-30T00:00:00.000Z",ACR_distri:0,Oper_statu:"in use",general_co:75,Remain_lif:12,Asset_age:13}},
      {type:"Feature",geometry:{type:"Point",coordinates:[31.617331,30.096614]},properties:{"FID_1":"2134b9d12b3182c452bcf19b2eb8a772",stop_name:"station_4",Overall_ra:3,Rating_Dat:"1899-11-30T00:00:00.000Z",ACR_distri:0,Oper_statu:"in use",general_co:80,Remain_lif:5,Asset_age:12}},
      {type:"Feature",geometry:{type:"Point",coordinates:[31.615583,30.087506]},properties:{"FID_1":"2367e3c2ff20cb6f08543e011eed741d",stop_name:"station_5",Overall_ra:3,Rating_Dat:"1899-11-30T00:00:00.000Z",ACR_distri:0,Oper_statu:"in use",general_co:85,Remain_lif:4,Asset_age:11}},
      {type:"Feature",geometry:{type:"Point",coordinates:[31.623564,30.093979]},properties:{"FID_1":"2a240bed8275e32dc76164e9c37cd071",stop_name:"station_6",Overall_ra:4,Rating_Dat:"1899-11-30T00:00:00.000Z",ACR_distri:0,Oper_statu:"in use",general_co:63,Remain_lif:2,Asset_age:16}},
      {type:"Feature",geometry:{type:"Point",coordinates:[31.61653,30.090606]},properties:{"FID_1":"2c0e13cb39fb227e9d4058fc6949412f",stop_name:"station_7",Overall_ra:4,Rating_Dat:"1899-11-30T00:00:00.000Z",ACR_distri:0,Oper_statu:"dismissed",general_co:45,Remain_lif:12,Asset_age:8}},
      {type:"Feature",geometry:{type:"Point",coordinates:[31.623411,30.083127]},properties:{"FID_1":"32c5bbbaf1148a7c7b67237deaf9d804",stop_name:"station_8",Overall_ra:1,Rating_Dat:"1899-11-30T00:00:00.000Z",ACR_distri:0,Oper_statu:"in use",general_co:40,Remain_lif:3,Asset_age:5}},
      {type:"Feature",geometry:{type:"Point",coordinates:[31.627998,30.090624]},properties:{"FID_1":"3a08ac67cfaf7ede11c9ed231c8f8ead",stop_name:"station_9",Overall_ra:1,Rating_Dat:"1899-11-30T00:00:00.000Z",ACR_distri:0,Oper_statu:"in use",general_co:83,Remain_lif:9,Asset_age:4}}]})

  const Map = ReactMapboxGl({
    accessToken: props.accessToken
  });
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await axios.get(`/projects`, {});
  //     setState(data);
  //   };
  //   console.log(state);

  //   fetchData();
  // }, []);

  return (
    <React.Fragment>
        <Map
          style= {props.style}
          containerStyle={{
            height: props.height,
          }}
          center={[31.6306, 30.0917]}
          zoom={[13]}
        >
          {/* <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}>
          {
            state.features.map(feature => 
                <Feature coordinates={feature.geometry.coordinates}/>
            )
          }
            </Layer> */}
        </Map>
    </React.Fragment>
  );
};

export default DashboardMap;