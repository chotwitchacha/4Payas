import React from 'react';
import './App.css';
import Signin from './page/Signin';
import Sidebar from './component/sidebar/sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';

const drawerWidth = 270;

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

function App() {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    return <Signin />
  }

  return (
    <Router>
      <div className="wrapper">
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
