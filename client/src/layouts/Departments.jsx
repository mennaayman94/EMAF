import React from 'react'
import Users from '../components/Userui.jsx'
import ExamplesNavbar from '../components/ExamplesNavbar.js';
import {Card, CardBody } from 'reactstrap';
import Footer from '../components/Footer'

const Departments = () => {
    return ( 
        <>
      <ExamplesNavbar/>

        <div className='page-header container' id='adminProjects'>
            <Card>
                <CardBody>
                    <Users/>
                </CardBody>
            </Card>
        </div>
        <Footer/>
        </>
     );
}
 
export default Departments;