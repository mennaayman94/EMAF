import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";

export default function UserProject() {
  const [state, setState] = useState({
    columns: [
      { title: "Category", field: "category" },
      { title: "Name", field: "name" },
      { title: "Owner", field: "owner" },
      { title: "Manager", field: "manager" },
      { title: "Status", field: "status" },
      { title: "Start Date", field: "start_date", type: "date" },
      { title: "End Date", field: "end_date", type: "date" },
    ],
    data: [],
  });

  useEffect(() => {
    //TODO currentUser in context or redux
    const fetchData = async () => {
      //   const projects = await axios.post(`/users/login`, {
      //     username: "fadwa",
      //     password: "Gyyy945",
      //   });
      //   setCurrentEmployee(projects.user);
      //   localStorage.setItem("token", projects.token);
      const result = await axios.get(`/users/5ed5426bd5469c0904fc0412`, {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZhZHdhIiwiaWF0IjoxNTkxMDM0ODA5LCJleHAiOjE1OTEwMzg0MDl9.jYtIrO9hDC3J3SUc-2rLwDHz4JBmhC34NHhQRsopdFQ",
        },
      });
      setState({ columns: state.columns, data: result.data });
    };

    fetchData();
  }, []);

  return (
    <MaterialTable
      title="Your Projects"
      columns={state.columns}
      data={state.data}
    />
  );
}
