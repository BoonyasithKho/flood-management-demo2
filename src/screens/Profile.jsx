import { Alert, Box, Button, Divider, Grid, MenuItem, Snackbar, TextField, styled } from "@mui/material";
import MiniDrawer from "../components/MiniDrawer";
import { orange } from "@mui/material/colors";
import { useState } from "react";

export default function Profile() {

    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        setState({ ...newState, open: true });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const agency = [
        {
            value: 'กรุณาเลือกหน่วยงาน',
            label: 'กรุณาเลือกหน่วยงาน',
        },
        {
            value: 'หน่วยงานที่ 1',
            label: 'หน่วยงานที่ 1',
        },
        {
            value: 'หน่วยงานที่ 2',
            label: 'หน่วยงานที่ 2',
        },
        {
            value: 'หน่วยงานที่ 3',
            label: 'หน่วยงานที่ 3',
        },
        {
            value: 'หน่วยงานที่ 4',
            label: 'หน่วยงานที่ 4',
        },
    ];

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(orange[900]),
        marginTop: '3rem',
        fontFamily: 'noto sans Thai', fontSize: '1.2rem', width: '20rem', height: '3.2rem',
        backgroundColor: '#EF873D',
        '&:hover': {
            backgroundColor: 'orange',
        },
        '&:focus': {
            backgroundColor: '#EF873D',
        },
        // '&:active': {
        //     backgroundColor: 'black',
        // },

    }));


    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '75px', bgcolor: 'lightgrey' }} height={'calc(100vh - 75px)'}>
                <MiniDrawer />
                <Box sx={{ bgcolor: 'white', borderRadius: '10px', p: 4, margin: 2, display: 'block' }}>
                    <p style={{ fontFamily: 'noto sans thai', fontSize: '2rem', fontWeight: '600', paddingLeft: '1.5rem' }}>โปรไฟล์</p>
                    <Divider />
                    <Grid container marginTop='1rem' sx={{ fontFamily: 'noto sans thai' }}>
                        <Grid xs={6} md={5} marginLeft='12rem'>
                            <p>ชื่อ</p>
                            <TextField
                                required
                                id="standard-required"
                                label="ชื่อ"
                                defaultValue="Hello World"
                                variant="outlined"
                                inputProps={{ style: { fontFamily: 'noto sans Thai' } }}
                                InputLabelProps={{ style: { fontFamily: 'noto sans Thai' } }}
                                sx={{ width: '28rem', bgcolor: '#EBEBEB' }}
                            />
                        </Grid>
                        <Grid xs={6} md={5}>
                            <p>นามสกุล</p>
                            <TextField
                                required
                                id="standard-required"
                                label="นามสกุล"
                                defaultValue="Hello World"
                                variant="outlined"
                                inputProps={{ style: { fontFamily: 'noto sans Thai' } }}
                                InputLabelProps={{ style: { fontFamily: 'noto sans Thai' } }}
                                sx={{ width: '28rem', bgcolor: '#EBEBEB' }}
                            />
                        </Grid>
                        <Grid xs={6} md={5} marginLeft='12rem'>
                            <p>เบอร์โทรศัพท์</p>
                            <TextField
                                required
                                id="standard-required"
                                label="เบอร์โทรศัพท์"
                                defaultValue="Hello World"
                                variant="outlined"
                                inputProps={{ style: { fontFamily: 'noto sans Thai' } }}
                                InputLabelProps={{ style: { fontFamily: 'noto sans Thai' } }}
                                sx={{ width: '28rem', bgcolor: '#EBEBEB' }}
                            />
                        </Grid>
                        <Grid xs={6} md={5}>
                            <p>อีเมล</p>
                            <TextField
                                required
                                id="standard-required"
                                label="อีเมล"
                                defaultValue="Hello World"
                                variant="outlined"
                                inputProps={{ style: { fontFamily: 'noto sans Thai' } }}
                                InputLabelProps={{ style: { fontFamily: 'noto sans Thai' } }}
                                sx={{ width: '28rem', bgcolor: '#EBEBEB' }}
                            />
                        </Grid>
                        <Grid xs={6} md={5} marginLeft='12rem'>
                            <p>หน่วยงาน</p>
                            <TextField
                                id="outlined-select-currency"
                                select
                                variant="outlined"
                                label="กรุณาเลือกหน่วยงาน"
                                defaultValue="กรุณาเลือกหน่วยงาน"
                                // helperText="Please select your currency"
                                inputProps={{ style: { fontFamily: 'noto sans Thai' } }}
                                InputLabelProps={{ style: { fontFamily: 'noto sans Thai' } }}
                                sx={{ width: '28rem', bgcolor: '#EBEBEB' }}

                            >
                                {agency.map((agencyName) => (
                                    <MenuItem key={agencyName.value} value={agencyName.value} sx={{ fontFamily: 'noto sans Thai' }}>
                                        {agencyName.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                    <center>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <ColorButton onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
                                ยืนยันการแก้ไข
                            </ColorButton>
                        </Box>
                    </center>
                </Box>
            </Box >
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                autoHideDuration={1000}
                open={open}
                onClose={handleClose}
                key={vertical + horizontal}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{
                        display: 'flex',
                        width: '100%', height: '100px', bgcolor: 'white', color: 'black', borderRadius: '20px', textAlign: 'center', boxShadow: 2,
                        paddingTop: '30px',
                        fontFamily: 'noto sans Thai',
                        fontSize: '16px',
                    }}
                >
                    การแก้ไขได้ถูกบันทึกเรียบร้อยแล้ว
                </Alert>
            </Snackbar >
        </>
    )
}
