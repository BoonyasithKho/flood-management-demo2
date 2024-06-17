import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useLocation, useNavigate } from 'react-router-dom';

import data from '../components/DataPath';
import { Avatar, Grid } from '@mui/material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: '100%',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        fontFamily: 'noto sans Thai',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };

    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };

    const handleToggleOpenClose = () => {
        setOpen(!open);
    };

    const tabClickEvent = (url, index) => {
        navigate(url.path)
    }

    const dataRes = data();
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}
                sx={{ height: '75px', justifyContent: 'center', bgcolor: 'white ' }}
            >
                <Toolbar>
                    <IconButton
                        color="black"
                        aria-label="open drawer"
                        onClick={handleToggleOpenClose}
                        edge="start"
                        sx={{
                            marginRight: 2,
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Grid container sx={{ width: '100%', justifyContent: 'space-between', display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                        <p className='header-item'>ระบบบริการข้อมูลเพื่อบริหารจัดการน้ำท่วม</p>
                        <p className='header-item'>ยินดีต้อนรับ สุภาดา พิทักษ์ไพรศาล</p>
                    </Grid>
                    <Grid container sx={{ width: '100%', justifyContent: 'left', display: { sm: 'block', md: 'none' } }}>
                        <p className='header-item'>ระบบบริการข้อมูลเพื่อบริหารจัดการน้ำท่วม</p>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <Box sx={{ height: '72px' }}></Box>
                <List>
                    {dataRes.map((text, index) => (
                        <ListItem key={text.id} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                onClick={() => tabClickEvent(text, index)}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    marginTop: '10px',
                                    marginLeft: '6px',
                                    marginRight: '6px',
                                }}
                                style={{ height: '52px', backgroundColor: text.path === location.pathname ? '#EF873D' : '#fff', borderRadius: '50px' }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 2 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Avatar sx={{
                                        bgcolor: 'white',
                                        color: text.path === location.pathname ? 'orange' : 'grey',
                                    }}>
                                        {text.icon}
                                    </Avatar>
                                </ListItemIcon>
                                <ListItemText className='css-10hburv-MuiTypography-root' primary={
                                    <Typography noWrap
                                        style={{
                                            color: text.path === location.pathname ? '#fff' : 'grey',
                                            fontFamily: "noto sans Thai",
                                            display: "inline-block", whiteSpace: "pre-line",
                                        }}
                                        sx={{ width: '130px', height: '50px', alignContent: 'center', marginTop: '8px' }}
                                    >
                                        {text.label}
                                    </Typography>
                                }
                                    sx={{
                                        opacity: open ? 1 : 0,
                                        // color:
                                        // color: 'blue'
                                    }} />

                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}
