import React from "react";
import{ useState } from "react";
import confirm from "reactstrap-confirm";
import { FormGroup, Input, Button, Card, CardBody, CardHeader, CardFooter } from "reactstrap";
import axios from "axios";
const Publictransportform = (props) => {
  const [state, setState] = useState({
});
  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
      
    });
    
  };
  const setStateToFeature = (feature) => {
    props.setState(feature);
    console.log(feature)
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let result = confirm({
          message: "Are you sure you want to add this data?",
        });
        console.log(result);
    axios
      .post("http://localhost:9000/publictrans/add", state)
      .then(({ data }) => {
        console.log(data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id='xx'>
          <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <h3>
                Public Transport Datasets
              </h3>
            </CardHeader>
            <CardBody>
              
                <div className="form-row">
                  <FormGroup className="col-md-4">
                    <Input
                      type="text"
                      placeholder="Asset Name"
                      id="asset_name"
                      name="asset_name"
                      onChange={inputHandler}
                    />
                  </FormGroup>
                  <FormGroup className="col-md-4">
                    <Input
                      type="text"
                      placeholder="Employee Name"
                      id="surveyorname"
                      name="surveyorname"
                      onChange={inputHandler}
                    />
                  </FormGroup>
                  <FormGroup className="col-md-4">
                    <Input
                      type="date"
                      name="Rating_Dat"
                      id="Rating_Dat"
                      onChange={inputHandler}
                      placeholder="Date of survey"
                    />
                  </FormGroup>
                </div>
                <div className="form-row">
                  <FormGroup className="col-md-4">
                    <Input
                      type="text"
                      name="LevelOf_modal_integration_service"
                      id="LevelOf_modal_integration_service"
                      onChange={inputHandler}
                      placeholder="Level of modal integration service"
                    />
                  </FormGroup>
                  <FormGroup className="col-md-4">
                    <Input
                      type="text"
                      name="bus_punctuality"
                      id="bus_punctuality"
                      onChange={inputHandler}
                      placeholder="Bus Punctuality"
                    />
                  </FormGroup>
                  <FormGroup className="col-md-4">
                    <Input
                      type="text"
                      name="train_punctuality"
                      id="train_punctuality"
                      onChange={inputHandler}
                      placeholder="Train Punctuality"
                    />
                  </FormGroup>
                </div>
                <div className="form-row">
                  <FormGroup className="col-md-8">
                    <Input
                      type="text"
                      name="ferry_punctuality"
                      id="ferry_punctuality"
                      onChange={inputHandler}
                      placeholder="Ferry Punctuality"
                    />
                  </FormGroup>
                  </div>
                  <div className="form-row">
                  <FormGroup className="col-md-8">
                    <Input
                      type="text"
                      name="perceived_qualityof_service"
                      id="perceived_qualityof_service"
                      onChange={inputHandler}
                      placeholder="Perceived Quality of Service"
                    />
                  </FormGroup>
                  </div>
                  <div className="form-row">
                  <FormGroup className="col-md-8">
                    <Input
                      type="text"
                      name="acess_passenger_info"
                      id="acess_passenger_info"
                      onChange={inputHandler}
                      placeholder="Accessibility of realtime Passenger Information"
                    />
                  </FormGroup>
                  </div>
                  <div className="form-row">
                    <FormGroup className="col-md-6">
                      <Input
                        type="text"
                        name="avail_infowith_ptservice"
                        id="avail_infowith_ptservice"
                        onChange={inputHandler}
                      placeholder="Information Availability to connect with PT service"
                      />
                    </FormGroup>

                    <FormGroup className="col-md-6">
                      <Input
                        type="text"
                        name="mobilityofInhabitant"
                        id="mobilityofInhabitant"
                        onChange={inputHandler}
                        placeholder="Mobility of Inhabitant"
                      />
                    </FormGroup>
                  </div>
                  <div className="form-row">
                    <FormGroup className="col-md-6">
                      <Input
                        type="text"
                        name="passengerDemand"
                        id="passengerDemand"
                        onChange={inputHandler}
                      placeholder="Passenger Demand "
                      />
                    </FormGroup>

                    <FormGroup className="col-md-6">
                      <Input
                        type="text"
                        name="serviceEffeciency"
                        id="serviceEffeciency"
                        onChange={inputHandler}
                        placeholder="Service Effeciency"
                      />
                    </FormGroup>
                  </div>
                  <div className="form-row">
                    <FormGroup className="col-md-6">
                      <Input
                        type="text"
                        name="general_co"
                        id="general_co"
                        onChange={inputHandler}
                      placeholder="General Condition"
                      />
                    </FormGroup>
                  </div>
                  <div className="form-row">
                    <FormGroup className="col-md-6">
                      <Input
                        type="text"
                        name="Oper_statu"
                        id="Oper_statu"
                        onChange={inputHandler}
                      placeholder="Operation Status"
                      />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                      <Input
                        type="text"
                        name="Asset_age"
                        id="Asset_age"
                        onChange={inputHandler}
                      placeholder="Asset Age"
                      />
                    </FormGroup>
                  </div>
                  <div className="form-row">
                    <FormGroup className="col-md-6">
                      <Input
                        type="text"
                        name="Overall_ra"
                        id="Overall_ra"
                        onChange={inputHandler}
                      placeholder="Overall Rating"
                      />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                      <Input
                        type="text"
                        name="Remain_lif"
                        id="Remain_lif"
                        onChange={inputHandler}
                      placeholder="Remaining Life"
                      />
                    </FormGroup>
                  </div>
                
            </CardBody>
            <CardFooter>
            <Button type="submit" color="primary">
                  Add
                </Button>
            </CardFooter>
            </form>
          </Card>
          </div>
  );
};

export default Publictransportform;