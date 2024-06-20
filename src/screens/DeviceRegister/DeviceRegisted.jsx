import { Box, Button, Checkbox, Divider, Fab, FormControlLabel, FormGroup, Grid, IconButton, Stack, Typography, styled } from "@mui/material"
import MiniDrawer from "../../components/MiniDrawer"
import DeviceTable from "../../components/DeviceTable";
import FilterListIcon from '@mui/icons-material/FilterList';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { useState } from "react";

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { orange } from "@mui/material/colors";
import { Link } from "react-router-dom";

export default function DeviceRegisted() {
    const [filter, setFilter] = useState(false)

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
        '&:active': {
            backgroundColor: 'white',
        },

    }));

    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&::before': {
            display: 'none',
        },
    }));

    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
            {...props}
        />
    ))(({ theme }) => ({
        backgroundColor:
            theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, .05)'
                : 'rgba(0, 0, 0, .03)',
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1),
        },
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        borderTop: '1px solid rgba(0, 0, 0, .125)',
    }));

    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const [devivestate, setDevivestate] = useState({
        waterpump: false,
        boat: false,
        device: false,
    });

    const { waterpump, boat, device } = devivestate;

    const [state, setState] = useState({
        ready: false,
        setup: false,
        stop: false,
        remove: false,
        store: false,
    });
    const { ready, setup, stop, remove, store } = state;

    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '75px', bgcolor: 'lightgrey' }} height={'calc(100vh - 75px)'}>
                <MiniDrawer />
                <Stack direction='column' width={'100vw'} height={'100%'} >
                    <Box sx={{ marginTop: 2, marginLeft: 2 }}>
                        <Link to='/registerdetail'>
                            <ColorButton variant="contained" sx={{ paddingLeft: 4, paddingRight: 4, }}
                            >ลงทะเบียนเครื่องจักรใหม่</ColorButton>
                        </Link>
                        <ColorButton variant="contained"
                            sx={{ marginLeft: 2, paddingLeft: 4, paddingRight: 4 }}>นำเข้าข้อมูล CSV</ColorButton>
                    </Box>
                    <Box sx={{ bgcolor: 'white', height: '100%', borderRadius: '10px', paddingLeft: 4, paddingRight: 4, paddingBottom: 4, margin: 2, overflowY: 'scroll' }}>
                        <Grid container sx={{ width: '100%', justifyContent: 'space-between', display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                            <p style={{ fontFamily: 'noto sans thai', fontSize: '2rem', fontWeight: '600', paddingLeft: '1.5rem' }}>ประวัติการลงทะเบียนเครื่องจักร</p>
                            <Box className='header-item' sx={{ width: '100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '8px' }}>
                                <IconButton onClick={() => setFilter(!filter)} >
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
            {
                filter ? <Fab sx={{
                    position: 'absolute',
                    width: '20rem',
                    height: '20rem',
                    minHeight: 'auto',
                    top: '16rem',
                    right: '6rem',
                    borderRadius: '10px',
                    boxShadow: 3,
                    backgroundColor: 'white',
                    overflow: 'auto',
                }
                }
                >
                    <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column', height: '100%', justifyContent: 'start', p: 2 }}>
                        <Accordion
                            expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                        >
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography sx={{ fontFamily: 'noto sans Thai', fontWeight: '600' }}>วันที่</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box sx={{ marginLeft: '0.5rem', marginRight: '5px' }}>
                                    <Box flexDirection='row' justifyContent='space-between' sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography textAlign='left' sx={{ fontFamily: 'noto sans Thai', fontWeight: '600' }}>
                                            ตั้งแต่วันที่ :
                                        </Typography>
                                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en-gb'} >
                                            <DatePicker sx={{ paddingLeft: '0.5rem', width: '10rem' }} label="วัน/เดือน/ปี" />
                                        </LocalizationProvider>
                                    </Box>
                                    <Box flexDirection='row' justifyContent='space-between' sx={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                                        <Typography textAlign='left' sx={{ fontFamily: 'noto sans Thai', fontWeight: '600' }}>
                                            ถึงวันที่ :
                                        </Typography>
                                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en-gb'} >
                                            <DatePicker sx={{ paddingLeft: '0.5rem', width: '10rem' }} label="วัน/เดือน/ปี" />
                                        </LocalizationProvider>
                                    </Box>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
                        >
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography sx={{ fontFamily: 'noto sans Thai', fontWeight: '600' }}>ประเภท</Typography>
                            </AccordionSummary>
                            <FormGroup sx={{ marginLeft: '3rem' }}>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={waterpump} onChange={handleChange} name="waterpump"
                                            sx={{
                                                color: orange[600],
                                                '&.Mui-checked': {
                                                    color: orange[600],
                                                },
                                            }} />
                                    }
                                    label={<Typography sx={{ fontFamily: 'noto sans Thai' }}>เครื่องสูบน้ำ</Typography>}
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={boat} onChange={handleChange} name="boat"
                                            sx={{
                                                color: orange[600],
                                                '&.Mui-checked': {
                                                    color: orange[600],
                                                },
                                            }} />
                                    }
                                    label={<Typography sx={{ fontFamily: 'noto sans Thai' }}>เรือ</Typography>}
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={device} onChange={handleChange} name="device"
                                            sx={{
                                                color: orange[600],
                                                '&.Mui-checked': {
                                                    color: orange[600],
                                                },
                                            }} />
                                    }
                                    label={<Typography sx={{ fontFamily: 'noto sans Thai' }}>อุปกรณ์และเครื่องมือ</Typography>}
                                />
                            </FormGroup>
                        </Accordion>
                        <Accordion
                            expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
                        >
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography sx={{ fontFamily: 'noto sans Thai', fontWeight: '600' }}>สถานะ</Typography>
                            </AccordionSummary>
                            <FormGroup sx={{ marginLeft: '3rem' }}>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={ready} onChange={handleChange} name="ready"
                                            sx={{
                                                color: orange[600],
                                                '&.Mui-checked': {
                                                    color: orange[600],
                                                },
                                            }} />
                                    }
                                    label={<Typography sx={{ fontFamily: 'noto sans Thai' }}>รอการติดตั้ง</Typography>}
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={setup} onChange={handleChange} name="setup"
                                            sx={{
                                                color: orange[600],
                                                '&.Mui-checked': {
                                                    color: orange[600],
                                                },
                                            }} />
                                    }
                                    label={<Typography sx={{ fontFamily: 'noto sans Thai' }}>ติดตั้ง</Typography>}
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={stop} onChange={handleChange} name="stop"
                                            sx={{
                                                color: orange[600],
                                                '&.Mui-checked': {
                                                    color: orange[600],
                                                },
                                            }} />
                                    }
                                    label={<Typography sx={{ fontFamily: 'noto sans Thai' }}>หยุดการทำงาน</Typography>}
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={remove} onChange={handleChange} name="remove"
                                            sx={{
                                                color: orange[600],
                                                '&.Mui-checked': {
                                                    color: orange[600],
                                                },
                                            }} />
                                    }
                                    label={<Typography sx={{ fontFamily: 'noto sans Thai' }}>ถอนการติดตั้ง</Typography>}
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={store} onChange={handleChange} name="store"
                                            sx={{
                                                color: orange[600],
                                                '&.Mui-checked': {
                                                    color: orange[600],
                                                },
                                            }} />
                                    }
                                    label={<Typography sx={{ fontFamily: 'noto sans Thai' }}>จัดเก็บในส่วนกลาง</Typography>}
                                />
                            </FormGroup>
                        </Accordion>
                        <Box >
                            <Button variant="contained" sx={{ width: '100%', bgcolor: 'orange', marginTop: '20px', marginBottom: '20px', fontFamily: 'noto sans Thai', fontWeight: '600', color: 'white', fontSize: '18px' }}>นำไปใช้</Button>
                        </Box>
                    </Box>
                </Fab > : <Box />
            }
        </>
    )
}
