import React, { useRef } from 'react';
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
import { useHistory } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUsername,
  setEmail,
  setPassword,
} from '../redux/actions/userActions';

import Axios from 'axios';
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
  const history = useHistory();
  const ref = useRef(null);

  const username = useSelector((state) => state.userReducer.username);
  const email = useSelector((state) => state.userReducer.email);
  const password = useSelector((state) => state.userReducer.password);

  const initialValues = {
    username: '',
    email: '',
    password: '',
    remember: false,
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Username is too short!')
      .required('Username is required!'),
    email: Yup.string()
      .email('Please enter a valid email!')
      .required('Email is required!'),
    password: Yup.string()
      .min(8, 'Password must contain at least 8 characters!')
      .required('Password is required!'),
    remember: Yup.boolean().oneOf(
      [true],
      'You must accept terms and conditions.'
    ),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerUser = {
      username: username,
      email: email,
      password: password,
    };

    console.log(username);

    //   console.log(username);
    //   console.log(email);
    //   console.log(password);

    // try {
    //   const response = await Axios.post('http://localhost:3001/register', {
    //     registerUser,
    //   });
    //   console.log(response);
    //   history.push('/login');
    // } catch (error) {
    //   console.error(error);
    // }

    // Axios.post('http://localhost:3001/register', registerUser).then(
    //   (response) => {
    //     console.log(response);
    //   }
    // );

    // dispatch(setUsername(''));
    // dispatch(setEmail(''));
    // dispatch(setPassword(''));

    console.log('Sign up Submitted');
  };

  const onSubmit = (values, props) => {
    const payload = {
      ...values,
    };
    setTimeout(() => {
      props.resetForm();
      // alert(JSON.stringify(payload, null, 2));

      props.setSubmitting(false);
    }, 2000);

    console.log(payload.username);

    const registerUser = {
      username: payload.username,
      email: payload.email,
      password: payload.password,
    };

    console.log(registerUser.username);
    Axios.post('http://localhost:3001/register', registerUser).then(
      (response) => {
        console.log(response.data);
        if (!response.data.registered) {
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
        } else {
          store.addNotification({
            title: '',
            message: response.data.message,
            type: 'success',
            insert: 'top',
            container: 'top-center',
            dismiss: {
              duration: 2000,
              showIcon: true,
            },
          });
        }
      }
    );

    dispatch(setUsername(payload.username));
    dispatch(setEmail(payload.email));
    dispatch(setPassword(payload.password));
  };

  return (
    <div>
      <Navigation />
      <ReactNotification />
      <div className="signup__container">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5" style={{ fontWeight: 700 }}>
              Sign Up
            </Typography>
            <Formik
              innerRef={ref}
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              <Form>
                {/* <form className={classes.form} noValidate> */}
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      autoComplete="uname"
                      name="username"
                      variant="outlined"
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      autoFocus
                      // value={values.username}
                      helperText={<ErrorMessage name="username" />}
                      // onChange={(e) => dispatch(setUsername(e.target.value))}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      // value={email}
                      helperText={<ErrorMessage name="email" />}
                      // onChange={(e) => dispatch(setEmail(e.target.value))}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      // value={password}
                      helperText={<ErrorMessage name="password" />}
                      // onChange={(e) => dispatch(setPassword(e.target.value))}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={FormControlLabel}
                      name="remember"
                      control={
                        <Checkbox
                          value="allowExtraEmails"
                          color="color: #28918a"
                        />
                      }
                      // label="I want to receive fun updates about books via email."
                      label={
                        <Typography variant="body2" color="textSecondary">
                          By clicking sign up, you agree to our Terms and
                          Privacy Policy.
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
                  // onClick={handleSubmit}
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
                {/* </form> */}
              </Form>
            </Formik>
          </div>
          <Box mt={5}></Box>
        </Container>
      </div>
    </div>
  );
};

export default Registration;
