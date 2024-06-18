import { Box, Button, Divider, Grid, IconButton, Stack, styled } from "@mui/material"
import MiniDrawer from "../components/MiniDrawer"
import DeviceTable from "../components/DeviceTable";
import FilterListIcon from '@mui/icons-material/FilterList';
import SwapVertIcon from '@mui/icons-material/SwapVert';

export default function DeviceRegisted() {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: '#EF873D',
        fontFamily: 'noto sans thai', fontSize: '1.1rem', fontWeight: '600',
        height: '55px',
        borderRadius: '10px',
        backgroundColor: '#FFFFFF',
        border: '1px lightgrey solid',
        '&:hover': {
            backgroundColor: 'orange',
        },
        '&:focus': {
            backgroundColor: 'white',
        },
    }));

    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '75px', bgcolor: 'lightgrey' }} height={'calc(100vh - 75px)'}>
                <MiniDrawer />
                <Stack direction='column' width={'100vw'} height={'100%'} >
                    <Box sx={{ marginTop: 2, marginLeft: 2 }}>
                        <ColorButton variant="contained" sx={{ paddingLeft: 4, paddingRight: 4, }}
                        >ลงทะเบียนเครื่องจักรใหม่</ColorButton>
                        <ColorButton variant="contained"
                            sx={{ marginLeft: 2, paddingLeft: 4, paddingRight: 4 }}>นำเข้าข้อมูล CSV</ColorButton>
                    </Box>
                    <Box sx={{ bgcolor: 'white', height: '100%', borderRadius: '10px', paddingLeft: 4, paddingRight: 4, margin: 2, display: 'block' }}>
                        <Grid container sx={{ width: '100%', justifyContent: 'space-between', display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                            <p style={{ fontFamily: 'noto sans thai', fontSize: '2rem', fontWeight: '600', paddingLeft: '1.5rem' }}>ประวัติการลงทะเบียนเครื่องจักร</p>
                            <Box className='header-item' sx={{ width: '100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '8px' }}>
                                <IconButton onClick={() => { alert('Filter') }} >
                                    <FilterListIcon sx={{ color: 'black' }} />
                                </IconButton>
                                <IconButton onClick={() => { alert('Sort') }} >
                                    <SwapVertIcon sx={{ color: 'black' }} />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Divider />
                        <DeviceTable />
                    </Box >
                </Stack >

            </Box >
        </>
    )
}
