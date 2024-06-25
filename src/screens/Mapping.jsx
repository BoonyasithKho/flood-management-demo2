import { Box, Button, Checkbox, Divider, FormControlLabel, FormGroup, Grid, MenuItem, Tab, Tabs, TextField, Typography } from "@mui/material"
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

import sphereBase from '../assets/sphereBase.png';
import sphereSat from '../assets/sphereSat.png';

import '../App.css'
import PieColor from "../components/PieChart";
import { useState } from "react";
import { orange } from "@mui/material/colors";
import L from 'leaflet'
import MapDraw from "../components/MapDraw";

import MapDistance from "../components/MapDistance";

export default function Mapping() {
  const [showpie, setShowpie] = useState(false)
  const [showlayer, setShowlayer] = useState(false)
  const [showsearch, setShowsearch] = useState(false)
  const [showdraw, setShowdraw] = useState(false)
  const [showdistance, setShowdistance] = useState(false)
  const [mapselect, setMapselect] = useState(false)
  const [value, setValue] = useState(0);
  const [showdefault, setShowdefault] = useState(true)
  const [showroad, setShowroad] = useState(false)
  const [showimagery, setShowimagery] = useState(false)

  var latlng = L.latLng(13, 100);

  const [state, setState] = useState({
    flood: false,
    repeatflood: false,
    devicecenter: false,
    waterbuilding: false,
    mainriver: false,
    minorriver: false,
  });

  const { flood, repeatflood, devicecenter, waterbuilding, mainriver, minorriver } = state;

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

  const zoneUTM = [
    {
      value: '47N',
      label: '47N',
    },
    {
      value: '48N',
      label: '48N',
    }
  ];

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChange2 = (event, newValue) => {
    setValue(newValue);
  };

  const zoomIn = () => {
    window.map.zoomIn();
  }

  const zoomOut = () => {
    window.map.zoomOut();
  }
  const locateMe = () => {
    window.map.setView(latlng, 6);
  }

  return (
    <>
      <Box sx={{ display: 'flex', marginTop: '75px', width: '100%' }}>
        < MiniDrawer />
        {(showdraw || showdistance) ? (showdraw ? <MapDraw /> : <MapDistance />) : <Maps />}

        <Fab aria-label="zoomOut" sx={fabStyle_1} size='medium' onClick={() => zoomOut()}>
          <RemoveIcon />
        </Fab>
        <Fab aria-label="zoomIn" sx={fabStyle_2} size='medium' onClick={() => zoomIn()}>
          <AddIcon />
        </Fab>
        <Fab aria-label="locateMe" sx={fabStyle_3} size='medium' onClick={() => locateMe()} >
          <MyLocationIcon />
        </Fab>
        <Fab aria-label="draw" sx={fabStyle_4} size='medium' onClick={() => {
          setShowdraw(!showdraw)
          setShowdistance(false)
        }}>
          <DrawIcon />
        </Fab>
        <Fab aria-label="distance" sx={fabStyle_5} size='medium' onClick={() => {
          setShowdistance(!showdistance)
          setShowdraw(false)
        }} >
          <StraightenIcon />
        </Fab>
        <Fab aria-label="add" sx={fabStyle_6} size='medium' onClick={() => setShowlayer(!showlayer)}>
          <LayersIcon />
        </Fab>
        <Fab aria-label="add" sx={fabStyle_7} size='medium'>
          <PrintIcon />
        </Fab>
        <Fab aria-label="add" sx={fabStyle_8} size='medium' onClick={() => setShowpie(!showpie)} >
          <BarChartIcon />
        </Fab>
        <Fab aria-label="add" sx={fabStyle_9} size='medium' onClick={() => setShowsearch(!showsearch)}>
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
        }}
          onClick={() => setMapselect(!mapselect)}
        >
          <Box sx={{ display: 'flex', width: '100px', position: 'relative' }}>
            <img style={{ width: '100%', borderRadius: '10px' }} src={sphereBase} height='80px' />
            <div style={{
              width: '100%',
              position: 'absolute',
              bottom: 0,
              fontFamily: 'noto sans Thai',
              color: 'white',
              fontWeight: 600,
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderBottomLeftRadius: '8px',
              borderBottomRightRadius: '8px'
            }}>
              {
                showdefault ? 'แผนที่ค่าเริ่มต้น' : showroad ? 'ถนน' : showimagery ? 'ดาวเทียม' : 'แผนที่ค่าเริ่มต้น'
              }
            </div>
          </Box>
        </Fab >
        {mapselect ?
          <Fab sx={{
            position: 'fixed',
            width: '100px',
            height: '80px',
            minHeight: 'auto',
            bottom: '3rem',
            left: '24rem',
            borderRadius: '10px',
            outline: '3px solid orange',
            boxShadow: 0,
          }}
            onClick={() => {
              setShowroad(true)
              showroad ? setShowroad(false) : setShowdefault(false)
              setShowimagery(false)
              setMapselect(false)
            }}
          >
            <Box sx={{ display: 'flex', width: '100px', position: 'relative' }}
            >
              <img style={{ width: '100%', borderRadius: '10px' }} src={sphereBase} height='80px' />
              <div style={{
                width: '100%',
                position: 'absolute',
                bottom: 0,
                fontFamily: 'noto sans Thai',
                color: 'white',
                fontWeight: 600,
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px'
              }}>
                {showroad ?
                  'แผนที่ค่าเริ่มต้น'
                  : 'ถนน'}
              </div>
            </Box>
          </Fab >
          : <Box />}
        {mapselect ?
          <Fab sx={{
            position: 'fixed',
            width: '100px',
            height: '80px',
            minHeight: 'auto',
            bottom: '3rem',
            left: '31rem',
            borderRadius: '10px',
            outline: '3px solid orange',
            boxShadow: 0,
          }}
            onClick={() => {
              setShowimagery(true)
              showimagery ? setShowimagery(false) : setShowdefault(false)
              setShowroad(false)
              setMapselect(false)
            }}
          >
            <Box sx={{ display: 'flex', width: '100px', position: 'relative' }}>
              <img style={{ width: '100%', borderRadius: '10px' }} src={sphereSat} height='80px' />
              <div style={{
                width: '100%',
                position: 'absolute',
                bottom: 0,
                fontFamily: 'noto sans Thai',
                color: 'white',
                fontWeight: 600,
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px'
              }}>
                {showimagery ?
                  'แผนที่ค่าเริ่มต้น'
                  : 'ดาวเทียม'}
              </div>
            </Box>
          </Fab> : <Box />
        }
        {showpie ? <Fab sx={{
          position: 'fixed',
          width: '25rem',
          height: '25rem',
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
        {showlayer ?
          <Fab sx={{
            position: 'fixed',
            width: '25rem',
            height: '25rem',
            minHeight: 'auto',
            bottom: '13rem',
            right: '8rem',
            borderRadius: '10px',
            boxShadow: 0,
            backgroundColor: 'white',
          }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'start', p: 4 }}>
              <Typography sx={{
                position: 'flex',
                fontFamily: 'noto sans Thai',
                fontSize: '22px',
                color: 'black',
                fontWeight: 600,
                marginBottom: '16px'
              }}>
                ชั้นข้อมูล
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={flood} onChange={handleChange} name="flood"
                      sx={{
                        color: orange[600],
                        '&.Mui-checked': {
                          color: orange[600],
                        },
                      }} />
                  }
                  label={<Typography sx={{ fontFamily: 'noto sans Thai', fontSize: '18px' }}>ชั้นข้อมูลน้ำท่วม</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={repeatflood} onChange={handleChange} name="repeatflood"
                      sx={{
                        color: orange[600],
                        '&.Mui-checked': {
                          color: orange[600],
                        },
                      }} />
                  }
                  label={<Typography sx={{ fontFamily: 'noto sans Thai', fontSize: '18px' }}>ชั้นข้อมูลน้ำท่วมซ้ำซาก</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={devicecenter} onChange={handleChange} name="devicecenter"
                      sx={{
                        color: orange[600],
                        '&.Mui-checked': {
                          color: orange[600],
                        },
                      }} />
                  }
                  label={<Typography sx={{ fontFamily: 'noto sans Thai', fontSize: '18px' }}>ชั้นข้อมูลศูนย์เก็บเครื่องจักรเครื่องมือ</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={waterbuilding} onChange={handleChange} name="waterbuilding"
                      sx={{
                        color: orange[600],
                        '&.Mui-checked': {
                          color: orange[600],
                        },
                      }} />
                  }
                  label={<Typography sx={{ fontFamily: 'noto sans Thai', fontSize: '18px' }}>ชั้นข้อมูลอาคารชลศาสตร์</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={mainriver} onChange={handleChange} name="mainriver"
                      sx={{
                        color: orange[600],
                        '&.Mui-checked': {
                          color: orange[600],
                        },
                      }} />
                  }
                  label={<Typography sx={{ fontFamily: 'noto sans Thai', fontSize: '18px' }}>ชั้นข้อมูลแม่น้ำสายหลัก</Typography>}
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={minorriver} onChange={handleChange} name="minorriver"
                      sx={{
                        color: orange[600],
                        '&.Mui-checked': {
                          color: orange[600],
                        },
                      }}
                    />
                  }
                  label={<Typography sx={{ fontFamily: 'noto sans Thai', fontSize: '18px' }}>ชั้นข้อมูลแม่น้ำสายรอง</Typography>}
                />
              </FormGroup>
            </Box>
          </Fab > : <Box />
        }

        {showsearch ? <Fab sx={{
          position: 'fixed',
          width: '25rem',
          height: '25rem',
          minHeight: 'auto',
          top: '16rem',
          left: 'calc(100vw/2.4)',
          borderRadius: '10px',
          boxShadow: 0,
          backgroundColor: 'white',
        }}
        >
          <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column', height: '100%', justifyContent: 'start', p: 4 }}>
            <Typography sx={{
              position: 'flex',
              fontFamily: 'noto sans Thai',
              fontSize: '22px',
              color: 'black',
              fontWeight: 600,
              marginBottom: '16px'
            }}>
              ไปยังตำแหน่ง
            </Typography>
            <Box>
              <Tabs
                value={value}
                onChange={handleChange2}
                variant="fullWidth"
                scrollButtons={false}
                aria-label="scrollable prevent tabs example"
              >
                <Tab label="องศาทศนิยม" sx={{ fontFamily: 'noto sans Thai', color: '#EF873D', fontWeight: '600', fontSize: '18px' }} />
                <Tab label="UTM" sx={{ fontFamily: 'noto sans Thai', color: '#EF873D', fontWeight: '600', fontSize: '16px' }} />
              </Tabs>
              {
                (value === 0)
                  ? <Box sx={{ width: '100%', height: '15rem', marginTop: '10px' }}>

                    <TextField
                      id="outlined-basic"
                      label="ลองจิจูด"
                      variant="outlined"
                      sx={{ width: '100%', marginTop: '16px' }}
                      inputProps={{ style: { fontFamily: 'noto sans Thai' } }}
                      InputLabelProps={{ style: { fontFamily: 'noto sans Thai' } }} />
                    <TextField
                      id="outlined-basic"
                      label="ละติจูด"
                      variant="outlined"
                      sx={{ width: '100%', marginTop: '16px' }}
                      inputProps={{ style: { fontFamily: 'noto sans Thai' } }}
                      InputLabelProps={{ style: { fontFamily: 'noto sans Thai' } }} />
                    <Divider sx={{ marginTop: '24px', bgcolor: '#EF873D', height: '2px' }} />
                    <Box display='flex' flexDirection='row' justifyContent="space-between" sx={{ marginTop: '16px' }}>
                      <Button variant="outlined" sx={{ width: '45%', height: '3rem', fontFamily: 'noto sans Thai', fontSize: '18px', fontWeight: '600', color: '#EF873D' }}>ยกเลิก</Button>
                      <Button variant="contained" sx={{ width: '45%', height: '3rem', fontFamily: 'noto sans Thai', fontSize: '18px', fontWeight: '600', color: 'white', bgcolor: '#EF873D' }}>ไปยังตำแหน่ง</Button>
                    </Box>
                  </Box>
                  : <Box sx={{ width: '100%', height: '15rem', marginTop: '10px' }}>
                    <Box display='flex' flexDirection='row' justifyContent='space-between'>
                      <TextField
                        id="outlined-basic"
                        select
                        label="ระบุโซน"
                        variant="outlined"
                        sx={{ width: '30%', marginTop: '16px' }}
                        inputProps={{ style: { fontFamily: 'noto sans Thai' } }}
                        InputLabelProps={{ style: { fontFamily: 'noto sans Thai' } }} >
                        {zoneUTM.map((zone) => (
                          <MenuItem key={zone.value} value={zone.value} sx={{ fontFamily: 'noto sans Thai' }}>
                            {zone.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField
                        id="outlined-basic"
                        label="ค่าพิกัด"
                        variant="outlined"
                        sx={{ width: '65%', marginTop: '16px' }}
                        inputProps={{ style: { fontFamily: 'noto sans Thai' } }}
                        InputLabelProps={{ style: { fontFamily: 'noto sans Thai' } }} />
                    </Box>
                    <Typography sx={{ width: '100%', textAlign: 'left', marginTop: '24px', fontFamily: 'noto sans Thai', fontWeight: '600' }}>ตัวอย่าง 47N 40050 49513</Typography>
                    <Divider sx={{ marginTop: '48px', bgcolor: '#EF873D', height: '2px' }} />
                    <Box display='flex' flexDirection='row' justifyContent="space-between" sx={{ marginTop: '16px' }}>
                      <Button variant="outlined" sx={{ width: '45%', height: '3rem', fontFamily: 'noto sans Thai', fontSize: '18px', fontWeight: '600', color: '#EF873D' }}>ยกเลิก</Button>
                      <Button variant="contained" sx={{ width: '45%', height: '3rem', fontFamily: 'noto sans Thai', fontSize: '18px', fontWeight: '600', color: 'white', bgcolor: '#EF873D' }}>ไปยังตำแหน่ง</Button>
                    </Box>
                  </Box>
              }
            </Box>
          </Box>
        </Fab > : <Box />}
      </Box >
      {showdraw ? <MapDraw /> : <Box />
      }
    </>
  )

}
