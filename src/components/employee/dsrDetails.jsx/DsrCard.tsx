import React from 'react'
import { Box } from '@mui/material'
import { StringifyOptions } from 'querystring'

type propTypes = {
  color: string,
  number: string,
  name: string
}

const DsrCard = (props: propTypes) => {
  return (
    <Box mr={5} sx={{ width: "224.87px", height: "116px", background: props.color,  borderRadius: "6px"}}>
      <h1>{props.number}</h1>
      <p>{props.name}</p>

    </Box>
  )
}

export default DsrCard