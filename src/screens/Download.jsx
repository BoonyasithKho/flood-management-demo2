import { Box, Divider, Grid } from "@mui/material"
import MiniDrawer from "../components/MiniDrawer"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en-gb';
import BasicTable from "../components/DownloadTable";

export default function Download() {
    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '75px', bgcolor: 'lightgrey' }} height={'calc(100vh - 75px)'}>
                <MiniDrawer />
                <Box sx={{ bgcolor: 'white', width: '100%', borderRadius: '10px', p: 4, margin: 2 }}>
                    <Grid container sx={{ width: '100%', justifyContent: 'space-between', display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                        <p style={{ fontFamily: 'noto sans thai', fontSize: '2rem', fontWeight: '600', paddingLeft: '1.5rem' }}>รายการไฟล์ข้อมูล</p>
                        <Box className='header-item' sx={{ width: '541px', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                            <Grid container sx={{ width: '100%', justifyContent: 'space-between', display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                                <Box className='header-item' sx={{ display: 'flex', alignItems: 'center' }}>
                                    ตั้งแต่วันที่ :
                                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en-gb'} >
                                        <DatePicker sx={{ paddingLeft: '0.5rem', width: '10rem' }} label="วัน/เดือน/ปี" />
                                    </LocalizationProvider>
                                </Box>
                                <Box className='header-item' sx={{ display: 'flex', alignItems: 'center' }}>
                                    ถึงวันที่ :
                                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en-gb'} >
                                        <DatePicker sx={{ paddingLeft: '0.5rem', width: '10rem' }} label="วัน/เดือน/ปี" />
                                    </LocalizationProvider>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>
                    <Divider />
                    <BasicTable />
                </Box >
            </Box >
        </>
    )
}
