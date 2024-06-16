import { Box, Divider } from "@mui/material"
import MiniDrawer from "../components/MiniDrawer"

export default function Mapping() {
  return (
    <>
      <Box sx={{ display: 'flex', marginTop: '75px', bgcolor: 'lightgrey', height: '91.5vh' }}>
        <MiniDrawer />
        <Box sx={{ bgcolor: 'white', width: '100%', height: '88vh', borderRadius: '10px', p: 4, margin: 2 }}>
          <p style={{ fontFamily: 'noto sans thai', fontSize: '2rem', fontWeight: '600', paddingLeft: '1.5rem' }}>แผนที่</p>
          <Divider />

        </Box>
      </Box >
    </>
  )
}
