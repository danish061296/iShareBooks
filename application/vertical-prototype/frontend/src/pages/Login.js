import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navigation from '../components/Navigation';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  setEmail,
  setPassword,
  setIsLoggedIn,
  setUserId,
  setUsername,
} from '../redux/actions/userActions';

import Axios from 'axios';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/login">
        iShareBooks
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.info.dark,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email!')
      .required('Email is required!'),
    password: Yup.string()
      .min(8, 'Password must contain at least 8 characters!')
      .required('Password is required!'),
  });

  const onSubmit = (values, props) => {
    // e.preventDefault();

    dispatch(setEmail(values.email));
    dispatch(setPassword(values.password));

    const payload = {
      ...values,
    };

    // setTimeout(() => {
    //   props.resetForm();
    //   props.setSubmitting(false);
    // }, 1000);

    console.log(payload.email);

    const loginUser = {
      email: payload.email,
      password: payload.password,
    };
    Axios.post(`http://${window.location.hostname}:3001/login`, loginUser).then(
      (response) => {
        console.log(response.data);
        if (response.data.auth) {
          localStorage.setItem('token', response.data.token);
          dispatch(setIsLoggedIn(response.data.auth));
          dispatch(setUsername(response.data.userName));
          dispatch(setUserId(response.data.id));

          history.push('/buybooks');
        } else {
          store.addNotification({
            title: '',
            message: response.data.message,
            type: 'danger',
            insert: 'top',
            container: 'top-center',
            dismiss: {
              duration: 2000,
              showIcon: true,
            },
          });
          dispatch(setIsLoggedIn(false));
          dispatch(setUsername(''));

          dispatch(setEmail(''));
        }
      }
    );
  };

  return (
    <div>
      <Navigation />
      <ReactNotification />
      <div className="login__Container">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5" style={{ fontWeight: 700 }}>
              Login
            </Typography>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(props) => (
                <Form>
                  <Field
                    as={TextField}
                    className="input__field"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="email"
                    id="email"
                    label="Email Address"
                    autoComplete="email"
                    autoFocus
                    helperText={<ErrorMessage name="email" />}
                  />
                  <Field
                    as={TextField}
                    className="input__field"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    autoComplete="current-password"
                    helperText={<ErrorMessage name="password" />}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? (
                            <Tippy
                              content="hide password"
                              placement="bottom-start"
                            >
                              <Visibility className="eye__icon" />
                            </Tippy>
                          ) : (
                            <Tippy
                              content="show password"
                              placement="bottom-start"
                            >
                              <VisibilityOff className="eye__icon" />
                            </Tippy>
                          )}
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="signinButton"
                    // onClick={handleSubmit}
                  >
                    Sign In
                  </Button>
                </Form>
              )}
            </Formik>
            <Grid container className="signin__link">
              <Grid item>
                <Link href="/registration" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </div>
          <Box mt={38}>
            <Copyright />
          </Box>
        </Container>
      </div>
    </div>
  );
}
