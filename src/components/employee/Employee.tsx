import React from 'react'
import EmployeeDetails from './EmployeeDetails'
import Header from '../Header'
import DsrDetails from './dsrDetails.jsx/DsrDetails'

const Employee = () => {
  return (
    <div className='Employee'>
        <Header />
        <EmployeeDetails />
        <DsrDetails />
    </div>
  )
}

export default Employee