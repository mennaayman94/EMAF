import React, {useState,useEffect} from 'react';
import MaterialTable from 'material-table';
import axios from 'axios'
import TablePagination from 'material-table';
import { useHistory } from "react-router-dom";

export default function MaterialTableDemo(props) {
  
  const {state,setState} = props

  const fetchData = async () => {
    const result = await axios.get(
      'http://localhost:9000/projects/',
    );
    setState({columns: state.columns,
  data: result.data});
  };

  useEffect(() => {
    fetchData();
    
      // console.log(state)
  }, []);

   async function addProject (newProject){
    const result = await axios.post(
      'http://localhost:9000/projects/add',newProject
    );
    setState({data:[...state.data , result.data]});
   }

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // const emptyRows = rowsPerPage - Math.min(rowsPerPage, state.data.length - page * rowsPerPage);

  const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <MaterialTable
      title="All Projects"
      columns={state.columns}
      data={props.data}
      // onRowClick={(event, rowData) => {
      //   handleClick(rowData);
      // }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            resolve();
            addProject(newData);
          }),
          onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            resolve();
            props.editProject(oldData._id, newData);
          }),
          onRowDelete: (oldData) =>
          new Promise((resolve) => {
              resolve();
              props.deleteProject(oldData._id)
          }),
      }}
      onRowClick={(event, rowData) => {
        // if the rowData.tableDate.id could be used on condidtional render
        
      }}
      
      localization={{
        Pagination: props => (
          <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
          colSpan={3}
          count={state.data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: { 'aria-label': 'rows per page' },
            native: true,
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
            ),
                  }}
    />
  );
}