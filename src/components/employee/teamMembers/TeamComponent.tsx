import { Box, Typography } from '@mui/material'
import React from 'react'
import Member from './Member'

const TeamComponent = () => {
  return (
    <>
      <Box sx={{display: "flex", justifyContent:"space-between", position:"relative"}}>
        <h3>You Team </h3>
        <Typography sx={{fontSize:"12px", position:"absolute", top:"50%", transform: "translate(0%, -50%)",right: "20px"}}>15 Members</Typography>
      </Box>
      <Box sx={{overflowY: "scroll", height: "255px"}}>
        <Member name="John Doe" role="Vide President" />
        <Member name="Ramkumar Rajkumar" role="Manager" />
        <Member name="Manoj Kumar" role="Assistant Manager" />
        <Member name="Subashini" role="Lead" />
        <Member name="Deepak Sivagurunathan" role="Lead Architech" />
        <Member name="John Doe" role="Vide President" />
        <Member name="Ramkumar Rajkumar" role="Manager" />
        <Member name="Manoj Kumar" role="Assistant Manager" />
        <Member name="Subashini" role="Lead" />
        <Member name="Deepak Sivagurunathan" role="Lead Architech" />
        <Member name="John Doe" role="Vide President" />
        <Member name="Ramkumar Rajkumar" role="Manager" />
        <Member name="Manoj Kumar" role="Assistant Manager" />
        <Member name="Subashini" role="Lead" />
        <Member name="Deepak Sivagurunathan" role="Lead Architech" />
      </Box>
    </>
  )
}

export default TeamComponent