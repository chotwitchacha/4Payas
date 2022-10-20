import React, { useState, useContext  } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import { Box } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { withRouter, Redirect } from "react-router";
import axios from 'axios';
import {AppContext} from '../ContextCase';
import { getDisplayName } from '@mui/utils';

const useStyles = makeStyles((theme) => ({

  image: {
    backgroundSize: 'cover',
    backgroundImage: 'url(./login-page.png)'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: "'Prompt', sans-serif",
    width: '-webkit-fill-available'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    display: 'contents'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: '#FFFFFF',
    backgroundColor: '#2F80ED',
    fontFamily: "'Prompt', sans-serif",
    borderRadius: '50px'
  },
  appHeader: {
    background: 'url(/background.png) no-repeat center center fixed',
    backgroundSize: 'cover',
    height: '100vh',
    objectFit: 'cover',
    WebkitBackgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  ui: {
    justifyContent: 'center',
    boxPack: 'center'
  },
  column: {
    maxWidth: '950px'
  },
  boxLogin: {
    width: '60%',
    height: '75vh'
  },
  text: {
    fontFamily: "'Prompt', sans-serif",
  },
  gridForm: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  }
}));

async function loginUser(credentials) {
  return fetch('https://www.mecallapi.com/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

const Signin = () => {
  const classes = useStyles();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [employee, setEmpolyee] = useState()
  const id = ''
  let history = useHistory();


  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password
    });
    if ('accessToken') {
        const getData = await axios.post('http://59be-2405-9800-b641-124a-987f-1d6b-45e9-2d1d.ngrok.io/api/employee', {
            email: username,
            password: password
          }).then((res) => res.data)
          const id = getData.map(item => item.employee_id)
          const name = getData.map(item => item.name)
          localStorage.setItem("name", name)
          const getName = localStorage.getItem("name", name)


          if(getName === 'นางสาว ณิชาดา แสงมณี'){
            window.location.href = `/dashboard`;  
          } else if(getName === 'นาง ตรีรัก ดีประสงค์'){
            window.location.href = `/subPerformance`;
          }

          localStorage.setItem('accessToken', response['accessToken']);
          localStorage.setItem('user', JSON.stringify(response['user']));

    } else {
      swal("Failed", response.message, "error");
    }
  }

  const onChangeEmail = (value) => {
    setUserName(value)
  }

  const onChangePassword = (value) => {
    setPassword(value)
  }

  return (
    <div className={classes.appHeader}>
      <Box className={classes.boxLogin}>
        <Grid container style={{ height: '-webkit-fill-available' }}>
          <Grid item xs={false} md={7} className={classes.image} />
          <Grid item xs={12} md={5} component={Paper} elevation={6} square className={classes.gridForm}>
            <div className={classes.paper}>
              <Typography style={{ fontFamily: "'Prompt', sans-serif", color: '#104B7D', fontSize: '28px' }}>
                ระบบประเมิน
              </Typography>
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  label="Username"
                  onChange={(e) => onChangeEmail(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  onChange={(e) => onChangePassword(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  เข้าสู่ระบบ
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Signin;