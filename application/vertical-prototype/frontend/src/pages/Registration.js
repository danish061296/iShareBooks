import React from 'react';
import './Registration.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navigation from '../components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUsername,
  setEmail,
  setPassword,
  setIsLoggedIn,
} from '../redux/actions/userActions';
import axios from 'axios';
import './Registration.css';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Registration = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const username = useSelector((state) => state.userReducer.username);
  const email = useSelector((state) => state.userReducer.email);
  const password = useSelector((state) => state.userReducer.password);

  const handleSubmit = (e) => {
    e.preventDefault();
    const registerUser = {
      username: username,
      email: email,
      password: password,
    };

    console.log(username);
    console.log(email);
    console.log(password);

    axios
      .post('http://localhost:3001/register', registerUser)
      .then((response) => console.log(response.data))
      .catch((e) => console.log(e));

    console.log('Submitted');
  };

  return (
    <div>
      <Navigation />
      <div className="signup__container">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5" style={{ fontWeight: 700 }}>
              Sign Up
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="uname"
                    name="username"
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    autoFocus
                    value={username}
                    onChange={(e) => dispatch(setUsername(e.target.value))}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => dispatch(setEmail(e.target.value))}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => dispatch(setPassword(e.target.value))}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="allowExtraEmails"
                        color="color: #28918a"
                      />
                    }
                    // label="I want to receive fun updates about books via email."
                    label={
                      <Typography variant="body2" color="textSecondary">
                        By clicking sign up, you agree to our Terms and Privacy
                        Policy.
                      </Typography>
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="color:#28918a !important;"
                className="signup__btn"
                onClick={handleSubmit}
                // className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Log in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}></Box>
        </Container>
      </div>
    </div>
  );
};

export default Registration;
