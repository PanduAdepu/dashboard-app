import React from 'react'
import EmployeeDetails from './EmployeeDetails'
import Header from '../Header'
import DsrDetails from './dsrDetails.jsx/DsrDetails'
import { Box } from '@mui/material'

const Employee = () => {
  return (
    <div className='Employee'>
        <Header />
        <EmployeeDetails />
        <Box sx={{background: "white", pl: 5, pb: 5, pt: 0.5, borderRadius: 2}}>
          <DsrDetails />
        </Box>
    </div>
  )
}

export default Employee