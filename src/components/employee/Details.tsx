import { Box } from '@mui/system'
import React from 'react'

const Details = () => {
  return (
    <>
        <Box sx={{
            display: 'grid',
            gap: 1,
            gridTemplateColumns: 'repeat(3, 1fr)',
        }} >
            <Box mr={10} sx={{ display: 'flex', width: "167.57px" }}>
                <img></img>
                <Box>
                    <p>Business Group:</p>
                    <p>MashreqBank</p>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <img></img>
                <Box>
                    <p>Pay Band:</p>
                    <p>L</p>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <img></img>
                <Box>
                    <p>Joining Date:</p>
                    <p>20-June-2007</p>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <img></img>
                <Box>
                    <p>Telephone Number:</p>
                    <p>050-1234567</p>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <img></img>
                <Box>
                    <p>Branch/Dept:</p>
                    <p>Injaz - Merchant Services</p>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <img></img>
                <Box>
                    <p>Nationality</p>
                    <p>Indian</p>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default Details