import { Box, Divider } from "@mui/material"
import MiniDrawer from "../components/MiniDrawer"

import qrCode from '../assets/qrCode.png';
import lineApps from '../assets/lineApp.png';

export default function Contactus() {
    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '75px', bgcolor: 'lightgrey' }} height={'calc(100vh - 75px)'}>
                <MiniDrawer />
                <Box sx={{ bgcolor: 'white', width: '100%', borderRadius: '10px', p: 4, margin: 2 }}>
                    <p style={{ fontFamily: 'noto sans thai', fontSize: '2rem', fontWeight: '600', paddingLeft: '1.5rem' }}>ติดต่อเจ้าหน้าที่</p>
                    <Divider />
                    <Box sx={
                        { display: { xs: 'none', sm: 'none', md: 'flex', justifyContent: 'center', alignContent: 'center' } }
                    }>
                        <img src={qrCode} alt="" width='20%' />
                    </Box>
                    <Box sx={
                        { display: { xs: 'flex', sm: 'flex', md: 'none', justifyContent: 'center', alignContent: 'center' } }
                    }>
                        <img src={qrCode} alt="" width='100%' />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', width: '100%', color: 'grey', fontFamily: 'noto sans thai', fontSize: '1.1rem', fontWeight: '600' }} >
                        สามารถแสกน Line QR code
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', width: '100%', color: 'grey', fontFamily: 'noto sans thai', fontSize: '1.1rem', fontWeight: '600' }} >
                        หรือ Add Line : HelpMePlease
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', width: '100%', color: 'grey', fontFamily: 'noto sans thai', fontSize: '1.1rem', fontWeight: '600' }} >
                        เพื่อติดต่อเจ้าหน้าที่
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', width: '100%', color: '#2CCF54', fontFamily: 'noto sans thai', fontSize: '1.1rem', fontWeight: '600' }} >
                        <img src={lineApps} alt="" width='50rem' height='50rem' />
                        <Box sx={{ marginTop: '10px' }}>
                            @HelpMePlease
                        </Box>
                    </Box>
                </Box>
            </Box >
        </>
    )
}
