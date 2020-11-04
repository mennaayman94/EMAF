import React from "react";
import{ useState } from "react";
import confirm from "reactstrap-confirm";
import { FormGroup, Input, Button, Card, CardBody, CardHeader, CardFooter } from "reactstrap";
import axios from "axios";
const Cyclewayform = (props) => {
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
      .post("http://localhost:9000/cycleway/add", state)
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
                Cycleway Datasets
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
                      name="Potholes"
                      id="Potholes"
                      onChange={inputHandler}
                      placeholder="Potholes Condition"
                    />
                  </FormGroup>
                  <FormGroup className="col-md-4">
                    <Input
                      type="text"
                      name="surfaceCracking"
                      id="surfaceCracking"
                      onChange={inputHandler}
                      placeholder="Surface Cracking Condition"
                    />
                  </FormGroup>
                  <FormGroup className="col-md-4">
                    <Input
                      type="text"
                      name="qualityOfSinage"
                      id="qualityOfSinage"
                      onChange={inputHandler}
                      placeholder="Quality of Sinage"
                    />
                  </FormGroup>
                </div>
                <div className="form-row">
                  <FormGroup className="col-md-8">
                    <Input
                      type="text"
                      name="overhangingVegetation"
                      id="overhangingVegetation"
                      onChange={inputHandler}
                      placeholder="Overhanging Vegetation Degree"
                    />
                  </FormGroup>
                  </div>
                  <div className="form-row">
                  <FormGroup className="col-md-8">
                    <Input
                      type="text"
                      name="widthRestrictions"
                      id="widthRestrictions"
                      onChange={inputHandler}
                      placeholder="Width Restrictions"
                    />
                  </FormGroup>
                  </div>
                  <div className="form-row">
                  <FormGroup className="col-md-8">
                    <Input
                      type="text"
                      name="qualityOfLighting"
                      id="qualityOfLighting"
                      onChange={inputHandler}
                      placeholder="Quality of Lighting"
                    />
                  </FormGroup>
                  </div>
                  <div className="form-row">
                    <FormGroup className="col-md-6">
                      <Input
                        type="text"
                        name="degreeOfCleanliness"
                        id="degreeOfCleanliness"
                        onChange={inputHandler}
                      placeholder="Degree of cleanliness"
                      />
                    </FormGroup>

                    <FormGroup className="col-md-6">
                      <Input
                        type="text"
                        name="wornLines"
                        id="wornLines"
                        onChange={inputHandler}
                        placeholder="Worn lines condition"
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

export default Cyclewayform;