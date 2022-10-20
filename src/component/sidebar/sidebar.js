import React, { useState , useContext , useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SidebarData } from './sidebarData';
import { NavbarData } from './navbar/navbarData'
import SubMenu from './SubMenu';
import NavMenu from './navbar/navMenu';
import Avatar from '@material-ui/core/Avatar';
import RoutePath from '../../route/route';
import { useHistory } from "react-router-dom";
import { AppContext } from '../../ContextCase';
import { Switch } from "antd";


const drawerWidth = 270;
const user = JSON.parse(localStorage.getItem('user'));
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  let history = useHistory();
  const data = localStorage.getItem("name")

  const [checked, setChecked] = useState(false);

  const onClickSwitch = (e) => {
    if(checked === false){
      console.log("false");
    } else {
      console.log("true");
    }
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenu = (event) => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    localStorage.removeItem("name")
    window.location.href = "/";
  };

  return (
    <>
      {
        data === 'นางสาว ณิชาดา แสงมณี' ? (
          <BrowserRouter>
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
              <Toolbar style={{ backgroundColor: '#F3F6FB', color: 'black', padding: 24 }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography noWrap component="div" style={{ fontSize: 16, marginLeft: 5, color: '#153D77', fontFamily: 'Prompt' , marginRight: 'auto'}}>
                  SIPHYA CONSTRUCTION
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                },
              }}
              variant="persistent"
              anchor="left"
              open={open}
            >
              <DrawerHeader style={{ display: "flex", justifyContent: "center" }}>
                <IconButton onClick={handleDrawerClose}>
                  <img src='/logo-nav.png' style={{ width: "100%", height: "100%" }} />
                  {/* {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
                </IconButton>
              </DrawerHeader>
              <Divider />
              {SidebarData.map((item, index) => (
                <SubMenu item={item} key={index} />
              ))}
              <div style={{ position: "absolute", bottom: 0, left: 0, background: '#FFFFFF', width: "100%", height: "12%" }}>
                <Divider />
                <IconButton onClick={handleMenu} color="inherit" style={{ marginTop: 15, marginLeft: 15 }}>
                  {/* <Avatar src={user.avatar} /> */}
                  <p style={{ marginLeft: 10, fontFamily: 'Prompt', fontSize: 16 }}> {data} </p>
                </IconButton>
              </div>
            </Drawer>
            <Main open={open}>
              <DrawerHeader />
              <RoutePath/>
            </Main>
          </Box>
          </BrowserRouter>
        ) : (
          <BrowserRouter>
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
              <Toolbar style={{ backgroundColor: '#F3F6FB', color: 'black', padding: 24 }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography noWrap component="div" style={{ fontSize: 16, marginLeft: 5, color: '#153D77', fontFamily: 'Prompt' , marginRight: 'auto'}}>
                  SIPHYA CONSTRUCTION
                </Typography>
              </Toolbar>
              
            </AppBar>
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                },
              }}
              variant="persistent"
              anchor="left"
              open={open}
            >
              <DrawerHeader style={{ display: "flex", justifyContent: "center" }}>
                <IconButton onClick={handleDrawerClose}>
                  <img src='/logo-nav.png' style={{ width: "100%", height: "100%" }} />
                  {/* {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
                </IconButton>
              </DrawerHeader>
              <Divider />
              {NavbarData.map((item, index) => (
                <NavMenu item={item} key={index} />
              ))}
              <div style={{ position: "absolute", bottom: 0, left: 0, background: '#FFFFFF', width: "100%", height: "12%" }}>
                <Divider />
                <IconButton onClick={handleMenu} color="inherit" style={{ marginTop: 15, marginLeft: 15 }}>
                  {/* <Avatar src={user.avatar} /> */}
                  <p style={{ marginLeft: 10, fontFamily: 'Prompt', fontSize: 16 }}> {data} </p>
                </IconButton>
              </div>
              
            </Drawer>
            <Main open={open}>
              <DrawerHeader />
              <RoutePath/>
            </Main>
          </Box>
          </BrowserRouter>
        )
      }
    </>
  );
}