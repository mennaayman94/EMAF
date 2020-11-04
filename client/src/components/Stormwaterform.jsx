import React from "react";
import{ useState } from "react";
import confirm from "reactstrap-confirm";
import { FormGroup, Input, Button, Card, CardBody, CardHeader, CardFooter } from "reactstrap";
import axios from "axios";
const Stormwaterform = (props) => {
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
      .post("http://localhost:9000/stormwater/add", state)
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
                Storm Water Datasets
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
                      name="maintenance_of_hole"
                      id="maintenance_of_hole"
                      onChange={inputHandler}
                      placeholder="Hole maintenance Condition"
                    />
                  </FormGroup>
                  <FormGroup className="col-md-4">
                    <Input
                      type="text"
                      name="groutmiss_around"
                      id="groutmiss_around"
                      onChange={inputHandler}
                      placeholder="Grout around joints condition"
                    />
                  </FormGroup>
                  <FormGroup className="col-md-4">
                    <Input
                      type="text"
                      name="exposed_rebar"
                      id="exposed_rebar"
                      onChange={inputHandler}
                      placeholder="Exposed Rebar"
                    />
                  </FormGroup>
                </div>
                <div className="form-row">
                  <FormGroup className="col-md-8">
                    <Input
                      type="text"
                      name="hydrogensulfide_damage"
                      id="hydrogensulfide_damage"
                      onChange={inputHandler}
                      placeholder="Hydrogensulfide damage rate"
                    />
                  </FormGroup>
                  </div>
                  <div className="form-row">
                  <FormGroup className="col-md-8">
                    <Input
                      type="text"
                      name="hole_bricks_missing"
                      id="hole_bricks_missing"
                      onChange={inputHandler}
                      placeholder="Hole bricks missing"
                    />
                  </FormGroup>
                  </div>
                  <div className="form-row">
                  <FormGroup className="col-md-8">
                    <Input
                      type="text"
                      name="object_restrict_flow"
                      id="object_restrict_flow"
                      onChange={inputHandler}
                      placeholder="Object Restrict flow"
                    />
                  </FormGroup>
                  </div>
                  <div className="form-row">
                    <FormGroup className="col-md-6">
                      <Input
                        type="text"
                        name="checklid_frame_forcracks"
                        id="checklid_frame_forcracks"
                        onChange={inputHandler}
                      placeholder="Check lid frame for cracks"
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

export default Stormwaterform;