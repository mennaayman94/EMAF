import React from "react";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import axios from 'axios'


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import '../assets/css/dashboard.css'
// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "../variables/charts";

import DashboardMap from '../components/Map';
import Chart from '../components/chart';
import Donut from "../components/PieChart";
import RadialChart from "../components/RadialChart";
import SplineArea from "../components/splineArea";
import PieWithImage from "../components/pieWithImage";

class Dashboard extends React.Component {

    state = {
      bigChartData: "data1",
      geojson: [],
      series: {},
      seriesStatus: {},
      performance: 0
  }
  async componentDidMount(){
    await axios
    .get("http://localhost:9000/publictrans/",{})
    .then((res) => {
      console.log(res.data)
      this.setState({geojson:res.data})
      const series = this.state.geojson.map(f=> f.Overall_ra);
      const computedSeries = {};
      const seriesStatus = this.state.geojson.map(f=> f.Oper_statu);
    
    const computedSeriesStatus = {};
    for (let index = 0; index < series.length; index++) {
      let key1 = series[index];
      let key2 = seriesStatus[index];
      if(computedSeries.hasOwnProperty(key1)&&computedSeriesStatus.hasOwnProperty(key2))
      {
        computedSeries[key1] +=1;
        computedSeriesStatus[key2] +=1;
      }else {
        computedSeries[key1] = 1;
        computedSeriesStatus[key2] = 1
      }
    }
    const generalCondition = this.state.geojson.map(f=> f.general_co);
    const performance = generalCondition.reduce(function(a,b){
      return a+b
    },0);
        this.setState ({
      series : computedSeries,
      performance : performance/(generalCondition.length*100) * 100,
      seriesStatus : computedSeriesStatus
    })
    })
    .catch((error) => {
      console.log(error);
    });
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  render() {
    return (
      <div id= 'dashboard'>
          <Row>
          <Col lg="3">
          <Card >
              <CardBody>
                <Donut series= {this.state.series} />
              </CardBody>
          </Card>
          <Card >
              <CardBody>
                <RadialChart overallPerformance = {this.state.performance} />
                {/* <h4 style= {{textAlign: 'center', color: "#1E80FF",alignSelf: 'center'}}>Performance</h4> */}
              </CardBody>
              </Card>
          </Col>
          <Col lg="6">
              <Card className="card-chart" id= "map">
              <CardBody>
                <DashboardMap style ="mapbox://styles/asma163/ckbggndq8257h1irya7l12nzw" accessToken="pk.eyJ1IjoiYXNtYTE2MyIsImEiOiJja2I0MnJwMm4wYnFvMnJvNnA2NjBmdnN2In0.QVk1j8vEHjmZA0YZOyv7VA" height="44.5vh" />
              </CardBody>
              </Card>
          </Col>
          <Col lg="3">
              <Card className="card-chart">
                <CardBody>
                  <h4 style={{textAlign:'center'}}><i className="tim-icons icon-delivery-fast text-primary" />{" "}Customer Satisfaction</h4>
                  <h3 style={{textAlign:'center', color: "#e14eca"}}>75 %</h3>
                </CardBody>
              </Card>
              <Card className="card-chart">
                <CardBody>
                 <PieWithImage series={this.state.seriesStatus} />
                </CardBody>
              </Card>
          </Col>
          </Row>
          <Row>
            <Col lg= '6'>
            <Card className="card-chart" id= "map">
              <CardBody>
              <SplineArea assetName = {this.state.geojson.map(f=>f.stop_name)} />
              </CardBody>
              </Card>
            </Col>
            <Col lg= '6'>
            <Card className="card-chart">
                <CardHeader>
                  {/* <h5 className="card-category">Performance</h5> */}
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                    Performance
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={chartExample3.data}
                      options={chartExample3.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
      </div>
    );
  }
}

export default Dashboard;
