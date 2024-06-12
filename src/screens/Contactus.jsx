import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material"
import MiniDrawer from "../components/MiniDrawer"
import qrCode from '../assets/qrCode.png';

export default function Contactus() {
    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '75px', bgcolor: 'lightgrey', height: '100vh' }}>
                <MiniDrawer />
                {/* <h1>Contactus</h1>
                <Container fixed>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, blanditiis adipisci id dolorem quasi veniam corrupti similique numquam velit, doloremque expedita saepe ullam. Esse libero animi minus voluptas ut porro.</p>
                </Container> */}
                <Grid container sx={{
                    p: 5,
                    justifyContent: 'center',
                    alignContent: 'top',
                    display: "flex"
                }}>

                    <Box sx={{ bgcolor: 'white', width: '100%', height: '90vh', borderRadius: '10px', p: 5 }}>
                        {/* <h1 style={{ fontFamily: 'noto sans thai' }}>ติดต่อเจ้าหน้าที่</h1> */}
                        <Divider />
                        {/* <Box sx={{ bgcolor: 'red' }}> */}
                        <img src={qrCode} alt="" width='100%' />
                        {/* <p className="infomationcontact">สามารถแสกน Line QR code</p> */}
                        {/* </Box> */}

                    </Box>
                    {/* <Card sx={{ width: '95%', height: '75vh' }} >
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card> */}

                </Grid>
            </Box >
        </>
    )
}
