import { Box, Divider } from "@mui/material"
import MiniDrawer from "../components/MiniDrawer"
import Maps from "../components/Maps"
import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
export default function Mapping() {
  const fabStyle = {
    position: 'relative',
    bottom: 64,
    left: 16,
  };
  return (
    <>
      <Box style={{
        display: 'flex', marginTop: '75px', width: '100%'
      }}>
        < MiniDrawer />
        {/* < Box sx={{ width: '100%', background: 'pink' }}> */}
        <Maps />

        {/* <Fab color="primary" aria-label="add" sx={fabStyle}>
          <AddIcon />
        </Fab> */}
        {/* </Box > */}
      </Box >
    </>
  )
}
