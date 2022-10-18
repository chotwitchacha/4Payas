import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import { Box } from '@material-ui/core';
import { useHistory } from "react-router-dom";

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

export default function Signin() {
  const classes = useStyles();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  let history = useHistory();
  
  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password
    });
    if ('accessToken') {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
        .then((value) => {
          localStorage.setItem('accessToken', response['accessToken']);
          localStorage.setItem('user', JSON.stringify(response['user']));
          history.push("/dashboard");
        });
    } else {
      swal("Failed", response.message, "error");
    }
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
                  onChange={e => setUserName(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  onChange={e => setPassword(e.target.value)}
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