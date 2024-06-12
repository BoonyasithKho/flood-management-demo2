import { Box, Container } from "@mui/material"
import MiniDrawer from "../components/MiniDrawer"

export default function DeviceRegisted() {
    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '100px' }}>
                <MiniDrawer />
                <h1>DeviceRegisted</h1>
                <Container fixed>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, blanditiis adipisci id dolorem quasi veniam corrupti similique numquam velit, doloremque expedita saepe ullam. Esse libero animi minus voluptas ut porro.</p>
                </Container>
            </Box>
        </>
    )
}
