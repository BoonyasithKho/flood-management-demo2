import { Box, Grid, Typography } from "@mui/material"
import MiniDrawer from "../components/MiniDrawer"
import Maps from "../components/Maps"
import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import DrawIcon from '@mui/icons-material/Draw';
import StraightenIcon from '@mui/icons-material/Straighten';
import LayersIcon from '@mui/icons-material/Layers';
import PrintIcon from '@mui/icons-material/Print';
import BarChartIcon from '@mui/icons-material/BarChart';
import SearchIcon from '@mui/icons-material/Search';

import sphereBase from '../assets/sphereBase.png'
import sphereSat from '../assets/sphereSat.png'

import '../App.css'
import PieColor from "../components/PieChart";
import { useState } from "react";

export default function Mapping() {
  const [showpie, setShowpie] = useState(false)
  const fabStyle_1 = {
    position: 'fixed',
    bottom: '3rem',
    right: '2.5rem',
    backgroundColor: 'white',
    color: 'blue',
  };
  const fabStyle_2 = {
    position: 'fixed',
    bottom: '6.5rem',
    right: '2.5rem',
    backgroundColor: 'white',
    color: 'blue',
  };
  const fabStyle_3 = {
    position: 'fixed',
    bottom: '10rem',
    right: '2.5rem',
    backgroundColor: 'white',
    color: 'blue',
  };
  const fabStyle_4 = {
    position: 'fixed',
    bottom: '13.5rem',
    right: '2.5rem',
    backgroundColor: 'white',
    color: 'blue',
  };
  const fabStyle_5 = {
    position: 'fixed',
    bottom: '17rem',
    right: '2.5rem',
    backgroundColor: 'white',
    color: 'blue',
  };
  const fabStyle_6 = {
    position: 'fixed',
    bottom: '20.5rem',
    right: '2.5rem',
    backgroundColor: 'white',
    color: 'blue',
  };
  const fabStyle_7 = {
    position: 'fixed',
    top: '7rem',
    right: '2.5rem',
    backgroundColor: 'white',
    color: 'blue',
  };
  const fabStyle_8 = {
    position: 'fixed',
    top: '7rem',
    right: '6rem',
    backgroundColor: 'white',
    color: 'blue',
  };
  const fabStyle_9 = {
    position: 'fixed',
    top: '7rem',
    right: '9.5rem',
    backgroundColor: 'white',
    color: 'blue',
  };

  return (
    <>
      <Box sx={{ display: 'flex', marginTop: '75px', width: '100%' }}>
        < MiniDrawer />
        <Maps />
        <Fab aria-label="zoomOut" sx={fabStyle_1} size='medium' >
          <RemoveIcon />
        </Fab>
        <Fab aria-label="zoomIn" sx={fabStyle_2} size='medium'>
          <AddIcon />
        </Fab>
        <Fab aria-label="locateMe" sx={fabStyle_3} size='medium'>
          <MyLocationIcon />
        </Fab>
        <Fab aria-label="add" sx={fabStyle_4} size='medium'>
          <DrawIcon />
        </Fab>
        <Fab aria-label="add" sx={fabStyle_5} size='medium'>
          <StraightenIcon />
        </Fab>
        <Fab aria-label="add" sx={fabStyle_6} size='medium'>
          <LayersIcon />
        </Fab>
        <Fab aria-label="add" sx={fabStyle_7} size='medium'>
          <PrintIcon />
        </Fab>
        <Fab aria-label="add" sx={fabStyle_8} size='medium' onClick={() => setShowpie(!showpie)} >
          <BarChartIcon />
        </Fab>
        <Fab aria-label="add" sx={fabStyle_9} size='medium'>
          <SearchIcon />
        </Fab>
        <Fab sx={{
          position: 'fixed',
          width: '100px',
          height: '80px',
          minHeight: 'auto',
          bottom: '3rem',
          left: '17rem',
          borderRadius: '10px',
          outline: '3px solid orange',
          boxShadow: 0,
        }}>
          <Box sx={{ display: 'flex', width: '100px', position: 'relative' }}>
            <img style={{ width: '100%', borderRadius: '10px' }} src={sphereBase} height='80px' />
            <div style={{
              width: '100%',
              position: 'absolute',
              bottom: 0,
              fontFamily: 'noto sans Thai',
              color: 'black',
              fontWeight: 600,
              backgroundColor: 'rgba(255, 100, 100, 0.2)',
              borderBottomLeftRadius: '8px',
              borderBottomRightRadius: '8px'
            }}>
              แผนที่ค่าเริ่มต้น
            </div>
          </Box>
        </Fab >
        {showpie ? <Fab sx={{
          position: 'fixed',
          width: '369px',
          height: '390px',
          minHeight: 'auto',
          top: '7rem',
          left: '17rem',
          borderRadius: '10px',
          boxShadow: 0,
          backgroundColor: 'white',
          justifyContent: 'center',
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignContent: 'start', p: 2 }}>
            <Typography sx={{
              position: 'flex',
              fontFamily: 'noto sans Thai',
              fontSize: '22px',
              color: 'black',
              fontWeight: 600,
              marginBottom: '16px'
            }}>
              กรุงเทพมหานคร
            </Typography>
            <PieColor />
            <Grid container width='100%' sx={{ m: 1 }}>
              <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'start', alignContent: 'center' }}>
                <Box sx={{
                  width: '14px',
                  height: '14px',
                  bgcolor: '#31C0CE',
                  m: 1,
                }}></Box>
                <Typography sx={{ alignContent: 'center', fontFamily: 'noto sans Thai' }}>รอการติดตั้ง</Typography>
              </Grid>
              <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'start', alignContent: 'center' }}>
                <Box sx={{
                  width: '14px',
                  height: '14px',
                  bgcolor: 'red',
                  m: 1,
                }}></Box>
                <Typography sx={{ alignContent: 'center', fontFamily: 'noto sans Thai' }}>ถอนการติดตั้ง</Typography>
              </Grid>

              <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'start', alignContent: 'center' }}>
                <Box sx={{
                  width: '14px',
                  height: '14px',
                  bgcolor: 'blue',
                  m: 1,
                }}></Box>
                <Typography sx={{ alignContent: 'center', fontFamily: 'noto sans Thai' }}>ติดตั้ง</Typography>
              </Grid>
              <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'start', alignContent: 'center' }}>
                <Box sx={{
                  width: '14px',
                  height: '14px',
                  bgcolor: 'green',
                  m: 1,
                }}></Box>
                <Typography sx={{ alignContent: 'center', fontFamily: 'noto sans Thai' }}>จัดเก็บในส่วนกลาง</Typography>
              </Grid>
              <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'start', alignContent: 'center' }}>
                <Box sx={{
                  width: '14px',
                  height: '14px',
                  bgcolor: 'orange',
                  m: 1,
                }}></Box>
                <Typography sx={{ alignContent: 'center', fontFamily: 'noto sans Thai' }}>หยุดการทำงาน</Typography>
              </Grid>
            </Grid>
          </Box>
        </Fab > : <Box />}
      </Box >
    </>
  )
}
