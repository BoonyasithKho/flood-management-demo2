import { Box, Button, Divider } from '@mui/material'
import React from 'react'
import MiniDrawer from '../../components/MiniDrawer'
import qrCode from '/Users/boonyasith/Documents/Learning/React/Project/flood-management-demo2/src/assets/qrCode.png';

function RegisterDetail() {
    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '75px', bgcolor: 'lightgrey' }} height={'calc(100vh - 75px)'} >
                <MiniDrawer />
                <Box sx={{ bgcolor: 'white', width: '100%', borderRadius: '10px', p: 4, margin: 2 }}>
                    <p style={{ fontFamily: 'noto sans thai', fontSize: '2rem', fontWeight: '600', paddingLeft: '1.5rem' }}>รายละเอียด</p>
                    <Divider />
                    <Box flexDirection='row' display='flex' >
                        <Box display='flex' flexDirection='column'>
                            <img src={qrCode} alt="" />
                            <Button variant='contained'>บันทึก QR</Button>
                        </Box>
                        <h1>,op,</h1>
                        <h1>,op,</h1>
                    </Box>
                </Box>
            </Box >
        </>
    )
}

export default RegisterDetail