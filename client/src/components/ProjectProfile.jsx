import React, { useState, useEffect } from "react";
import axios from "axios";

const ProjectProfile = ({ match, location }) => {
  const [project, setProject] = useState({});
  const getProject = async (id) => {
    const { data } = await axios.get("http://localhost:5000/projects/" + id);
    console.log(data[0]);
    setProject(data[0]);
    console.log(project);
  };
  useEffect(() => {
    getProject(match.params.projectid);
  }, []);
  return (
    <div>
      <h1>Hii</h1>
      <h1>{project.name}</h1>
    </div>
  );
};

export default ProjectProfile;
