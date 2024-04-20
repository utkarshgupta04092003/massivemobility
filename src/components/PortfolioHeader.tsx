import { Box, Typography } from '@mui/material'
import React from 'react'

export default function PortfolioHeader() {
    return (
        <Box sx={{position: 'relative', left: '20rem', top: '4rem'}}>

            <Typography sx={{ fontSize: '2.5rem', fontFamily: 'arial' }}> My Portfolio</Typography>
            <Box sx={{display: 'flex', marginTop: '1rem'}}>
                <Box sx={{marginRight: '2rem', marginY: '0rem', paddingRight: '6px'}}>
                    <Typography>Dashboard</Typography>
                </Box>

                <Box sx={{marginRight: '2rem', marginY: '0rem', borderBottom: '2px solid green', paddingRight: '6px'}}>
                    <Typography>MIS & Update</Typography>
                </Box>

                <Box sx={{marginRight: '2rem', marginY: '0rem', paddingRight: '6px'}}>
                    <Typography>Insights</Typography>
                </Box>
            </Box>
        </Box>
    )
}
