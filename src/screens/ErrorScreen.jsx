import MiniDrawer from '../components/MiniDrawer';
import { Box } from '@mui/material';

import errorImg from '../assets/error.png'

function ErrorScreen() {
    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '75px', bgcolor: 'lightgrey' }} height={'calc(100vh-75px)'}>
                <MiniDrawer />
                <Box sx={{ display: 'flex', width: '100%', borderRadius: '10px', paddingBottom: '4rem', margin: 2, alignItems: 'center', justifyContent: 'center' }} height={'90vh'}>
                    <Box >
                        <img src={errorImg} alt="" />
                        <Box style={{ textAlign: 'center' }} sx={{ fontFamily: 'noto sans thai', color: 'darkred', fontWeight: 'bold', fontSize: '1.5rem' }}>
                            <div>เกิดข้อผิดพลาดบางอย่าง</div>
                        </Box>
                        <Box style={{ textAlign: 'center' }} sx={{ fontFamily: 'noto sans thai', color: 'grey', marginTop: '8px' }}>
                            <div>มีข้อผิดพลาด</div>
                            <div>กรุณาลองใหม่อีกครั้งในภายหลัง</div>
                        </Box>
                    </Box>


                </Box>
            </Box >
        </>
    );
}

export default ErrorScreen