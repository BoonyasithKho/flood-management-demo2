import { Box, Divider } from "@mui/material"
import MiniDrawer from "../components/MiniDrawer"

export default function Dashboard() {


    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '75px', bgcolor: 'lightgrey' }} height={'calc(100vh - 75px)'} >
                <MiniDrawer />
                <Box sx={{ bgcolor: 'white', width: '100%', borderRadius: '10px', p: 4, margin: 2 }}>
                    <p style={{ fontFamily: 'noto sans thai', fontSize: '2rem', fontWeight: '600', paddingLeft: '1.5rem' }}>Dashboard</p>
                    <Divider />

                </Box>
            </Box >
        </>
    )
}
